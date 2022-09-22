import { useState } from 'react';
import { Form, Input } from './styles';

export const Search = () => {

const [inputSearch, setInputSearch] = useState({
    typing: false,
    text: ''
});



  const handleChange = (e) => {
    setInputSearch({
        typing: true,
        text: e.target.value
    });

  }



  return (
    <Form>
        <Input 
            type="text"
            onChange={handleChange} 
        />
    </Form>
  )
}
