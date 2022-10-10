import { BootstrapInput as FilterInput } from 'UI/stylesUi';
import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <div>
      <h2>Find Contacts by name</h2>
      <label>
        <FilterInput value={value} onChange={e => onChange(e.target.value)} />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
