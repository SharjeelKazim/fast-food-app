import seed from '@/lib/seed'
import { Button, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const search = () => {
  
  return (
    <SafeAreaView className='bg-white h-full'>
      <Text>
        Search
      </Text>

      <Button
  title="seed"
  onPress={() =>
    seed().catch((error) => console.log("Failed to seed database:", error))
  }
>

      </Button>
    </SafeAreaView>
  )
}

export default search