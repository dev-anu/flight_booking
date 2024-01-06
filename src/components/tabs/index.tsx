import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC, useState} from 'react';
import {TabsType, TabsProps} from '../../types/tabs';

const Tabs: FC<TabsProps> = ({data, selectedTab, setSelectedTab}) => {
  const handleTabSelected = (id: number) => {
    setSelectedTab(id);
  };
  return (
    <View className="flex-row mt-5">
      {data?.map((item: TabsType) => (
        <TouchableOpacity
          onPress={() => handleTabSelected(item?.id)}
          key={item?.id}>
          <Text
            className={`pr-4 ${
              selectedTab === item?.id && 'text-primary selectedTabs'
            }`}>
            {item?.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Tabs;
