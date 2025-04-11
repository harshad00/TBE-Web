'use client';

import { Fragment, useEffect, useState } from 'react';
import { SEO, Section, LoadingSpinner } from '@/components';
import { useUser } from '@/hooks';
import { ProfileCard } from '@/components';

const ProfilePage = () => {
  const { user, isAuth, loading: userLoading } = useUser();

  const [profileData, setProfileData] = useState({
    userName: '',
    contactNo: '',
    profession: '',
    purpose: [],
    image: '',
  });

  useEffect(() => {
    if (user) {
      const { userName, contactNo, profession, purpose, image, id } = user;
      setProfileData({
        userName: userName || '',
        contactNo: contactNo || '',
        profession: profession || '',
        purpose: purpose || [],
        image: image || '',
        id,
      });
    }
  }, [user]);

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
      <Section className='py-10'>
        <ProfileCard {...profileData} />
      </Section>
    </Fragment>
  );
};

export default ProfilePage;
