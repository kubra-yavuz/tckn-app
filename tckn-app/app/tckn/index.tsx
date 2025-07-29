import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';


const TcknInput = () => {
    const [tckn, setTckn] = useState<string>('');
    const router = useRouter();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

            <Text variant='titleLarge' style={{ marginBottom: 8, }}>T.C. Kimlik Numarası Doğrulama</Text>
            <TextInput
                label="T.C. Kimlik Numarası"
                mode="outlined"
                keyboardType='numeric'
                value={tckn}
                onChangeText={setTckn}
                style={{ width: '80%', }}
            />
            <Button mode='contained' onPress={() => router.push({ pathname: '/tckn/result', params: { tckn } })} > Kontrol Et</Button>
        </View>


    )
}
export default TcknInput;