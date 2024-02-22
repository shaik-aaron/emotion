import LottieView from 'lottie-react-native';
import {FC, useEffect} from 'react';
import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {feelingType} from '../../store/emotionSlice';

export const EmotionSelector: FC = () => {
  const emotion = useSelector((state: any) => state.emotion.emotion);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(feelingType('') as any);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.backButtonsContainer}>
        <Pressable>
          <Image source={require('../../assets/back.png')} />
        </Pressable>
        <Pressable>
          <Image source={require('../../assets/close.png')} />
        </Pressable>
      </View>
      <Text style={styles.step}>1/4</Text>
      <Text style={styles.howDoYouFeel}>how do you feel?</Text>
      <View style={styles.lottieContainer}>
        {emotion.feeling === 'down' ? (
          <View style={styles.lottieBox}>
            <LottieView
              source={require('../../assets/lotties/down-selected-new.json')}
              autoPlay
              loop
              style={{width: 48, height: 48}}
            />
            <Text style={styles.down}>down</Text>
          </View>
        ) : (
          <Pressable
            onPress={() => dispatch(feelingType('down') as any)}
            style={styles.lottieBox}>
            <LottieView
              source={require('../../assets/lotties/down.json')}
              autoPlay
              loop
              style={{width: 48, height: 48}}
            />
            <Text style={styles.feeling}>down</Text>
          </Pressable>
        )}
        {emotion.feeling === 'low' ? (
          <View style={styles.lottieBox}>
            <LottieView
              source={require('../../assets/lotties/low-selected-new.json')}
              autoPlay
              loop
              style={{width: 48, height: 48}}
            />
            <Text style={styles.low}>low</Text>
          </View>
        ) : (
          <Pressable
            onPress={() => dispatch(feelingType('low') as any)}
            style={styles.lottieBox}>
            <LottieView
              source={require('../../assets/lotties/low.json')}
              autoPlay
              loop
              style={{width: 48, height: 48}}
            />
            <Text style={styles.feeling}>low</Text>
          </Pressable>
        )}
        {emotion.feeling === 'neutral' ? (
          <View style={styles.lottieBox}>
            <LottieView
              source={require('../../assets/lotties/neutral-selected-new.json')}
              autoPlay
              loop
              style={{width: 48, height: 48}}
            />
            <Text style={styles.fine}>neutral</Text>
          </View>
        ) : (
          <Pressable
            onPress={() => dispatch(feelingType('neutral') as any)}
            style={styles.lottieBox}>
            <LottieView
              source={require('../../assets/lotties/neutral.json')}
              autoPlay
              loop
              style={{width: 48, height: 48}}
            />
            <Text style={styles.feeling}>neutral</Text>
          </Pressable>
        )}
        {emotion.feeling === 'fine' ? (
          <View style={styles.lottieBox}>
            <LottieView
              source={require('../../assets/lotties/fine-selected-new.json')}
              autoPlay
              loop
              style={{width: 48, height: 48}}
            />
            <Text style={styles.fine}>fine</Text>
          </View>
        ) : (
          <Pressable
            onPress={() => dispatch(feelingType('fine') as any)}
            style={styles.lottieBox}>
            <LottieView
              source={require('../../assets/lotties/fine.json')}
              autoPlay
              loop
              style={{width: 48, height: 48}}
            />
            <Text style={styles.feeling}>fine</Text>
          </Pressable>
        )}
        {emotion.feeling === 'good' ? (
          <View style={styles.lottieBox}>
            <LottieView
              source={require('../../assets/lotties/good-selected-new.json')}
              autoPlay
              loop
              style={{width: 48, height: 48}}
            />
            <Text style={styles.good}>good</Text>
          </View>
        ) : (
          <Pressable
            onPress={() => dispatch(feelingType('good') as any)}
            style={styles.lottieBox}>
            <LottieView
              source={require('../../assets/lotties/good.json')}
              autoPlay
              loop
              style={{width: 48, height: 48}}
            />
            <Text style={styles.feeling}>good</Text>
          </Pressable>
        )}
      </View>
      {emotion.feeling !== '' && (
        <Pressable style={styles.next}>
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
    marginBottom: 152,
  },
  lottieContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lottieBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  feeling: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: 'white',
    marginTop: 8,
  },
  down: {
    color: '#DF4545',
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    marginTop: 8,
  },
  low: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: '#6E8BD7',
    marginTop: 8,
  },
  fine: {
    color: '#8EF09E',
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    marginTop: 8,
  },
  good: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: '#4BE95A',
    marginTop: 8,
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
