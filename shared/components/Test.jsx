import React from 'react'
import { Text, View } from 'react-native';
import { styled } from "nativewind";

const StyledText = styled(Text);

export const Test = () => {
  return (
    <View >
      <StyledText className='mt-3'>Welcome to Expo + Next.js 👋</StyledText>
    </View>
  )
}

