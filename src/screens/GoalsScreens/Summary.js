import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React from 'react';

import {Divider} from 'react-native-paper';

//Components
import TaskCard from '../../Components/LinearGradientCard';

//Dimensions
import {Height, Width} from '../../Constants/Dimensions';
//Colors
import Colors from '../../Constants/Colors';
//Data
import {TaskSummaryData} from '../../Constants/Data';

//Icons
import ArrowLeft from 'react-native-vector-icons/Feather';

const Summary = ({route, navigation}) => {
  const item = route.params;

  const navigateBack = () => {
    return navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.SECONDARY} barStyle={'default'} />

      <ImageBackground
        source={{
          uri: 'https://cdn.shopify.com/s/files/1/0428/1441/products/zzPurple_41023f1c-dbb2-4bbe-b818-263af4ee9885_720x.jpg?v=1616203876',
        }}
        imageStyle={{
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
        style={styles.image}>
        <View style={styles.contentView}>
          <View style={styles.headerView}>
            <ArrowLeft
              name="arrow-left"
              size={24}
              color={Colors.WHITE}
              onPress={navigateBack}
            />
            <Text style={styles.headerText}>{'Task Summary'}</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/**-------------task Card view--------------- */}
            <TaskCard item={item} />
            {/**-------------task Card view--------------- */}
            <Text style={styles.subHeaderText}>{'Recent Activity'}</Text>
            {/**-------------------transfers------------------- */}
            <View style={styles.activitiesView}>
              {TaskSummaryData.map((data, index) => {
                return (
                  <View key={String(index)}>
                    <View style={styles.row}>
                      <Text style={styles.activityText}>
                        {data.activityType}
                      </Text>
                      <Text
                        style={[
                          styles.amountText,
                          {
                            color:
                              data.transfer >= 2000 ? Colors.GREEN : Colors.RED,
                          },
                        ]}>
                        {data.transfer}
                        <Text style={styles.inrText}>{' INR'}</Text>
                      </Text>
                    </View>
                    <Text style={styles.dateText}>{data.date}</Text>
                    <Divider style={styles.divider} />
                  </View>
                );
              })}
            </View>
            {/**-------------------transfers------------------- */}
          </ScrollView>

          {/* </View> */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Summary;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  image: {
    height: Height / 5,
    width: Width,
    flex: 1,
  },
  contentView: {
    flex: 1,
    width: '100%',
    // padding: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  activitiesView: {
    padding: 16,
    backgroundColor: Colors.WHITE,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    color: Colors.WHITE,
    marginLeft: 8,
  },
  subHeaderText: {
    color: Colors.BLACK,
    fontWeight: '600',
    fontSize: 16,
    marginVertical: 16,
  },
  activityText: {
    color: Colors.BLACK,
    fontWeight: '600',
  },
  amountText: {
    fontSize: 16,
    fontWeight: '600',
  },
  inrText: {
    color: Colors.BLACK,
    fontWeight: '400',
    fontSize: 15,
  },
  dateText: {
    color: Colors.BLACK,
    opacity: 0.5,
    fontWeight: '400',
    marginVertical: 8,
  },
  divider: {
    marginBottom: 8,
  },
});
