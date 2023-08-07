import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import * as Icon from 'react-native-feather';

const ShortVideoCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.iconContainer}>
        <Icon.MoreVertical stroke="white" strokeWidth={1.4} height={20} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>
          {item.title}
        </Text>
        <Text style={styles.viewCountText}>
          {item.viewCount} views
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 200,
    width: 130,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
    position: 'absolute',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 10,
    paddingRight: 5,
  },
  textContainer: {
    padding: 5,
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  viewCountText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default ShortVideoCard;
