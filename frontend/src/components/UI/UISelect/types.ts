import { AutocompleteProps } from '@mui/material';

export interface UISelectProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> extends Omit<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput' | 'getOptionLabel'> {
  helperText?: string;
  label?: string;
  getOptionLabel?: (option: T) => string;
}
