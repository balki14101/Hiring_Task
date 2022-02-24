import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  StatusBar,
} from 'react-native';
import React from 'react';

import {SvgUri} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import ProgressBar from 'react-native-progress/Bar';

//Dimensions
import {Height, Width} from '../../Constants/Dimensions';
//Colors
import Colors from '../../Constants/Colors';
//Data
import {YourTaskData} from '../../Constants/Data';

//Icons
import SearchIcon from 'react-native-vector-icons/Feather';
import ArrowLeft from 'react-native-vector-icons/Feather';
import Plus from 'react-native-vector-icons/Feather';

const Summary = props => {
  console.log(props.route.params);
  const item = props.route.params;
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.SECONDARY} barStyle={'default'} />
      <View
        style={{
          backgroundColor: Colors.SECONDARY,
          flex: 0.3,
          borderBottomLeftRadius: 80,
          borderBottomRightRadius: 80,
        }}>
        <View
          style={{
            position: 'absolute',
            // backgroundColor: 'red',
            // flex: 1,
            width: '100%',
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 16,
            }}>
            <ArrowLeft name="arrow-left" size={24} color={Colors.WHITE} />
            <Text
              style={{
                color: Colors.WHITE,
                fontSize: 24,
                fontWeight: '700',
                marginLeft: 8,
              }}>
              {'Task Summary'}
            </Text>
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#77C2F1', '#FFB4ED']}
            style={styles.linearGradient}>
            {/**-------------cardTitleView--------------- */}

            <View style={styles.cardTitleView}>
              <View>
                <Text style={styles.cardTitleText}>{item.title}</Text>
                <View style={styles.row}>
                  <Text style={styles.cardDetailsText}>{'Monthly'}</Text>
                  <Text style={[styles.cardDetailsText, {marginHorizontal: 4}]}>
                    {item.current}
                  </Text>
                  <Text style={styles.cardDetailsText}>{'INR'}</Text>
                </View>
              </View>
              <View>
                <View style={styles.row}>
                  <Text style={styles.cardDetailsText}>{'Monthly'}</Text>
                  <Text style={[styles.cardTitleText, {marginHorizontal: 4}]}>
                    {item.target}
                  </Text>
                  <Text style={styles.cardDetailsText}>{'INR'}</Text>
                </View>
                <View style={[styles.row, {justifyContent: 'flex-end'}]}>
                  <Text style={styles.cardDetailsText}>{'Monthly'}</Text>
                  <Text style={[styles.cardDetailsText, {marginHorizontal: 4}]}>
                    {item.saved}
                  </Text>
                  <Text style={styles.cardDetailsText}>{'INR'}</Text>
                </View>
              </View>
            </View>
            {/**-------------cardTitleView--------------- */}

            {/**-------------progressAndDateView--------------- */}

            <View style={styles.progressAndDateView}>
              <View style={styles.barView}>
                <View
                  style={[
                    styles.progressStyle,
                    {
                      flex: item.progressPercentange / 100,
                    },
                  ]}>
                  <Text style={styles.barText}>
                    {item.progressPercentange}%
                  </Text>
                </View>

                {/* <ProgressBar
                    progress={0.3}
                    color={Colors.GREEN}
                    unfilledColor={Colors.WHITE}
                    width={Width / 1.22}
                    height={24}
                    borderWidth={0}>
                    <Text
                      style={{position: 'absolute', backgroundColor: 'red'}}>
                      {'sdkhbhfshdb'}
                    </Text>
                  </ProgressBar> */}
              </View>
              <View style={styles.dateView}>
                <View style={styles.row}>
                  <Text style={styles.cardDetailsText}>{'Start Date :'}</Text>
                  <Text
                    style={[
                      styles.cardDetailsText,
                      {marginLeft: 4, fontWeight: '500'},
                    ]}>
                    {item.startDate}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cardDetailsText}>{'End Date :'}</Text>
                  <Text
                    style={[
                      styles.cardDetailsText,
                      {marginLeft: 4, fontWeight: '500'},
                    ]}>
                    {item.endDate}
                  </Text>
                </View>
              </View>
            </View>
            {/**-------------progressAndDateView--------------- */}
            {/**-------------Bottom View--------------- */}
            <View style={styles.bottomView}>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.SECONDARY,
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRadius: 8,
                }}>
                <Plus name="plus" color={Colors.WHITE} size={16} />
                <Text
                  style={{
                    color: Colors.WHITE,
                    fontSize: 12,
                    marginLeft: 4,
                  }}>
                  {'FUND'}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: Colors.WHITE,
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Text style={{color: Colors.BLACK, fontSize: 10}}>
                  {item.bank}
                </Text>
                <Image
                  source={item.bankIcon}
                  style={{width: 24, height: 24, marginLeft: 8}}
                />
              </View>
            </View>
            {/**-------------Bottom View--------------- */}
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default Summary;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.SECONDARY,
  },
  iconView: {
    flexDirection: 'row',
  },

  linearGradient: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitleText: {
    color: Colors.BLACK,
    fontWeight: '600',
    fontSize: 14,
  },
  cardDetailsText: {
    color: Colors.BLACK,
    fontSize: 10,
    fontWeight: '500',
  },
  progressAndDateView: {
    marginVertical: 16,
  },
  barView: {
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    height: 24,
    borderRadius: 12,
  },
  progressStyle: {
    backgroundColor: Colors.GREEN,
    height: 24,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderRadius: 12,
  },
  barText: {
    color: Colors.BLACK,
    fontSize: 10,
    fontWeight: '500',
    marginRight: 8,
  },
  dateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
