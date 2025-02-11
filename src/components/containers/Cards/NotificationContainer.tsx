import { FlexContainer, Link, Text } from '@/components';
import { useNotifications } from '@/hooks';
import { LinkIcon } from '@heroicons/react/20/solid';

const NotificationContainer = () => {
  const { notifications } = useNotifications();

  const noNotificationContainer = notifications.length === 0 && (
    <Text level='p' className='text-center'>
      We're working on something exciting. Stay tuned!
    </Text>
  );

  return (
    <FlexContainer
      direction='col'
      className='px-2 py-4 m-auto gradient-6 md:w-1/3 w-full rounded-2 border gap-4'
    >
      <FlexContainer direction='col' className='gap-4'>
        <FlexContainer direction='col' className='gap-1.5'>
          <Text level='span' className='pre-title text-greyDark'>
            What’s Happening at
          </Text>
          <Text level='h5' className='heading-5 text-light'>
            The Boring Education
          </Text>
        </FlexContainer>
        {noNotificationContainer}
        {notifications && (
          <FlexContainer direction='col' className='gap-1'>
            {notifications.map((notification, index) => {
              const { type, text, isExternalLink, link } = notification;

              return (
                <FlexContainer
                  key={index}
                  direction='col'
                  className='p-2 w-full bg-lightBG rounded-2 border border-secondary gap-2.5'
                >
                  <FlexContainer direction='col' className='gap-0.5'>
                    <FlexContainer
                      className='gap-1 w-full'
                      justifyCenter={false}
                    >
                      <Text level='span' className='strong-text text-primary'>
                        {type}
                      </Text>
                      {isExternalLink && link && (
                        <Link href={link} target='_blank'>
                          <LinkIcon className='w-2 text-primary' />
                        </Link>
                      )}
                    </FlexContainer>
                    <Text level='p' className='pre-title'>
                      {text}
                    </Text>
                  </FlexContainer>
                </FlexContainer>
              );
            })}
          </FlexContainer>
        )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default NotificationContainer;
