import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import dayjs from 'dayjs';
import {FC, useCallback, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import groupByMonth from '../functions/groupByMonth';

const Reports: FC = ({navigation}: any) => {
  const [emotions, setEmotions] = useState(new Map());
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchEmotions() {
    const unparsedEmotions: any = await AsyncStorage.getItem(
      'user_emotion_summaries',
    );
    const sortedEmotions = groupByMonth(JSON.parse(unparsedEmotions));
    setEmotions(sortedEmotions);
  }

  useFocusEffect(
    useCallback(() => {
      fetchEmotions();
      setIsLoading(false);
    }, []),
  );

  console.log(Array.from(emotions.entries()));

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#121212'}}>
      <View style={styles.container}>
        <Text style={styles.weeklyReports}>your weekly reports</Text>
        <Text style={styles.hereYouCanView}>
          here you can view all your logged in emotions filtered weekly
        </Text>
        {isLoading ? (
          <Text style={styles.weeklyReports}>Loading...</Text>
        ) : (
          Array.from(emotions.entries()).map(
            ([key, value]: any, index: number) => {
              const [month, year] = key.split(' ');
              return (
                <View key={index} style={{marginBottom: 48}}>
                  <Text style={styles.monthAndYear}>
                    {month.toLowerCase() + ' ' + year}
                  </Text>
                  {Array.from(value.entries()).map(
                    ([key, value]: any, index: number) => {
                      return (
                        <Pressable
                          key={index}
                          onPress={() =>
                            navigation.navigate('Weekly Reports', {data: value})
                          }
                          style={styles.weeklyContainer}>
                          <Text style={styles.weekText}>
                            {key + ' ' + month.toLowerCase()}
                          </Text>
                          <Image source={require('../assets/arrow-left.png')} />
                        </Pressable>
                      );
                    },
                  )}
                </View>
              );
            },
          )
        )}
      </View>
    </ScrollView>
  );
};

export default Reports;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
  },
  weeklyReports: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Mulish-ExtraBold',
    marginTop: 124,
    marginBottom: 8,
  },
  hereYouCanView: {
    fontFamily: 'Mulish-Regular',
    color: '#585858',
    fontSize: 14,
    marginBottom: 64,
  },
  monthAndYear: {
    fontFamily: 'Mulish-SemiBold',
    color: '#ADADAD',
    fontSize: 16,
    marginBottom: 14,
  },
  weeklyContainer: {
    backgroundColor: '#1F1F1F',
    borderRadius: 20,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    marginBottom: 12,
  },
  week: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  weekText: {
    color: 'white',
    fontFamily: 'Mulish-ExtraBold',
    fontSize: 18,
  },
});
