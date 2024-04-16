import { FormCheckbox } from './FormCheckbox';
import { FormDatePicker } from './FormDatePicker';
import { FormDateRangePicker } from './FormDateRangePicker';
import { FormGroup } from './FormGroup';
import { FormInput } from './FormInput';
import { FormPhoneInput } from './FormInput copy';
import { FormInputCurrency } from './FormInputCurrency';
import { FormMultiSelect } from './FormMultiSelect';
import { FormRadioGroup } from './FormRadioGroup';
import { FormRoot } from './FormRoot';
import { FormSelect } from './FormSelect';
import { FormSwitch } from './FormSwitch';
import { FormTextArea } from './FormTextArea';

export { useFormContext } from 'react-hook-form';
export { useForm } from './useForm';

export const Form = {
  Root: FormRoot,
  Group: FormGroup,
  Switch: FormSwitch,
  Input: FormInput,
  InputCurrency: FormInputCurrency,
  Select: FormSelect,
  Checkbox: FormCheckbox,
  DatePicker: FormDatePicker,
  DateRangePicker: FormDateRangePicker,
  MultiSelect: FormMultiSelect,
  TextArea: FormTextArea,
  PhoneInput: FormPhoneInput,
  RadioGroup: FormRadioGroup,
};
