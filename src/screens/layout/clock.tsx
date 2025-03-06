import { memo, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UTCPlus7Clock = () => {
  const [time, setTime] = useState(() => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const utcPlus7 = new Date(utc + 7 * 60 * 60000);
    return {
      hours: utcPlus7.getHours(),
      minutes: utcPlus7.getMinutes(),
    };
  });

  const hoursRef = useRef<Text | null>(null);
  const minutesRef = useRef<Text | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const utcPlus7 = new Date(utc + 7 * 60 * 60000);
      const hours = utcPlus7.getHours();
      const minutes = utcPlus7.getMinutes();

      setTime({ hours, minutes });

      if (hoursRef.current) {
        hoursRef.current.setNativeProps({ text: formatTime(hours) });
      }
      if (minutesRef.current) {
        minutesRef.current.setNativeProps({ text: formatTime(minutes) });
      }
    };

    const scheduleNextUpdate = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const milliseconds = now.getMilliseconds();
      const delay = (60 - seconds) * 1000 - milliseconds;

      setTimeout(() => {
        updateTime();
        scheduleNextUpdate();
      }, delay);
    };

    updateTime();
    scheduleNextUpdate();

    return () => {
      // No cleanup needed because setTimeout is managed within scheduleNextUpdate.
    };
  }, []);

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText} ref={hoursRef}>
          {formatTime(time.hours)}
        </Text>
      </View>
      <Text style={styles.separator}>:</Text>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText} ref={minutesRef}>
          {formatTime(time.minutes)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 2,
  },
  timeText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#333',
    minWidth: 20,
    textAlign: 'center',
  },
  separator: {
    fontSize: 14,
    fontWeight: '800',
    color: 'white',
    marginHorizontal: 4,
  },
});

export default memo(UTCPlus7Clock);
