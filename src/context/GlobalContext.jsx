import { createContext, useContext, useState } from 'react';

export const FormDataContext = createContext();

// export const useFormDataContext = useContext(FormDataContext);

const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    imageUrl: '',
    password: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (data) => {
    setFormData(data);
  };

  const submittedData = () => {
    setTimeout(() => {
      setIsSubmitted((e) => !e);
    }, 1000);
  };
  return (
    <>
      <FormDataContext.Provider
        value={{ formData, updateFormData, submittedData, isSubmitted }}
      >
        {children}
      </FormDataContext.Provider>
    </>
  );
};

export default FormDataProvider;
