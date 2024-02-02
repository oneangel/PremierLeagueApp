import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Image, Text, TextInput} from 'react-native';


const LoginScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/fotos-premium/fondo-morado-fondo-morado_873925-18997.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
      <Image
                source={{ uri: 'https://www.seekpng.com/png/full/328-3283001_5-days-until-new-premier-league-season-kicks.png' }}
                style={styles.premier}
              />
      
        <View style={styles.loginContainer}>

          <View style={styles.topContainer}>
          <Text style={styles.loginText1}>Iniciar sesión</Text>
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              placeholderTextColor="#666"
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#666"
              secureTextEntry
            />
            <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
            <TouchableOpacity style={styles.buttonContainer2} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText2}>Iniciar Sesion</Text>
            </TouchableOpacity>
            <Text style={styles.registrarse}>Registrarse</Text>
          </View>
          
          
          <View style={styles.bottomContainer}>
            <Text style={styles.loginText}>Iniciar sesion con:</Text>

            
            <TouchableOpacity style={styles.buttonContainer}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/480px-Facebook_f_logo_%282019%29.svg.png' }}
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Facebook</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={styles.buttonContainer}>
              <Image
                source={{ uri: 'https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png' }}
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles2.container}>
      {/* Logo en la parte superior */}
      <Image
        source={{ uri: 'https://www.premierleague.com/resources/prod/v6.122.4-6039/i/elements/premier-league-logo-header-full.png' }}
        style={styles2.logo}
      />

      {/* Contenido de noticias */}
      <View style={styles2.newsContainer}>
        {/* Noticia 1 */}
        <View style={styles2.newsItem1}>
          <Image
            source={{ uri: 'https://www.eltiempo.com/files/article_main_1200/files/crop/uploads/2023/12/20/65837d21552bc.r_1706477073678.53-0-2865-1688.jpeg' }}
            style={styles2.newsImage1}
          />
          <Text style={styles2.newsDescription1}>Jurgen Klopp anunció salida del Liverpool</Text>
        </View>

        
        <View style={styles2.newsItem}>
          <Image
            source={{ uri: 'https://tmssl.akamaized.net/images/foto/galerie/victor-osimhen-ssc-neapel-2022-1665600735-94105.jpg?lm=1665600744' }}
            style={styles2.newsImage}
          />
          <Text style={styles2.newsDescription}>Victor Osimhen podria irse a la Premier League</Text>
        </View>

        <View style={styles2.newsItem}>
          <Image
            source={{ uri: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-01/Edson-Alvarez-7-2a059c.jpg' }}
            style={styles2.newsImage}
          />
          <Text style={styles2.newsDescription}>Edson Álvarez, listo para regresar con el West Ham</Text>
        </View>
      </View>
    </View>
  );
};


const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#511267',
  },
  logo: {
    height: 50,
    resizeMode: 'contain',
  },
  newsContainer: {
    flex: 1,
    padding: 16,
  },
  newsItem1: {
    flexDirection: 'column',
    alignItems: 'Start',
    marginBottom: 50,
  },
  newsImage1: {
    width: 360,
    height: 200,
    marginRight: 12,
    borderRadius: 8,
  },
  newsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  newsImage: {
    width: 200,
    height: 120,
    marginRight: 12,
    borderRadius: 8,
  },
  newsDescription1: {
    fontSize: 16,
    color: 'white'
  },
  newsDescription: {
    flex: 1,
    fontSize: 16,
    color: 'white'
  },
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginContainer: {
    width: '100%', 
    height: '80%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  topContainer: {
    padding: 50,
    paddingTop: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  bottomContainer: {
    padding: 20,
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  loginText1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  registrarse: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'gray',
    marginBottom: 10,
    marginLeft: 110,
  },
  forgot: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    marginLeft: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray', 
  },
  buttonContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8E44AD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray', 
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    
  },
  premier: {
    width: 200,
    height: 80,
    marginRight: 150,
    marginBottom: 30,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonText2: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 76,
    fontWeight: 'bold',
  },
});

export default App;
