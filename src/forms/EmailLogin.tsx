import React from 'react';
import {Formik} from 'formik';
import FormikInput from '../components/input';
import {Button, View} from 'react-native';

const EmailLogin = () => {
  return (
    <View className="mt-2">
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        // Add validation here as needed
      >
        {({handleSubmit}) => (
          <View>
            <FormikInput
              name="email"
              placeholder="Email"
              type="text"
              autoFocus={true}
            />
            <FormikInput
              name="password"
              placeholder="Password"
              type="password"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default EmailLogin;
