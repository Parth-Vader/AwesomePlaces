import React from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

const HandleInput = (props) => (
    
    <View style={styles.inputContainer}>
        <TextInput
            style={{ width: 300 }}
            placeholder="Awesome place"
            value={props.placeName}
            onChangeText={props.placeNameChangeHandler}
            style={styles.placeInput} />
        <Button title="Add" style={styles.placeButton} onPress={props.placeSubmitHandler} />
    </View>
)
const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1,
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      placeInput: {
        width: "70%"
      },
      placeButton: {
        width: "30%"
      },

})
export default HandleInput;