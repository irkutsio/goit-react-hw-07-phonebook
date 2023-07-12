import PropTypes from 'prop-types';
import { UserContact } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <UserContact key={id}>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button"
       onClick={handleDelete}
       >
        Delete
      </button>
    </UserContact>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
