import { useState } from 'react';
import './ReviewForm.css';
import FileInput from './FileInput';

function ReviewForm() {
  const [values, setValues] = useState({
    title: '',
    rating: 0,
    content: '',
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit} className='ReviewForm'>
      <FileInput
        name='imgFile'
        value={values.imgFile}
        onChange={handleChange}
      />
      <input
        name='title'
        type='text'
        value={values.title}
        onChange={handleInputChange}
      />
      <input
        name='rating'
        type='number'
        value={values.rating}
        onChange={handleInputChange}
      />
      <textarea
        name='content'
        value={values.content}
        onChange={handleInputChange}
      />
      <button type='submit'>확인</button>
    </form>
  );
}

export default ReviewForm;
