import {FC, useEffect, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Modal,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {activities} from '../../constants/activities';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ActivitySelector: FC = ({navigation}: any) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newActivtiy, setNewActivity] = useState<string>('');
  const [allActivities, setAllActivities] = useState<string[]>(activities);

  const saveActivity = async () => {
    try {
      const user_set_activities = await AsyncStorage.getItem(
        'user-set-activities',
      );
      if (user_set_activities === null) {
        let temp = [newActivtiy];
        let temp_data = JSON.stringify(temp);
        await AsyncStorage.setItem('user-set-activities', temp_data);
        setAllActivities(prev => [...prev, newActivtiy]);
        setModalOpen(prev => !prev);
        ToastAndroid.show('Activity Saved', ToastAndroid.SHORT);
      } else {
        let temp = JSON.parse(user_set_activities); // Parse as array
        temp.push(newActivtiy); // Add new activity to the array
        let temp_data = JSON.stringify(temp);
        await AsyncStorage.setItem('user-set-activities', temp_data);
        setAllActivities(prev => [...prev, newActivtiy]);
        ToastAndroid.show('Activity Saved', ToastAndroid.SHORT);
        setModalOpen(prev => !prev);
      }
    } catch {
      console.log('An error occured');
    }
  };

  useEffect(() => {
    async function fetchData() {
      const data: any = await AsyncStorage.getItem('user-set-activities');
      if (data) {
        let temp = JSON.parse(data);
        setAllActivities(prev => [...prev, ...temp]);
      }
    }
    fetchData();
  }, []);

  return (
    <ScrollView>
      <Modal visible={modalOpen} animationType={'slide'}>
        <View style={styles.container}>
          <View style={styles.backButtonsContainer}>
            <Text style={styles.howDoYouFeel}>Add an Activity:</Text>
            <Pressable onPress={() => setModalOpen(prev => !prev)}>
              <Image source={require('../../assets/close.png')} />
            </Pressable>
          </View>
          <TextInput
            onChangeText={text => setNewActivity(text)}
            placeholder="it will be saved next time"
            placeholderTextColor={'#585858'}
            style={styles.textInput}
            cursorColor={'white'}
          />
          {newActivtiy.length > 0 && (
            <Pressable onPress={saveActivity} style={styles.save}>
              <Text style={styles.nextText}>Save</Text>
            </Pressable>
          )}
        </View>
      </Modal>
      <View style={styles.container}>
        <View style={styles.backButtonsContainer}>
          <Pressable>
            <Image source={require('../../assets/back.png')} />
          </Pressable>
          <Pressable>
            <Image source={require('../../assets/close.png')} />
          </Pressable>
        </View>
        <Text style={styles.step}>4/4</Text>
        <Text style={styles.howDoYouFeel}>
          what were you doing when you felt these emotions?
        </Text>
        <View style={styles.activitiesContainer}>
          {allActivities.map((activity, index) => {
            return (
              <Pressable key={index} style={styles.activity}>
                <Text style={styles.activityText}>{activity}</Text>
              </Pressable>
            );
          })}
          <Pressable
            onPress={() => setModalOpen(prev => !prev)}
            style={styles.activity}>
            <Text style={styles.activityText}>+</Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() => navigation.navigate('ActivitySelector')}
          style={styles.next}>
          <Text style={styles.nextText}>next</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
  },
  backButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 64,
    marginBottom: 50,
  },
  textInput: {
    padding: 0,
    fontFamily: 'Mulish-Regular',
    color: 'white',
  },
  step: {
    fontFamily: 'Mulish-Medium',
    color: '#585858',
    fontSize: 14,
    marginBottom: 4,
  },
  howDoYouFeel: {
    fontFamily: 'Mulish-ExtraBold',
    fontSize: 20,
    color: 'white',
  },
  activitiesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 18,
    paddingHorizontal: 18,
    marginTop: 54,
  },
  activity: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 1000,
    width: 140,
    paddingVertical: 14,
  },
  activityText: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: 'white',
  },
  next: {
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    borderRadius: 10,
    marginTop: 66,
    marginBottom: 48,
  },
  save: {
    position: 'absolute',
    bottom: 48,
    left: 20,
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    borderRadius: 10,
    marginTop: 66,
    marginBottom: 48,
  },
  nextText: {
    fontFamily: 'Mulish-Bold',
    color: '#000C18',
    fontSize: 16,
  },
});

export default ActivitySelector;
