import React, { Component } from 'react';
import {
  AppRegistry,
  // StyleSheet,
  Button,
  Text,
  TextInput,
  View
} from 'react-native';
export default class MenghitungVolumeBalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      volume: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <View style={{ backgroundColor: 'red' }}>
           <Text style={{ padding: 25, fontSize: 20, color: 'white', textAlign: 'center' }} >
            Menghitung Volume Balok
          </Text>
         </View>
        <View style={{ margin: 20, padding: 10, backgroundColor: '#e3f2fd' }}>
            <TextInput
style={{ height: 40 }}
              placeholder="Panjang Balok"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />
            <TextInput
style={{ height: 40 }}
              placeholder="Lebar Balok"
              onChangeText={(lebar) => this.setState({ lebar })}
              keyboardType='numeric'
            />
            <TextInput
style={{ height: 40 }}
              placeholder="Tinggi Balok"
              onChangeText={(tinggi) => this.setState({ tinggi })}
              keyboardType='numeric'
            />
            <Button
              onPress={() => this.setState({
                vol: (this.state.panjang * this.state.lebar * this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>
        <View style={{ margin: 20, backgroundColor: 'yellow' }}>
          <Text style={{ padding: 10, fontSize: 20, color: 'black' }} >
              Panjang{'\t'}= {this.state.panjang} {'\n'}
              Lebar{'\t\t\t'}= {this.state.lebar} {'\n'}
              Tinggi{'\t\t\t'}= {this.state.tinggi}{'\n'}
              Volume{'\t\t'}= {this.state.vol}
          </Text>
         </View>
         <View style={{ padding: 5, margin: 20, backgroundColor: '#F44336', alignItems: 'center' }}>
             <Text style={{ color: 'white', textAlign: 'center' }}>
               Pendidikan Teknik Informatika
             </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => MenghitungVolumeBalok);
