import { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';

export interface BaseFormInputProps<T extends FieldValues = FieldValues> {
  name: Path<T>;
  control: Control<T, any>;
  rules?: Omit<RegisterOptions<T, Path<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  range?: boolean;

  // For arrays []
  isArrayField?: boolean;
  nameKey?: Path<T>;
  position?: number;
}
