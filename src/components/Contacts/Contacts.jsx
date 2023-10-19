import { getContacts, getFilter, getIsLoading } from 'redux/selectors';
import { ContactTemplate } from '../ContactTemplate/ContactTemplate';
import { StyledContacts } from './ContactsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { useEffect } from 'react';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formattedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(formattedFilter)
  );

  return (
    <StyledContacts>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactTemplate key={id} name={name} number={number} id={id} />
      ))}

      {isLoading && <ContentLoader />}
    </StyledContacts>
  );
};
