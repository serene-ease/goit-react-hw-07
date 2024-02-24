import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';
import { selectVisibleContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={style.list} >
      {contacts.map(contact => (
        <li className={style.listItem} key={contact.id}>
          <Contact contact={contact}/>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;