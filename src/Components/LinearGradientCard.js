import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

//Package
import LinearGradient from 'react-native-linear-gradient';

//Colors
import Colors from '../Constants/Colors';

//Icons
import Plus from 'react-native-vector-icons/Feather';
import {Height, Width} from '../Constants/Dimensions';

const LinearGradientCard = props => {
  const {item} = props;
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[Colors.GRADIENT_FROM, Colors.GRADIENT_TO]}
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
            <Text style={styles.barText}>{item.progressPercentange}%</Text>
          </View>
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
        <TouchableOpacity style={styles.fundButton}>
          <Plus name="plus" color={Colors.WHITE} size={16} />
          <Text style={styles.fundText}>{'FUND'}</Text>
        </TouchableOpacity>
        <View style={styles.bankIconView}>
          <Text style={styles.bankIconText}>{item.bank}</Text>
          <Image source={item.bankIcon} style={styles.bankIconImage} />
        </View>
      </View>
      {/**-------------Bottom View--------------- */}
    </LinearGradient>
  );
};

export default LinearGradientCard;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
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
  fundButton: {
    backgroundColor: Colors.SECONDARY,
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  fundText: {
    color: Colors.WHITE,
    fontSize: 12,
    marginLeft: 4,
  },
  bankIconView: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 8,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  bankIconText: {
    color: Colors.BLACK,
    fontSize: 10,
  },
  bankIconImage: {
    width: Width / 15,
    height: Height / 34,
    marginLeft: 8,
  },
});
