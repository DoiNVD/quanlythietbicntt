import FormSearch from './Select/FormSearch';
import SelectFirst from './Select/SelectFirst';
import SelectSecond from './Select/SelectSecond';
import './style.css';

const FormSelect = () => (
  <div className="select-row">
    <SelectFirst />
    <SelectSecond />
    <FormSearch />
  </div>
);

export default FormSelect;
