import { getCategories, getMenu } from '@/lib/appwrite'
import useAppwrite from '@/lib/useAppwrite'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const search = () => {
  const { category, query } = useLocalSearchParams<{query: string; category: string}>()

    const { data, refetch, loading } = useAppwrite({ fn: getMenu, params: { category,  query,  limit: 6, } });
    const { data: categories } = useAppwrite({ fn: getCategories });

     useEffect(() => {
        refetch({ category, query, limit: 6})
    }, [category, query]);

  return (
    <View>
      <Text>search</Text>
    </View>
  )
}

export default search