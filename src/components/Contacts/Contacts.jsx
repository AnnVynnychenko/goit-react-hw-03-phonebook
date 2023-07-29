import PropTypes from 'prop-types';
import './Contacts.css';

const Contacts = ({ title, children }) => {
  return (
    <section className="contacts">
      <h2 className="titleContacts">{title}</h2>
      {children}
    </section>
  );
};

export default Contacts;

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
