import React, {useState, Component} from 'react';
import {
  ImageBackground,
  Image,
  Text,
  View,
  TextInput,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class Login_Page extends Component{
  state = {
    email: '',
    password: '',
  }
  handleEmail = (text) => {
    this.setState({email: text})
  }
  handlePassword = (text) => {
    this.setState({password: text})
  }
  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass)
  }

  render(){
    return(
      <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <ImageBackground style={s.background}>
        <SafeAreaView style={s.safeArea}>
          <View style={s.wrapper}>
            <View style={s.header}>
              <View style={s.raw_button_header}>
                <TouchableOpacity>
                  <Image
                    style={s.button_prev}
                    source={require('../accsets/icon_image/arrow.png')}
                  />
                </TouchableOpacity>
              </View>
              <Image
                style={s.icon_header}
                source={require('../accsets/icon_image/location.png')}
              />

              <Text style={s.subTitle}>Log in</Text>
            </View>

            <View style={s.spacer}>
              <View style={s.inputView}>
                <TextInput
                  style={s.inputText}
                  placeholder="Email..."
                  keyboardType="email-address"
                  placeholderTextColor="#003f5c"
                  underlineColorAndroid="transparent"
                  autoCapitalize = "none"
                  onChangeText={this.handleEmail}
                />
              </View>
              <View style={s.inputView}>
                <TextInput
                  style={s.inputText}
                  placeholder="Password..."
                  keyboardType="visible-password"
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#003f5c"
                  autoCapitalize = "none"
                  onChangeText={this.handlePassword}
                />
              </View>
            </View>

            <View style={s.controls}>
              <TouchableOpacity 
                style={s.loginBtn}
                onPress = {
                  () => this.login(this.state.email, this.state.password)
                }>
                <Text style={s.loginText}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={s.signupBtn}>
                <Text style={s.signupText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
      </>
    )
  }

}

// const Login_Page = ({}) => {
  
//   // const [email_, setText1] = useState('');
//   // const [password_, setText] = useState('');
//   return (
//     <>
//       <StatusBar
//         barStyle="dark-content"
//         translucent={true}
//         backgroundColor="transparent"
//       />
//       <ImageBackground style={s.background}>
//         <SafeAreaView style={s.safeArea}>
//           <View style={s.wrapper}>
//             <View style={s.header}>
//               <View style={s.raw_button_header}>
//                 <TouchableOpacity>
//                   <Image
//                     style={s.button_prev}
//                     source={require('../accsets/icon_image/arrow.png')}
//                   />
//                 </TouchableOpacity>
//               </View>
//               <Image
//                 style={s.icon_header}
//                 source={require('../accsets/icon_image/location.png')}
//               />

//               <Text style={s.subTitle}>Log in</Text>
//             </View>

//             <View style={s.spacer}>
//               <View style={s.inputView}>
//                 <TextInput
//                   style={s.inputText}
//                   placeholder="Email..."
//                   keyboardType="email-address"
//                   placeholderTextColor="#003f5c"
//                   underlineColorAndroid="transparent"
//                   autoCapitalize = "none"
//                   onChangeText={this.handleEmail}
//                 />
//               </View>
//               <View style={s.inputView}>
//                 <TextInput
//                   style={s.inputText}
//                   placeholder="Password..."
//                   keyboardType="visible-password"
//                   underlineColorAndroid="transparent"
//                   placeholderTextColor="#003f5c"
//                   autoCapitalize = "none"
//                   onChangeText={this.handlePassword}
//                 />
//               </View>
//             </View>

//             <View style={s.controls}>
//               <TouchableOpacity 
//                 style={s.loginBtn}
//                 onPress = {
//                   () => this.login(this.state.email, this.state.password)
//                 }>
//                 <Text style={s.loginText}>LOGIN</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={s.signupBtn}>
//                 <Text style={s.signupText}>Sign up</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </SafeAreaView>
//       </ImageBackground>
//     </>
//   );
// };

const s = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    padding: 25,
  },
  header: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon_header: {
    width: 54,
    height: 54,
  },
  title: {
    marginTop: 4,
    fontSize: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#F78172',
    fontFamily: 'BillionDreams',
  },
  subTitle: {
    marginTop: 42,
    fontSize: 32,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#F78172',
  },
  spacer: {
    flex: 1,
    justifyContent: 'center',
  },
  controls: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
  },
  button_prev: {
    width: 24,
    height: 24,
  },
  raw_button_header: {
    width: '100%',
    height: 'auto',
  },
  button_prev: {
    width: 22,
    height: 22,
    alignSelf: 'flex-start',
  },
  inputView: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#F78172',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
  },
  signupText: {
    color: '#000',
    fontSize: 16,
  },
});


export default Login_Page;
