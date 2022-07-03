import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, _Text } from 'react-native';
// import { StyleSheet } from './externalStyle';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header1}> Mohammed F Hossane</Text>
      </View>
      <View style={styles.image}>
        {/* <Image source={require('./assets/zion.jpg')} /> */}
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Bridalveil_Falls_08180.JPG'}}
       style={{width: 400, height: 500}} />
      </View>
      <View style={styles.para}>
        <Text style={styles.text1}> My name is Mohammed Hossame. I am currently a student at Larchmont Charter LFP, going to 11th grade and graduating
          2024. Some of my hobbies include gaming and watching anime. Some of my favorite games are League of Legends, TFT, VALORANT,
          and some more. My favorite genre is comedy. So far, I am not sure what I want to be. I was thinking possibly an engineer, or
          majoring in computer science. To be honest I havent really researched much on colledges and universities, but I would like to
          go somewhere close to home, in California. 
        </Text>
      </View>
      <View style={styles.list}>
      <FlatList
        data={[
          {key: 'Stanford'},
          {key: 'UCLA'},
          {key: 'Berkley'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#dec09e',
    alignItems: 'center',
    justifyContent: 'center',
  },


  header: {
    flex: 1,
    backgroundColor: '#dec09e',
    alignItems: 'center',
    justifyContent: 'center', 
  },


  header1: {
   fontWeight: 'bold',
   fontSize: 30,
  },


  image: {
    flex: 2.3,
    backgroundColor: '#dec09e',
    alignItems: 'center',
    justifyContent: 'center',
  },


  para: {
    flex: 1,
    backgroundColor: '#dec09e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1: {
    flex: 1,
    backgroundColor: '#dec09e',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left'
  },


  list: {
    flex: .5,
    backgroundColor: '#dec09e',
  },


});
