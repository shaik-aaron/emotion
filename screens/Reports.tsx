import dayjs from 'dayjs';
import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Reports: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.weeklyReports}>your weekly reports</Text>
      <Text style={styles.hereYouCanView}>
        here you can view all your logged in emotions filtered weekly
      </Text>
    </View>
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
  },
});
