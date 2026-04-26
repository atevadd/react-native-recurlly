import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 flex items-center justify-center gap-2"
    >
      <Text className="text-6xl font-bold mb-12">Homepage</Text>
      <Link href="/onboarding" className="bg-primary px-4 py-4 text-white font-bold rounded-lg">Go to onboarding</Link>
      <Link href="/(auth)/sign-in" className="bg-primary px-4 py-4 text-white font-bold rounded-lg">Go to Signin</Link>
      <Link href="/(auth)/sign-up" className="bg-primary px-4 py-4 text-white font-bold rounded-lg">Go to Signup</Link>
    </View>
  );
}
