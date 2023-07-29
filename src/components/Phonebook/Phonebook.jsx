import PropTypes from 'prop-types';
import './Phonebook.css';
const Phonebook = ({ titleBegin, titleEnd, children }) => {
  return (
    <section className="phoneBook">
      <h1 className="title">
        {titleBegin}
        <span className="titleEnd">{titleEnd}</span>
      </h1>
      {children}
    </section>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  titleBegin: PropTypes.string.isRequired,
  titleEnd: PropTypes.string.isRequired,
  children: PropTypes.node,
};
