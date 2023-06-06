import { Controller, FieldValues, Path, PathValue } from 'react-hook-form';
import { UIInputProps } from '@/components/UI/UIInput/types.ts';
import { UIInput } from '@/components/UI/UIInput';
import { BaseFormInputProps } from '../types.ts';

export const FormInput = <T extends FieldValues = FieldValues>({
  control,
  name,
  rules,
  defaultValue,
  isArrayField,
  nameKey,
  position,
  ...rest
}: BaseFormInputProps<T> & UIInputProps) => {
  return (
    <Controller
      defaultValue={defaultValue as PathValue<T, Path<T>>}
      rules={rules}
      control={control}
      name={isArrayField ? (`${nameKey}.${position}.value` as PathValue<T, Path<T>>) : name}
      render={({ field: { onChange, value, onBlur }, formState: { errors } }) => {
        return (
          <UIInput
            {...rest}
            onChange={(event) => {
              onChange(event);
            }}
            onBlur={onBlur}
            value={value ?? ''}
            // @ts-ignore
            error={isArrayField ? !!errors[nameKey]?.[position]?.value?.message : !!errors[name]?.message}
            helperText={
              // @ts-ignore
              <>{(isArrayField ? errors[nameKey]?.[position]?.value?.message : errors[name]?.message) ?? ''}</>
            }
          />
        );
      }}
    />
  );
};
