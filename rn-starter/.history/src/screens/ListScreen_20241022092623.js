import React from "react";
import { Text, StyleSheet, View} from "react-native";

const ListScreen = () => {
    const chickens = [
        {name: 'Silky Johnson'},
        {name: 'Bilbo Baggins'},
        {name: 'Castor Troy'},
        {name: 'Pollux Troy'},
        {name: 'Sean Archer'},
        {name: 'Cameron Poe'},
        {name: 'Nikki Cage'},
    ]

  return (
  <View>
    <Text>ListScreen</Text>;
    {/* {
        chickens.map((chicken) => (
            <Text>{chicken.name}</Text>
        ))
    } */}
    <FlatList 
    horizontal
    showsHorizontalScrollIndicator={false}
    data={chickens}
    renderItem={({item}) => {
        return <Text style={styles.itemStyle}>{item.name}</Text>
        }}
    />
  </View>
  )
};

const styles = StyleSheet.create({
    itemStyle:{
        marginVertical:60,
        marginHorizontal:10,
        fontSize: 24,

    }
})

export default ListScreen