import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApi } from '@/hooks';
import { routes } from '@/constant';
import {
  InputFieldContainer,
  Text,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  FlexContainer,
  GridContainer,
  Button,
  Toast,
} from '@/components';
import {
  PhoneIcon,
  BriefcaseIcon,
  AdjustmentsHorizontalIcon as TargetIcon,
  UserIcon,
  PencilIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { ProfileCardProps } from '@/interfaces';

const ProfileCard = ({
  id,
  userName,
  contactNo,
  profession,
  purpose,
  image,
}: ProfileCardProps & { id: string }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempUsername, setTempUsername] = useState(userName);
  const [currentData, setProfileData] = useState({
    userName,
    contactNo,
    profession,
    purpose,
    image,
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>(
    'success'
  );
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setTempUsername(userName);
    setProfileData({ userName, contactNo, profession, purpose, image });
  }, [userName, contactNo, profession, purpose, image]);

  const { makeRequest, loading } = useApi('update-profile');

  const USER_PROFILE_FIELDS = [
    {
      label: 'Username',
      key: 'userName',
      icon: <UserIcon className='w-3 h-3' />,
    },
    {
      label: 'Contact Number',
      key: 'contactNo',
      icon: <PhoneIcon className='w-3 h-3' />,
    },
    {
      label: 'Profession',
      key: 'profession',
      icon: <BriefcaseIcon className='w-3 h-3' />,
    },
    {
      label: 'Purpose',
      key: 'purpose',
      icon: <TargetIcon className='w-3 h-3' />,
    },
  ];

  const handleUpdateUsername = async () => {
    try {
      const response = await makeRequest({
        method: 'PATCH',
        url: `${routes.api.onboard}?userId=${id}`,
        body: {
          newUserName: tempUsername,
        },
      });
      console.log(response);

      if (!response.status) {
        setMessage(response.message || 'Update failed');
        setMessageType('error');
        setShowToast(true);
        return;
      }

      setProfileData((prev) => ({
        ...prev,
        userName: tempUsername,
      }));
      setIsEditing(false);
      setMessage('Username updated successfully!');
      setMessageType('success');
      setShowToast(true);
    } catch (err) {
      setMessage('Something went wrong!');
      setMessageType('error');
      setShowToast(true);
    }
  };

  return (
    <>
      <Card className='max-w-[60%] mx-auto overflow-hidden backdrop-blur-sm bg-card/95'>
        <CardHeader className='bg-primary/5 border-b'>
          <CardTitle className='text-3xl text-center font-semibold'>
            My Boring Profile
          </CardTitle>
        </CardHeader>
        <CardContent className='p-6'>
          <FlexContainer direction='col' className='items-center'>
            <div className='relative group'>
              <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg hover:shadow-primary/50 transition-shadow duration-300'>
                <Image
                  src={
                    currentData.image ||
                    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&h=200'
                  }
                  alt='Profile'
                  className='object-cover w-full h-full'
                  priority
                  width={200}
                  height={200}
                />
              </div>
            </div>

            <div className='mt-8 w-full space-y-6'>
              <GridContainer className='gap-6'>
                {USER_PROFILE_FIELDS.map((field, index) => (
                  <motion.div
                    key={field.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className='space-y-2'
                  >
                    <FlexContainer
                      justifyCenter={false}
                      className='ml-3 justify-between'
                    >
                      <Text
                        level='label'
                        className='text-lg font-medium underline decoration-primary decoration-2 underline-offset-4'
                      >
                        {field.label}
                      </Text>
                      {field.key === 'userName' && !isEditing && (
                        <Button
                          variant='GHOST'
                          onClick={() => {
                            setIsEditing(true);
                            setMessage('');
                          }}
                          text={<PencilIcon className='h-2 w-2' />}
                          className='!p-1'
                        />
                      )}
                    </FlexContainer>

                    <div className='relative'>
                      <div className='absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground'>
                        {field.icon}
                      </div>

                      <AnimatePresence mode='wait'>
                        {field.key === 'userName' && isEditing ? (
                          <motion.div
                            key='input'
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className='flex gap-2'
                          >
                            <div className='pl-8 pb-4 w-full'>
                              <InputFieldContainer
                                type='text'
                                value={tempUsername}
                                onChange={(value) => setTempUsername(value)}
                                label='Username'
                                isOptional={true}
                                className='!mb-0'
                              />
                            </div>

                            <div className='flex gap-2 pt-4'>
                              <Button
                                variant='SUCCESS'
                                onClick={handleUpdateUsername}
                                text={<CheckIcon className='h-2 w-2' />}
                              />
                              <Button
                                variant='OUTLINE'
                                onClick={() => {
                                  setTempUsername(currentData.userName);
                                  setIsEditing(false);
                                }}
                                text={<XMarkIcon className='h-2 w-2' />}
                              />
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key='text'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className='pl-10 py-2 px-3 rounded-md bg-muted/50 text-muted-foreground'
                          >
                            {field.key === 'purpose'
                              ? (currentData.purpose || []).join(', ')
                              : currentData[field.key]}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </GridContainer>

              {loading && (
                <Text level='caption' className='text-primary text-sm'>
                  Saving...
                </Text>
              )}
            </div>
          </FlexContainer>
        </CardContent>
      </Card>

      {/* Toast Message */}
      {showToast && (
        <Toast
          message={message}
          type={messageType}
          duration={3000}
          position='top-right'
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default ProfileCard;
