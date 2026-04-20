import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Registro({ navigation }) {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistro = () => {
        if (!nombre || !correo || !password) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }
        navigation.navigate('Dashboard');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crea tu Cuenta</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Nombre completo"
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={correo}
                onChangeText={setCorreo}
                autoCapitalize="none"
            />
            
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegistro}>
                <Text style={styles.buttonText}>Registrarme</Text>
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