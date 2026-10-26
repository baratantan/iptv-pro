
import React from 'react';
import { registerRootComponent } from 'expo';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.logo}>IPTV PRO</Text>
        <Text style={styles.subtitle}>
          عالم الترفيه بين يديك
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>مرحبًا بك</Text>
        <Text style={styles.description}>
          تطبيق IPTV Pro قيد التطوير
        </Text>
        <Text style={styles.status}>
          الواجهة الأولية جاهزة
        </Text>
      </View>

      <Text style={styles.footer}>
        IPTV Pro • الإصدار 1.0.0
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090D14',
    padding: 20,
    justifyContent: 'center'
  },
  header: {
    alignItems: 'center',
    marginBottom: 35
  },
  logo: {
    color: '#E50914',
    fontSize: 34,
    fontWeight: 'bold',
    letterSpacing: 2
  },
  subtitle: {
    color: '#B8C0CC',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#151C28',
    borderRadius: 18,
    padding: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#293448'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 12
  },
  description: {
    color: '#D1D5DB',
    fontSize: 16,
    textAlign: 'center'
  },
  status: {
    color: '#4ADE80',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center'
  },
  footer: {
    color: '#7C8798',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 35
  }
});

registerRootComponent(App);
