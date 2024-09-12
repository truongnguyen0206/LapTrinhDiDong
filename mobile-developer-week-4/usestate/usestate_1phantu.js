import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

export default function App() {
    const [diceRolls, setDiceRolls] = useState(0)

    return (
      <View>
      <Button
        title="Roll dice!"
        onPress={() => {
         setDiceRolls(diceRolls + 1)
        }}
      />
       <Text>{diceRolls}</Text>
    </View>
  )
}