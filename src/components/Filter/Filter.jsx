import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ filterValue, onFilterContacts }) => {
  return (
    <label className="contactLabel">
      <span className="textForm">Find contacts by name</span>
      <input
        className="contactInput filterInput"
        type="text"
        value={filterValue}
        onChange={onFilterContacts}
        required
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterContacts: PropTypes.func.isRequired,
};
