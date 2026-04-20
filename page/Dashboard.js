import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Dashboard({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hola</Text>
            <Text style={styles.subtitle}>Tu meta actual: Ninguna</Text>

            <TouchableOpacity 
                style={styles.buttonNuevaSimulacion} 
                onPress={() => Alert.alert('Aviso', 'Ir a la pantalla 5 (Tarea de Persona B)')}
            >
                <Text style={styles.buttonText}> Nueva Simulación</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 5 },
    subtitle: { fontSize: 16, color: '#666', marginBottom: 30 },
    buttonNuevaSimulacion: { backgroundColor: '#f03fa0', padding: 15, borderRadius: 5 },
    buttonText: { color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }
});