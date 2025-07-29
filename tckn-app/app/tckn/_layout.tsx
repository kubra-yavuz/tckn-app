import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ title: 'T.C. Kimlik No Doğrulama' }} />
            <Stack.Screen name="result" options={{ title: 'T.C. Kimlik No Doğrulama Sonucu' }} />
        </Stack>
    )
}
