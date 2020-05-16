import React from 'react'
import { StyleSheet, Text, View, Button, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import logo from '../assets/logo.png';
import { FontAwesome, Entypo } from '@expo/vector-icons';


const { width: WIDTH } = Dimensions.get('window');


const Login = (props) => {
    const [press, setPress] = React.useState(false);
    const [showPass, setShowPass] = React.useState(true);

    const togglePass = () => {
        if (press == false) {
            setPress(true);
            setShowPass(false);
            console.log(press);

        }
        else {
            setPress(false);
            setShowPass(true);
        }
    }
    const login = ()=>{
        props.navigation.push('home');
    }

    return (
        <View style={styles.backgroundContainer} >
            <View style={styles.logoContainer}>
                <Image source={logo} style={{ width: 120, height: 120 }} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Entypo name='email' size={28} color='#003e42' style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder={'E-mail'}
                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                    underlineColorAndroid='transparent'
                />
            </View>

            <View style={{ marginTop: 10 }}>
                <FontAwesome name={'lock'} size={28} color="#003e42" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder={'Mot de passe'}
                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                    secureTextEntry={showPass}
                    underlineColorAndroid='transparent'
                />
                <TouchableOpacity style={styles.btnEye}
                    onPress={togglePass}
                >
                    <FontAwesome name={press == false ? 'eye' : 'eye-slash'} color='#000' size={28} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity 
            style={styles.btnLogin}
            onPress={login}
            >
            <Text style={styles.text}>Se connecter</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                
            </TouchableOpacity>

        </View>
    )
}


export default Login

const styles = StyleSheet.create({

    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        borderWidth: 2,
        fontSize: 16,
        paddingLeft: 45,
        color: '#000',
        marginHorizontal: 25
    },
    backgroundContainer: {
        marginTop:-150,
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 37
    },
    btnEye: {
        position: 'absolute',
        top: 8,
        right: 37
    },
    btnLogin: {
        width: WIDTH - 200,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#28696d',
        justifyContent: 'center',
        marginTop: 20,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
})
