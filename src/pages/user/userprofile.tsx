import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { SEO, Section, LoadingSpinner, ProfileCard, Toast } from '@/components';
import { useUser } from '@/hooks';

const ProfilePage = () => {
  const router = useRouter();
  const { user, isAuth, loading: userLoading } = useUser();

  const [profileData, setProfileData] = useState({
    userName: '',
    contactNo: '',
    profession: '',
    purpose: [],
    image: '',
  });

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (user) {
      const { userName, contactNo, profession, purpose, image, id } = user;

      if (!userName || userName.trim() === '') {
        setShowToast(true);
        setTimeout(() => {
          router.replace('/onboard');
        }, 1500);
        return;
      }

      setProfileData({
        userName: userName || '',
        contactNo: contactNo || '',
        profession: profession || '',
        purpose: purpose || [],
        image: image || '',
        id,
      });
    }
  }, [user, router]);

  if (userLoading || !user) {
    return (
      <Section className='flex justify-center items-center min-h-[40vh]'>
        <LoadingSpinner />
      </Section>
    );
  }

  return (
    <Fragment>
      <SEO seoMeta={{ title: 'My Profile | The Boring Education' }} />
      {showToast && (
        <Toast
          message='Please finish onboarding first'
          type='error'
          position='top-right'
          onClose={() => setShowToast(false)}
        />
      )}
      <Section className='py-10'>
        <ProfileCard {...profileData} />
      </Section>
    </Fragment>
  );
};

export default ProfilePage;
