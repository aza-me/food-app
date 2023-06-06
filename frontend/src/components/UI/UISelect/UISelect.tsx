import React, { forwardRef } from 'react';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import { UIInput } from '@/components/UI/UIInput';

interface AutocompleteComponentProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> extends Omit<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'> {}

function UISelect<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
>(
  { onChange, ...rest }: AutocompleteComponentProps<T, Multiple, DisableClearable, FreeSolo>,
  ref: React.Ref<HTMLDivElement>,
) {
  return <Autocomplete {...rest} ref={ref} renderInput={(params) => <UIInput {...params} />} onChange={onChange} />;
}

export default forwardRef(UISelect);
