import {StatusBar, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Tabs from '../../components/tabs';
import {loginTabs} from '../../constents/tabs';
import EmailLogin from '../../forms/EmailLogin';
import PhoneLogin from '../../forms/PhoneLogin';

const Login = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <SafeAreaView className="p-4">
      <StatusBar />
      <View className="pt-4">
        <Text className="text-[30px] font-bold pb-2">Login</Text>
        <Text className="text-gray/50 text-[18px]">
          Welcome back to the app
        </Text>
      </View>
      <View>
        <Tabs
          data={loginTabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </View>
      {selectedTab === 0 ? <EmailLogin /> : <PhoneLogin />}
    </SafeAreaView>
  );
};

export default Login;
