import {useState} from 'react';
import {validator} from '../utils/validator';

const constraints = {
  title: {
    presence: {
      message: 'cannot be empty',
    },
    length: {
      minimum: 3,
      message: 'must be atleast 3 chars',
    },
  },
  description: {
    length: {
      minimum: 3,
      message: 'must be atleast 3 chars',
    },
  },
};

const useUploadForm = (callback) => {
  const [uploadErrors, setUploadErrors] = useState({});
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
  });

  const handleInputEnd = (name, text) => {
    if (text === '') text = null;
    const error = validator(name, text, constraints);
    setUploadErrors((uploadErrors) => {
      return {
        ...uploadErrors,
        [name]: error,
      };
    });
  };

  const handleInputChange = (name, text) => {
    // console.log(name, text);
    // console.log('inputs stat', inputs);
    setInputs((inputs) => {
      return {
        ...inputs,
        [name]: text,
      };
    });
  };

  const validateOnSend = () => {
    const titleError = validator('title', inputs.title, constraints);
    const descriptionError = validator(
      'description',
      inputs.description,
      constraints
    );

    setUploadErrors((uploadErrors) => {
      return {
        ...uploadErrors,
        username: titleError,
        password: descriptionError,
      };
    });
    if (titleError !== null || descriptionError !== null) {
      return false;
    }

    return true;
  };

  const reset = () => {
    setInputs({
      title: '',
      description: '',
    });
    setUploadErrors({});
  };

  return {
    handleInputChange,
    handleInputEnd,
    inputs,
    uploadErrors,
    validateOnSend,
    reset,
  };
};

export default useUploadForm;
