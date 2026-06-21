import React from 'react';
import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppExit from 'react-native-app-exit';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.card}>
        <Text style={styles.title}>react-native-app-exit</Text>
        <Text style={styles.subtitle}>Test Playground</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            Background supported:{' '}
            <Text style={styles.badgeValue}>
              {AppExit.isBackgroundSupported ? '✅ Yes' : '⚠️ No (iOS)'}
            </Text>
          </Text>
          <Text style={styles.badgeText}>
            Platform: <Text style={styles.badgeValue}>{Platform.OS}</Text>
          </Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <Btn
          label="exitApp()"
          description="Kills the process"
          color="#E53935"
          onPress={() => AppExit.exitApp()}
        />

        <Btn
          label="sendToBackground()"
          description={
            Platform.OS === 'android'
              ? 'Moves to background — process lives'
              : 'Suspends app (iOS best-effort)'
          }
          color="#1E88E5"
          onPress={() => AppExit.sendToBackground()}
        />

        <Btn
          label="exit({ background: true })"
          description="Unified API — background mode"
          color="#43A047"
          onPress={() => AppExit.exit({ background: true })}
        />

        <Btn
          label="exit()"
          description="Unified API — hard exit"
          color="#6D4C41"
          onPress={() => AppExit.exit()}
        />
      </View>
    </SafeAreaView>
  );
}

function Btn({
  label,
  description,
  color,
  onPress,
}: {
  label: string;
  description: string;
  color: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.btn,
        {backgroundColor: color, opacity: pressed ? 0.8 : 1},
      ]}
      onPress={onPress}>
      <Text style={styles.btnLabel}>{label}</Text>
      <Text style={styles.btnDesc}>{description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 4},
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#212121',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#9E9E9E',
    marginBottom: 16,
  },
  badge: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 12,
    gap: 6,
  },
  badgeText: {
    fontSize: 13,
    color: '#616161',
  },
  badgeValue: {
    fontWeight: '600',
    color: '#212121',
  },
  buttons: {
    gap: 12,
  },
  btn: {
    borderRadius: 14,
    padding: 18,
  },
  btnLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    marginBottom: 4,
  },
  btnDesc: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
  },
});
