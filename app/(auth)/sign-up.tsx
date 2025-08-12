import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const Signup = () => {
  const router = useRouter();
  return (
    <View>
      <Text>sign-up</Text>
            <Button title="SignIn" onPress={() => router.push('/sign-in')} />
      
    </View>
  )
}

export default Signup