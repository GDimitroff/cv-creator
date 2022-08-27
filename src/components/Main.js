import { useState } from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

export default function Main() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    title: '',
    photoURL: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: '',
  });

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  return (
    <main className="main">
      <CVForm handleOnChange={handleOnChange} formData={formData} />
      <CVPreview cv={formData} />
    </main>
  );
}
