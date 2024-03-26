import { FormCheckbox } from './FormCheckbox';
import { FormDatePicker } from './FormDatePicker';
import { FormDateRangePicker } from './FormDateRangePicker';
import { FormGroup } from './FormGroup';
import { FormInput } from './FormInput';
import { FormInputCurrency } from './FormInputCurrency';
import { FormRoot } from './FormRoot';
import { FormSelect2 } from './FormSelect2';
import { FormSwitch } from './FormSwitch';
import { FormTextArea } from './FormTextArea';

export { useFormContext } from 'react-hook-form';

export const Form = {
  Root: FormRoot,
  Group: FormGroup,
  Switch: FormSwitch,
  Input: FormInput,
  InputCurrency: FormInputCurrency,
  Select2: FormSelect2,
  Checkbox: FormCheckbox,
  DatePicker: FormDatePicker,
  DateRangePicker: FormDateRangePicker,
  // MultiSelect: FormMultiSelect,
  TextArea: FormTextArea,
  // Radio: FormRadio,
};
