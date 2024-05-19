import {useRoute} from '@react-navigation/native';
import dayjs from 'dayjs';
import {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Summary: FC = () => {
  const route = useRoute();
  const {data: emotion}: any = route.params;

  return (
    <View style={styles.container}>
      <Image source={require('../assets/back.png')} style={styles.back} />
      <View>
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
          <View style={styles.tagsContainer}>
            {emotion.activities.map((item: string, index: number) => {
              return (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{item}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <Text style={styles.time}>
          {dayjs(emotion.date).format('ddd DD MMM, h:mm A').toLowerCase()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    position: 'absolute',
    top: 64,
    left: 20,
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
    paddingHorizontal: 50,
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
  tagsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 24,
  },
  tag: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    borderRadius: 68,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 56,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  tagText: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: 'white',
  },
  time: {
    color: '#585858',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 86,
  },
});

export default Summary;
