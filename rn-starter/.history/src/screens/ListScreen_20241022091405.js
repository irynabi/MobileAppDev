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
    data={chickens}
    renderItem={(chicken) => <Text>{chicken.name}</Text>}
    />
  </View>
  )
};

const styles = StyleSheet.create({})

export default ListScreen