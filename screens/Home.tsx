import React, {FC, useEffect, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import Emotion from '../components/Emotion';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

const Home: FC = ({navigation}: any) => {
  const [time, setTime] = useState<Date>(new Date());
  const [emotions, setEmotions] = useState([]);

  async function fetchEmotions() {
    let emotions: any = await AsyncStorage.getItem('user_emotion_summaries');
    setEmotions(JSON.parse(emotions));
  }

  useFocusEffect(
    React.useCallback(() => {
      const timer: NodeJS.Timeout = setInterval(() => {
        setTime(new Date());
      }, 1000 * 60 * 60);

      fetchEmotions();

      return () => {
        clearInterval(timer);
      };
    }, []),
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.greeting}>
          good
          {time.getHours() < 12
            ? ' morning'
            : time.getHours() < 16
            ? ' afternoon'
            : ' evening'}
        </Text>
        <Text style={styles.subHeading}>stay on top of your emotions and</Text>
        <Text style={styles.subHeading}>log them through your day</Text>
        <View style={styles.checkInContainer}>
          <View style={styles.checkInBox}>
            <Text style={styles.checkInText}>let's start by checking in</Text>
            <Pressable
              onPress={() => navigation.navigate('EmotionSelector')}
              style={styles.checkInButton}>
              <Text style={styles.howDoYouFeel}>how do you feel?</Text>
            </Pressable>
            <Text style={styles.checkedInAmount}>checked in 3 times today</Text>
          </View>
        </View>
        <View style={styles.yourEmotionsContainer}>
          <View style={styles.divider} />
          <Text style={styles.yourEmotions}>your emotions</Text>
          <View style={styles.divider} />
        </View>
        {emotions ? (
          emotions.map((emotion: any, index: number) => {
            return (
              <Pressable
                onPress={() => navigation.navigate('Summary', {data: emotion})}
                key={index}>
                <Emotion emotion={emotion} />
              </Pressable>
            );
          })
        ) : (
          <Text style={styles.emotion}>add an emotion to see it here!</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  greeting: {
    fontFamily: 'Mulish-ExtraBold',
    color: 'white',
    fontSize: 32,
    marginTop: 124,
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeading: {
    textAlign: 'center',
    fontFamily: 'Mulish-Regular',
    fontSize: 16,
    color: '#585858',
    lineHeight: 24,
  },
  checkInContainer: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 64,
    marginBottom: 80,
  },
  checkInBox: {
    borderRadius: 20,
    backgroundColor: '#1f1f1f',
    paddingTop: 80,
    paddingBottom: 48,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  checkInText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Mulish-Bold',
    marginBottom: 80,
  },
  checkInButton: {
    borderRadius: 12,
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 18,
    width: 'auto',
  },
  howDoYouFeel: {
    fontFamily: 'Mulish-Bold',
    color: '#000C18',
  },
  checkedInAmount: {
    textAlign: 'center',
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: '#888888',
  },
  yourEmotionsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  divider: {
    width: 60,
    height: 1,
    backgroundColor: '#585858',
  },
  yourEmotions: {
    fontFamily: 'Mulish-SemiBold',
    color: '#585858',
    fontSize: 16,
  },
  emotion: {
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 24,
  },
});

export default Home;
