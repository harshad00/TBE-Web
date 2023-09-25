import {
  AddALeadRequestPayload,
  ChooseTechCohortActionType,
  ChooseTechCohortInitialFormDataType,
  UseBestTechProgramFormDataType,
} from '@/interfaces';
import { useReducer } from 'react';

const useBestTechProgramFormData = ({
  cohortName = '',
}: UseBestTechProgramFormDataType) => {
  // Reducer function to manage form field data
  const chooseTechCohortFormReducer = (
    state: ChooseTechCohortInitialFormDataType,
    { type, field, value }: ChooseTechCohortActionType
  ) => {
    switch (type) {
      case 'UPDATE_FIELD':
        return { ...state, [field]: value };
      default:
        return state;
    }
  };

  const initialFormData: AddALeadRequestPayload = {
    name: '',
    contactNo: '',
    email: '',
    profession: '',
    cohortName,
    school: '',
    college: '',
    workExperience: '',
  };

  const [formData, dispatch] = useReducer(
    chooseTechCohortFormReducer,
    initialFormData
  );

  return { formData, dispatch };
};

export default useBestTechProgramFormData;
