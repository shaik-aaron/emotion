import dayjs from 'dayjs';
import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Emotion: FC<any> = ({emotion}) => {
  return (
    <View style={styles.emotionsContainer}>
      <View style={styles.emotionContainer}>
        <View style={styles.inlineEmotion}>
          <Text style={styles.emotion}>I'm feeling</Text>
          <Text style={styles.emotionItalic}>
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
        </View>
        <View style={styles.tagsContainer}>
          {emotion.activities.map((activity: string, index: number) => {
            return (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagEmotion}>{activity}</Text>
              </View>
            );
          })}
        </View>
        <Text style={styles.dateStamp}>
          {dayjs(emotion.date).format('ddd DD MMM, h:mm A').toLowerCase()}
        </Text>
        <View style={styles.borderBottom} />
      </View>
    </View>
  );
};

export default Emotion;

const styles = StyleSheet.create({
  emotionsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  emotionContainer: {
    paddingTop: 24,
  },
  inlineEmotion: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  emotion: {
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    color: 'white',
  },
  emotionItalic: {
    fontFamily: 'Mulish-BoldItalic',
    fontSize: 18,
    color: 'white',
  },
  tagsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  tag: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 68,
    borderColor: 'white',
    borderWidth: 1,
  },
  tagEmotion: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: 'white',
  },
  dateStamp: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: 'white',
    lineHeight: 21,
    marginBottom: 20,
  },
  borderBottom: {
    width: '100%',
    height: 1,
    backgroundColor: '#393939',
  },
});
