/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
// import {FlatList} from 'react-native-gesture-handler';

import {images, icons, COLORS, FONTS, SIZES} from '../constants';

const ScrollableTab = ({tabList, selectedTab, onPress}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{marginHorizontal: SIZES.padding}}
      onPress={() => onPress(item)}>
      <Text style={{color: COLORS.secondary, ...FONTS.body2}}>{item.name}</Text>

      {selectedTab.id === item.id && (
        <View style={{alignItems: 'center', marginTop: SIZES.base}}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: COLORS.blue,
            }}
          />
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={{marginTop: SIZES.padding}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabList}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

const ScrollableCard = ({navigation, productList}) => {
  const renderCard = ({item}) => (
    <TouchableOpacity
      style={{marginLeft: SIZES.padding}}
      onPress={() => navigation.navigate('ItemDetails', {itemInfo: item})}>
      <View style={{width: SIZES.width / 2}}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: SIZES.radius * 2,
          }}
        />

        <View
          style={{position: 'absolute', top: 15, left: '10%', right: '10%'}}>
          {/* <Text style={{color: COLORS.lightGray2, ...FONTS.h3}}>Dress</Text> */}
          <Text
            style={{marginTop: SIZES.base, color: COLORS.white, ...FONTS.h2}}>
            {item.productName}
          </Text>
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 20,
            left: 30,
            borderRadius: 15,
            paddingVertical: 10,
            paddingHorizontal: 15,
            backgroundColor: COLORS.transparentLightGray,
          }}>
          <Text style={{...FONTS.h2}}>₹ {item.price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{marginTop: SIZES.padding}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={productList}
        renderItem={renderCard}
        keyExtractor={(item) => `${item.productId}`}
      />
    </View>
  );
};

const Home = ({navigation}) => {
  const [tabList, setTabList] = React.useState([
    {
      id: 0,
      name: 'Lehnga',
      title: 'lehnga',
      productList: [
        {
          productId: 1,
          productName: 'Afgani Lehnga',
          price: 300000,
          image: images.greenLehnga,
        },
        {
          productId: 2,
          productName: 'Sky Afgani Lehnga',
          price: 450000,
          image: images.blueLehnga,
        },
        {
          productId: 3,
          productName: 'Hyderabadi Lehnga',
          price: 1100000,
          image: images.weddingLehnga,
        },
      ],
    },
    {
      id: 1,
      name: 'Gaoon',
      title: 'gaoon',
      productList: [
        {
          productId: 1,
          productName: 'Weeding Gaoon',
          price: 250000,
          image: images.goldenGaoon,
        },
        {
          productId: 2,
          productName: 'Afgani Gaoon',
          price: 450000,
          image: images.blueGaoon,
        },
        {
          productId: 3,
          productName: 'Hyderabadi Gaoon',
          price: 1100000,
          image: images.redLehnga,
        },
      ],
    },
    {
      id: 2,
      name: 'Sherwani',
      title: 'sherwani',
      productList: [
        {
          productId: 1,
          productName: 'Wedding Sherwani',
          price: 1300000,
          image: images.pinkSherwani,
        },
      ],
    },
  ]);

  const [selectedTab, setSelectedTab] = React.useState({
    id: 0,
    name: 'Lehnga',
    title: 'lehnga',
    productList: [
      {
        productId: 1,
        productName: 'Afgani Lehnga',
        price: 300000,
        image: images.greenLehnga,
      },
      {
        productId: 2,
        productName: 'Sky Afgani Lehnga',
        price: 450000,
        image: images.blueLehnga,
      },
      {
        productId: 3,
        productName: 'Hyderabadi Lehnga',
        price: 1100000,
        image: images.weddingLehnga,
      },
    ],
  });

  // RenderHeader
  function renderHeader() {
    return (
      <View style={{paddingHorizontal: SIZES.padding}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('Menu was tryed to reach')}>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{
                height: 25,
                width: 25,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{flex: 1, alignItems: 'flex-end'}}
            onPress={() => console.log('No Items in the cart')}>
            <Image
              source={icons.cart}
              resizeMode="contain"
              style={{
                height: 25,
                width: 25,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  //   RenderTitle
  function renderTitle(titleString) {
    return (
      <View style={{marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
        <Text style={{color: COLORS.black, ...FONTS.largeTitle}}>
          From the exotic collections of
        </Text>
        <Text style={{color: COLORS.black, ...FONTS.largeTitle}}>
          {titleString}
        </Text>
      </View>
    );
  }

  function renderPromotionCard() {
    return (
      <View
        style={[
          Styles.shadow,
          {
            flexDirection: 'row',
            marginHorizontal: SIZES.padding,
            padding: SIZES.radius,
            height: 110,
            borderRadius: 20,
            backgroundColor: COLORS.white,
          },
        ]}>
        <View
          style={{
            width: 70,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.lightGray2,
            borderRadius: 20,
          }}>
          <Image
            source={images.goldenGaoon}
            resizeMode="contain"
            style={{
              width: '75%',
              height: '75%',
              borderRadius: 15,
            }}
          />
        </View>

        <View
          style={{flex: 1, marginLeft: SIZES.radius, justifyContent: 'center'}}>
          <Text style={{...FONTS.h2}}>Special Offer !!!</Text>
          <Text style={{...FONTS.body3}}>Add to your Cart...</Text>
        </View>

        <View
          style={{
            marginRight: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              justifyContent: 'center',
              alignItems: 'center',
              height: '80%',
              width: 40,
              borderRadius: 10,
            }}
            onPress={() => console.log('Product added to Cart, Special Offer')}>
            <Image
              source={icons.chevron}
              resizeMode="contain"
              style={{
                height: '60%',
                width: '60%',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={Styles.container}>
      {renderHeader()}
      {renderTitle('Devesh!!!')}
      <ScrollableTab
        tabList={tabList}
        selectedTab={selectedTab}
        onPress={(item) => setSelectedTab(item)}
      />

      <View style={{flex: 1}}>
        <ScrollableCard
          navigation={navigation}
          productList={selectedTab.productList}
        />
      </View>

      {/* Footer Promotion Card */}
      <View style={{height: '19%', justifyContent: 'flex-end'}}>
        {renderPromotionCard()}
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

export default Home;
