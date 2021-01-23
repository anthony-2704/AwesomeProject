import React from 'react';
import {
  ImageBackground,
  Image,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen_Page = ({}) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <View style={s.wrapper}>
        <View style={s.header}>
          <Image
            style={s.logo}
            source={require('../accsets/icon_image/location.png')}
          />
          <Text style={s.title}>Roomy</Text>
        </View>

        <View style={s.controls}>
          <View style={s.viewButton}>
            <LinearGradient
              colors={['#F67C70', '#F65175']}
              style={s.linearGradient}>
              <TouchableOpacity>
                <Text style={s.start}>Let's get started</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </>
  );
};

const s = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F8F8F9',
  },
  wrapper: {
    flex: 1,
    padding: 25,
  },
  header: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#F78172',
  },
  controls: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  viewButton: {
    flex: 1,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  start: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  start: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default SplashScreen_Page;
