import useAuthStore from "@/store/auth.store";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    await logout(); 
    router.replace("/sign-up"); 
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-primary h-[30%] rounded-b-[50px] items-center justify-center relative">
        <Text className="absolute top-16 text-lg font-bold text-black">
          Profile
        </Text>
        {/* <TouchableOpacity className="absolute top-16 right-5">
          <MaterialCommunityIcons name="pencil" size={22} color="#000" />
        </TouchableOpacity> */}
        <Image
          source={{ uri: user?.avatar || "https://randomuser.me/api/portraits/women/68.jpg" }}
          className="w-20 h-20 rounded-full mt-8"
        />
      </View>

      {/* Info */}
      <View className="mt-8 px-6 space-y-6">
        {/* Name */}
        <View className="flex-row items-center top-12">
          <MaterialCommunityIcons name="account" size={22} color="#000" />
          <View className="ml-4">
            <Text className="text-xs text-gray-600">Name</Text>
            <Text className="text-base font-medium">{user?.name || "Not Provided"}</Text>
          </View>
        </View>

        {/* Department */}
        {/* <View className="flex-row items-center top-7">
          <MaterialCommunityIcons name="office-building" size={22} color="#000" />
          <View className="ml-4">
            <Text className="text-xs text-gray-600">Department</Text>
            <Text className="text-base font-medium">{ "Not Provided"}</Text>
          </View>
        </View> */}

        {/* UserID */}
        <View className="flex-row items-center top-16">
          <MaterialCommunityIcons name="card-account-details" size={22} color="#000" />
          <View className="ml-4">
            <Text className="text-xs text-gray-600">User Id</Text>
            <Text className="text-base font-medium">{user?.$databaseId || "Not Provided"}</Text>
          </View>
        </View>

         {/* CreatedAt */}
        <View className="flex-row items-center top-16">
          <MaterialCommunityIcons name="clock-outline" size={22} color="#000" />
          <View className="ml-4">
            <Text className="text-xs text-gray-600">Created At</Text>
            <Text className="text-base font-medium">{user?.$createdAt || "Not Provided"}</Text>
          </View>
        </View>

        {/* Email */}
        <View className="flex-row items-center top-20">
          <MaterialCommunityIcons name="email" size={22} color="#000" />
          <View className="ml-4">
            <Text className="text-xs text-gray-600">E-Mail</Text>
            <Text className="text-base font-medium">{user?.email || "Not Provided"}</Text>
          </View>
        </View>

        {/* Logout Button */}
        <View className="mt-auto px-6 top-56">
          <TouchableOpacity
            className="flex-row items-center justify-center bg-primary py-3 rounded-2xl"
            onPress={handleLogout}
          >
            <MaterialCommunityIcons name="logout" size={22} color="#fff" />
            <Text className="text-white font-semibold text-base ml-2">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
