import React, {useState} from "react";
import { TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet, View, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { auth } from "../config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
// import { TextInput } from "react-native-gesture-handler";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()


    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                      // Faire la redirection
                      navigation.navigate('Home')
                      const uid = user.uid;
                      // ...
                    }
                  });
            })
            .catch(error => alert(error.message))

            
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                      // Faire la redirection
                      navigation.navigate('Home')
                      const uid = user.uid;
                      // ...
                    }
                  });
            })
            .catch(error => alert(error.message))
    }


    return(
        <KeyboardAvoidingView
            style={styles.container}
            //behavior="padding"
            backgroundColor="#DEE9F1"
        >
            <View>
                <Text style={styles.Text}>
                    Bienvenue
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSignIn}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Connexion</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Inscription</Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    Text:{
        color:'#6333C9',
        fontWeight: 'bold',
        marginBottom: '10%'
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    inputContainer:{
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#8F6DD9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#6333C9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#6333C9',
        fontWeight: '700',
        fontSize: 16,
    },
})