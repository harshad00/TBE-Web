import { FlexContainer, LinkButton, SelectInput } from '@/components';
import {
  apiUrls,
  programLeadStatusList,
  sendMessageToWhatsappURL,
} from '@/constant';
import { useApi } from '@/hooks';
import { ProgramLeadCard } from '@/interfaces';
import { formatDate } from '@/utils';
import { ChangeEvent } from 'react';

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

  const handleUpdateLeadStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    const status = event.target.value;

    makeRequest({
      method: 'PATCH',
      url: apiUrls.leadCohort,
      body: {
        id: _id,
        status,
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
        <div className='paragraph'>Name: {name}</div>
        <div className='paragraph'>Cohort Name: {cohortName}</div>
        <div className='paragraph'>Created on: {formatDate(createdAt)}</div>
        <div className='paragraph'>Updated on: {formatDate(updatedAt)}</div>
      </FlexContainer>
      <FlexContainer
        itemCenter={true}
        justifyCenter={false}
        wrap={false}
        className='justify-start gap-1'
      >
        <div className='paragraph'>Status</div>
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
