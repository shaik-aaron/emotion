import LottieView from 'lottie-react-native';
import {FC, useEffect} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {SharedTransition, withSpring} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import Descriptions from '../../components/Descriptions';
import {feelingEmotions} from '../../constants/feelingEmotions';
import {descriptors} from '../../store/emotionSlice';
import {Dispatch} from '@reduxjs/toolkit';

const DescribeSelector: FC = () => {
  const customTransition: SharedTransition = SharedTransition.custom(values => {
    'worklet';
    return {
      originX: withSpring(values.targetOriginX),
      originY: withSpring(values.targetOriginY),
    };
  });

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(descriptors([]));
    };
  }, []);

  const emotions: any = {
    down: require('../../assets/lotties/down-selected-new.json'),
    low: require('../../assets/lotties/low-selected-new.json'),
    neutral: require('../../assets/lotties/neutral-selected-new.json'),
    fine: require('../../assets/lotties/fine-selected-new.json'),
    good: require('../../assets/lotties/good-selected-new.json'),
  };

  const emotion: any = useSelector((state: any) => state.emotion.emotion);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.backButtonsContainer}>
        <Pressable>
          <Image source={require('../../assets/back.png')} />
        </Pressable>
        <Pressable>
          <Image source={require('../../assets/close.png')} />
        </Pressable>
      </View>
      <Text style={styles.step}>2/4</Text>
      <Text style={styles.howDoYouFeel}>
        how would you describe this feeling?
      </Text>
      <Animated.View
        sharedTransitionStyle={customTransition}
        style={styles.lottieBox}
        sharedTransitionTag="hi">
        <LottieView
          source={emotions[emotion.feeling]}
          autoPlay
          loop
          style={{width: 48, height: 48}}
        />
        <Text style={styles[emotion.feeling]}>{emotion.feeling}</Text>
      </Animated.View>
      <View style={styles.containerDescriptions}>
        {feelingEmotions[emotion.feeling].map((feeling: string, i: number) => {
          return <Descriptions key={i} feeling={feeling} />;
        })}
      </View>
    </ScrollView>
  );
};

const styles: any = StyleSheet.create({
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
    marginBottom: 18,
  },
  lottieBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 48,
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
  neutral: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: 'white',
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
  containerDescriptions: {
    marginTop: 50,
    marginBottom: 56,
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 18,
  },
  downContainer: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    borderColor: '#DF4545',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DescribeSelector;
