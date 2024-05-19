import {useRoute} from '@react-navigation/native';
import {FC} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Emotion from '../components/Emotion';

const WeeklyReport: FC = ({navigation}: any) => {
  const route = useRoute();
  const {data}: any = route.params;
  console.log(data);
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#121212'}}>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.goBack()} style={styles.back}>
          <Image source={require('../assets/back.png')} />
        </Pressable>
        <Text style={styles.weeklyReports}>your weekly reports</Text>
        <Text style={styles.hereYouCanView}>
          here you can view all your logged in emotions filtered weekly
        </Text>
        {data.map((emotion: any, index: number) => {
          return (
            <Pressable
              key={index}
              onPress={() => navigation.navigate('Summary', {data: emotion})}>
              <Emotion emotion={emotion} />
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default WeeklyReport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    position: 'relative',
  },
  back: {
    position: 'absolute',
    top: 64,
    left: 20,
  },
  weeklyReports: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Mulish-ExtraBold',
    marginTop: 124,
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  hereYouCanView: {
    fontFamily: 'Mulish-Regular',
    color: '#585858',
    fontSize: 14,
    marginBottom: 64,
    paddingHorizontal: 20,
  },
});
