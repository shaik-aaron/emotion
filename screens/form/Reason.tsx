import {FC, useEffect} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {reason} from '../../store/emotionSlice';

const Reason: FC = ({navigation}: any) => {
  const emotion = useSelector((state: any) => state.emotion.emotion);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(reason('') as any);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.backButtonsContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/back.png')} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/close.png')} />
        </Pressable>
      </View>
      <Text style={styles.step}>3/4</Text>
      <Text style={styles.howDoYouFeel}>what's the reason</Text>
      <Text style={styles.howDoYouFeel}>behind these emotions?</Text>
      <TextInput
        onChangeText={text => dispatch(reason(text.toLowerCase()) as any)}
        placeholder="write your thoughts here"
        placeholderTextColor={'#585858'}
        style={styles.textInput}
        cursorColor={'white'}
      />
      {emotion.reason.length > 0 && (
        <Pressable
          onPress={() => navigation.navigate('ActivitySelector')}
          style={styles.next}>
          <Text style={styles.nextText}>next</Text>
        </Pressable>
      )}
    </View>
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
  textInput: {
    padding: 0,
    fontFamily: 'Mulish-Regular',
    color: 'white',
    marginTop: 24,
  },
  next: {
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
  },
  nextText: {
    fontFamily: 'Mulish-Bold',
    color: '#000C18',
    fontSize: 16,
  },
});

export default Reason;
