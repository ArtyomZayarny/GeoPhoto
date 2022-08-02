import {Text} from 'react-native';
import React, {useContext} from 'react';
import {Controller} from 'react-hook-form';
import {Input} from '../input';
import {FormContext} from '../sign-up-form';

interface FormInputProps {
  name: string;
  placeholder: string;
  iconName: string;
  type?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  placeholder,
  iconName,
  type,
}) => {
  const {control, errors} = useContext(FormContext);
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder={placeholder}
            icon={iconName}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            type={type}
          />
        )}
        name={name}
      />
      {errors.userName && <Text>This is required.</Text>}
    </>
  );
};
