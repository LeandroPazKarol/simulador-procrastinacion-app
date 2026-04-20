import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Login({ navigation }) {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!correo || !password) {
            Alert.alert('Error', 'Por favor, completa ambos campos');
            return;
        }
        navigation.navigate('Dashboard');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Ingresa tu correo"
                value={correo}
                onChangeText={setCorreo}
                autoCapitalize="none"
            />
            
            <TextInput
                style={styles.input}
                placeholder="Ingresa tu contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
    button: { backgroundColor: '#4A90E2', padding: 15, borderRadius: 5 },
    buttonText: { color: '#fff', textAlign: 'center', fontSize: 16 }
});