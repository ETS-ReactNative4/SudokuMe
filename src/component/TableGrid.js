import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { Table, Rows, Row, Cell, TableWrapper } from 'react-native-table-component';

var Styles = require('../resources/styles');

export default class TableGrid extends Component {

    render() {
      return (
        <View style={styles.container}>
          <Table>
            {
              this.props.game.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                  {
                    rowData.map((cellData, cellIndex) => (
                      <TextInput value={`${cellData}`}
                            key={index + "" + cellIndex}
                            editable={true}
                            underlineColorAndroid='transparent'
                            keyboardType='numeric'
                            textAlign={'center'}
                            maxLength={1}
                            onChangeText={(text)=>this.props.updateCel(text, index)}
                            style={Styles.fixValue} 
                            />
                    ))
                  }
                </TableWrapper>
              ))
            }
          </Table>
         </View>
      )
    }

}
// style={Styles.fixValue} 
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  });


  // <TextInput value={`${cellData}`}
  //                           editable={true}
  //                           underlineColorAndroid='transparent'
  //                           keyboardType='numeric'
  //                           textAlign={'center'}
  //                           maxLength={1}
  //                           onChangeText={(text)=>this.props.updateCel(text, index)}
  //                           />
