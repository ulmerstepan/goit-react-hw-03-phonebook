import { LabelFilter, InputFilter } from './Filter.styled';
import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </LabelFilter>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
