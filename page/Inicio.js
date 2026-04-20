import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Inicio({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Simulador de Procrastinación</Text>
            <Text style={styles.subtitle}>Descubre las consecuencias de procrastinar</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.button, styles.buttonOutline]} 
                onPress={() => navigation.navigate('Registro')}
            >
                <Text style={[styles.buttonText, styles.textOutline]}>
                    Crear Cuenta
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, textAlign: 'center', marginBottom: 10, fontWeight: 'bold' },
    subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 30, color: '#666' },
    button: { backgroundColor: '#4A90E2', padding: 15, borderRadius: 5, marginBottom: 15 },
    buttonOutline: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#4A90E2' },
    buttonText: { color: '#fff', textAlign: 'center', fontSize: 16 },
    textOutline: { color: '#4A90E2' }
});