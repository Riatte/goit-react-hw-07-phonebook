import { useDispatch } from 'react-redux';
import { StyledContacts, StyledButton } from './ContactTemplateStyled';
import { deleteContact } from 'redux/operations';

export const ContactTemplate = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <StyledContacts>
      <span>{name}:</span>
      <span>{number}:</span>
      <StyledButton
        onClick={() => {
          dispatch(deleteContact({ id, name }));
        }}
      >
        Delete
      </StyledButton>
    </StyledContacts>
  );
};
