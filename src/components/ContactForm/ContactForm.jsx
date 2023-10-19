import { useState } from 'react';
import {
  StyledForm,
  StyledFormLabel,
  StyledFormInput,
  StyledFormBtn,
} from './ContactFormStyled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const formattedName = name.toLowerCase();
    const isNewContact = contacts.every(
      contact => contact.name.toLowerCase() !== formattedName
    );
    if (!isNewContact) {
      alert(`${name} is already exist`);
      return;
    }
    dispatch(addContact({ name, number }));
    clear();
  };

  const clear = () => {
    setName('');
    setNumber('');
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormLabel>
        Name
        <StyledFormInput
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeName}
          value={name}
        />
      </StyledFormLabel>
      <StyledFormLabel>
        Number
        <StyledFormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeNumber}
          value={number}
        />
      </StyledFormLabel>
      <StyledFormBtn type="submit">Add contact</StyledFormBtn>
    </StyledForm>
  );
};
