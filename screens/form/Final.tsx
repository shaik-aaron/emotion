import {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Final: FC = ({navigation}: any) => {
  const emotion = useSelector((state: any) => state.emotion.emotion);
  console.log(emotion);

  return (
    <View style={styles.container}>
      <View style={styles.backButtonsContainer}>
        <Pressable>
          <Image source={require('../../assets/close.png')} />
        </Pressable>
      </View>
      <Text style={styles.done}>done!</Text>
      <View style={{marginBottom: 64}}>
        <Text style={styles.added}>you have added your emotion</Text>
        <Text style={styles.added}>check-in!</Text>
      </View>
      <View style={styles.yourEmotionsContainer}>
        <View style={styles.divider} />
        <Text style={styles.yourEmotions}>your summary</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.mainEmotionContainer}>
        <Text style={styles.yourefeeling}>you're feeling</Text>
        <Text style={styles[`${emotion.feeling}` as keyof typeof styles]}>
          {emotion.describing.map((item: string, index: number) => {
            if (emotion.describing.length === 1) {
              return item;
            } else if (emotion.describing.length === 2) {
              if (index === 0) {
                return item + ' and ';
              } else {
                return item;
              }
            } else if (emotion.describing.length > 2) {
              if (index === emotion.describing.length - 2) {
                return item + ' and ';
              } else if (index === emotion.describing.length - 1) {
                return item;
              } else {
                return item + ', ';
              }
            }
          })}
        </Text>
        <Text style={styles.reasonText}>{emotion.reason}</Text>
      </View>
    </View>
  );
};

export default Final;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
  },
  backButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 64,
    marginBottom: 50,
  },
  done: {
    fontFamily: 'Mulish-ExtraBold',
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    marginTop: 56,
    marginBottom: 20,
  },
  added: {
    fontFamily: 'Mulish-Regular',
    textAlign: 'center',
    color: '#585858',
    fontSize: 16,
  },
  yourEmotionsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 40,
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
  mainEmotionContainer: {
    paddingHorizontal: 70,
  },
  yourefeeling: {
    fontFamily: 'Mulish-ExtraBold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  down: {
    color: '#DF4545',
    fontFamily: 'Mulish-ExtraBold',
    fontSize: 24,
    marginTop: 4,
    textAlign: 'center',
    marginBottom: 24,
  },
  low: {
    fontFamily: 'Mulish-ExtraBold',
    fontSize: 24,
    color: '#6E8BD7',
    marginTop: 4,
    textAlign: 'center',
    marginBottom: 24,
  },
  neutral: {
    fontFamily: 'Mulish-ExtraBold',
    fontSize: 24,
    color: 'white',
    marginTop: 4,
    textAlign: 'center',
    marginBottom: 24,
  },
  fine: {
    color: '#8EF09E',
    fontFamily: 'Mulish-ExtraBold',
    fontSize: 24,
    marginTop: 4,
    textAlign: 'center',
    marginBottom: 24,
  },
  good: {
    fontFamily: 'Mulish-ExtraBold',
    fontSize: 24,
    color: '#4BE95A',
    marginTop: 4,
    textAlign: 'center',
    marginBottom: 24,
  },
  reasonText: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 16,
  },
});
