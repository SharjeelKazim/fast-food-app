import { useEffect } from "react";
import { Text, View } from "react-native";
import { Account, Client, ID } from "react-native-appwrite";

export default function AppwriteTest() {
  useEffect(() => {
    console.log("🚀 Running Appwrite test...");

    const client = new Client()
      .setEndpoint("https://fra.cloud.appwrite.io/v1")
      .setProject("689b5ce600196e05fca8")
      .setPlatform("com.spego.foodordering");

    const account = new Account(client);

    account
      .create(ID.unique(), "testuser@example.com", "Password123!", "Test User")
      .then((res) => console.log("✅ Success:", res))
      .catch((err) =>
        console.error("❌ Direct test error:", JSON.stringify(err, null, 2))
      );
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Testing Appwrite... Check console logs!</Text>
    </View>
  );
}
