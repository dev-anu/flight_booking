import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {useField} from 'formik';

const FormikInput = ({name, placeholder, type, ...props}: any) => {
  const [field, meta, helpers] = useField(name);

  const isPassword = type === 'password';
  const isNumber = type === 'number';

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={helpers.setValue}
        onBlur={helpers.setTouched}
        value={field.value}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        keyboardType={isNumber ? 'numeric' : 'default'}
        autoFocus={props?.autoFocus}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Text style={styles.error}>{meta.error}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    padding: 10,
    borderRadius: 4,
  },
  input: {
    // Add styles for your input
  },
  error: {
    color: 'red',
    // Add styles for your error message
  },
});

export default FormikInput;
