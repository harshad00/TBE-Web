import { FlexContainer, LinkButton, SelectInput, Text } from '@/components';
import {
  apiUrls,
  programLeadStatusList,
  sendMessageToWhatsappURL,
} from '@/constant';
import { useApi } from '@/hooks';
import { ProgramLeadCard } from '@/interfaces';
import { formatDate } from '@/utils';

const ProgramLeadsCard = ({
  _id,
  name,
  email,
  phone,
  cohortName,
  status,
  createdAt,
  updatedAt,
}: ProgramLeadCard) => {
  const { makeRequest } = useApi();

  const handleUpdateLeadStatus = (value: string) => {
    makeRequest({
      method: 'PATCH',
      url: apiUrls.leadCohort,
      body: {
        id: _id,
        status: value,
      },
    });
  };

  return (
    <FlexContainer
      direction='col'
      itemCenter={false}
      justifyCenter={true}
      className='gap-3 rounded-lg border border-black p-2'
    >
      <FlexContainer
        direction='col'
        itemCenter={false}
        justifyCenter={false}
        className='items-start justify-start gap-1'
      >
        <Text level='p' className='paragraph'>
          Name: {name}
        </Text>
        <Text level='p' className='paragraph'>
          Cohort Name: {cohortName}
        </Text>
        <Text level='p' className='paragraph'>
          Created on: {formatDate(createdAt)}
        </Text>
        <Text level='p' className='paragraph'>
          Updated on: {formatDate(updatedAt)}
        </Text>
      </FlexContainer>
      <FlexContainer
        itemCenter={true}
        justifyCenter={false}
        wrap={false}
        className='justify-start gap-1'
      >
        <Text level='p' className='paragraph'>
          Status
        </Text>
        <div className='w-full'>
          <SelectInput
            list={programLeadStatusList}
            selectedItem={status}
            onChange={handleUpdateLeadStatus}
          />
        </div>
      </FlexContainer>
      <FlexContainer wrap={false} className='gap-1'>
        <LinkButton
          buttonProps={{
            variant: 'GHOST',
            text: 'Call',
          }}
          href={`tel:${phone}`}
          className='w-full'
        />
        <LinkButton
          buttonProps={{
            variant: 'GHOST',
            text: 'Whatsapp',
          }}
          target='BLANK'
          href={sendMessageToWhatsappURL(phone)}
          className='w-full'
        />
        {email && (
          <LinkButton
            buttonProps={{
              variant: 'GHOST',
              text: 'Email',
            }}
            href={`mailto:${email}`}
            className='w-full'
          />
        )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default ProgramLeadsCard;
