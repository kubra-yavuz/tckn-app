import { Stack, useLocalSearchParams, useRouter } from "expo-router"
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

const Result = () => {
    const { tckn } = useLocalSearchParams<{ tckn?: string }>();
    const router = useRouter();

    const isValid = (t?: string) => {
        //Kimlik numarası burada kontrol edilecek.
        if (t == null) return false;
        if (!/^\d{11}$/.test(t)) return false; // 11 haneli olmalı
        if (t[0] === '0') return false; // İlk hane 0 olamaz

        const digits = t.split('').map(Number);
        const oddsum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
        const evensum = digits[1] + digits[3] + digits[5] + digits[7];
        const d10 = (oddsum * 7 - evensum) % 10;
        const d11 = (oddsum + evensum + d10) % 10;

        return digits[9] === d10 && digits[10] === d11;


    }

    return (
        <View style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 16,
        }}>
            <Stack.Screen options={{ title: 'Kontrol Sonucu' }} />
            <Text variant='titleLarge'>Kontrol Sonucu</Text>
            <Text variant='bodyMedium'>{isValid(tckn) ? `${tckn} geçerlidir.` : `${tckn} geçersizdir.`}</Text>
            <Button mode="outlined" onPress={() => router.back()}>
                Geri Dön
            </Button>

        </View>
    )
}

export default Result;