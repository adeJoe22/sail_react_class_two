import React, { useState, useContext } from 'react';
import './Login.css';
import { FormDataContext } from '../../context/GlobalContext';
export default function Login() {
  // const [formData, setFormData] = useState({
  //   firstname: '',
  //   lastname: '',
  //   email: '',
  //   imageUrl: '',
  //   password: '',
  // });

  const { formData, updateFormData } = useContext(FormDataContext);

  const { firstname, lastname, imageUrl, email, password } = formData;
  // Event handler to update form data

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    updateFormData((prevData) => ({
      ...prevData,
      [name]: name === 'imageUrl' ? URL.createObjectURL(files[0]) : value,
    }));
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass form data to the parent component
    console.log(formData);
  };

  return (
    <div className="form-container">
      <pre>{JSON.stringify(formData)}</pre>
      <form onSubmit={handleSubmit}>
        <input type="file" name="imageUrl" onChange={handleChange} />
        {imageUrl && <img src={imageUrl} alt="Selected" />}

        <input
          placeholder="First Name"
          type="text"
          name="firstname"
          value={firstname}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          type="text"
          name="lastname"
          value={lastname}
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
