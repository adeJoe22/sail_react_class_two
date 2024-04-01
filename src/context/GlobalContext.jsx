import { createContext, useState } from 'react';

export const FormDataContext = createContext();

const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    imageUrl: '',
    password: '',
  });

  const updateFormData = (data) => {
    setFormData(data);
  };
  return (
    <>
      <FormDataContext.Provider value={{ formData, updateFormData }}>
        {children}
      </FormDataContext.Provider>
    </>
  );
};

export default FormDataProvider;
