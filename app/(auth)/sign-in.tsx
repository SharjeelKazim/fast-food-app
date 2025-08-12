import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const SignIn = () => {
  const router = useRouter();

  return (
    <View>
      <Text>sign-in</Text>
      <Button title="SignUp" onPress={() => router.push('/sign-up')} />
    </View>
  );
};

export default SignIn;