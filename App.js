import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ProgressCircle } from 'react-native-svg-charts'

const App: () => React$Node = () => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={require('./src/assets/img/persona.jpg')}
          />
          <View style={styles.boxInfo}>
            <View style={styles.boxProgress}>
              <ProgressCircle
                style={styles.barProgress}
                progress={0.7}
                strokeWidth={15}
                progressColor={'rgb(69, 221, 253)'}
              />
              <Text style={styles.textProgress}>60/200</Text>
            </View>
            <View style={styles.boxPontos}>
              <Text style={styles.pontos}>12.000</Text>
              <Image
                style={styles.diamante}
                source={require('./src/assets/img/diamante.png')}
              />
            </View>
          </View>
        </View>

        <ScrollView style={styles.scrollView}>
          <Text>teste</Text>
          <Text>teste</Text>
          <Text>teste</Text>
          <Text>teste</Text>
          <Text>teste</Text>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity onPres onPress={this.onPress}>
            <Image
              style={styles.imgFooter}
              source={require('./src/assets/img/trofeu.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPres onPress={this.onPress}>
            <Image
              style={[styles.imgFooter, styles.imgFooterPlay]}
              source={require('./src/assets/img/play.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPres onPress={this.onPress}>
            <Image
              style={styles.imgFooter}
              source={require('./src/assets/img/config.png')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  SafeAreaView: {
    // backgroundColor: '#555f88',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    // alignItems: 'center'
  },
  boxInfo: {
    alignItems: 'flex-end',
    flex: 1,
    padding: 20,
  },
  avatar: {
    margin: 20,
    width: 150,
    height: 150,
    borderRadius: 200,
  },
  boxPontos: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  pontos: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 20
  },
  diamante: {
    width: 20,
    height: 20,
  },
  scrollView: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    padding: 10,
    borderRadius: 8,
    margin: 20,
    borderBottomWidth: 0,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'rgba(0,0,0,1)',
    shadowRadius: 2,
    elevation: 2,
  },
  footer: {
    marginVertical: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  imgFooter: {
    width: 50,
    height: 50,
  },
  imgFooterPlay: {
    width: 150,
    height: 150
  },
  boxProgress: {
    position: 'relative'
  },
  barProgress: {
    height: 100,
    width: 100
  },
  textProgress: {
    position: 'absolute',
    top: 40,
    width: 100,
    textAlign: 'center',
    color: '#45ddfd',
    fontWeight: 'bold',
    fontSize: 15
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default App;
