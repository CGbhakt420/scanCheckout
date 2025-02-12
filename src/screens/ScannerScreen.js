import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const ScannerScreen = () => {
    const [hasPermission, setHasPermission] = useState(false);
    const devices = useCameraDevices();
    const device = devices.back;
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const status = await Camera.requestCameraPermission();
            setHasPermission(status === 'authorized');
        })();
    }, []);

    if (!device) return <Text>Loading Camera...</Text>;
    if (!hasPermission) return <Text>No Camera Permission</Text>;

    return (
        <View style={styles.container}>
            <Camera
                ref={cameraRef}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                onError={(error) => Alert.alert('Camera Error', error.message)}
            />
            <Text style={styles.text}>Point the camera at a barcode</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    text: {
        position: 'absolute',
        bottom: 20,
        color: 'white',
        fontSize: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 5,
    },
});

export default ScannerScreen;
