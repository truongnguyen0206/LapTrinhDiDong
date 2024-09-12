import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

export default function App() {
  const [diceRolls, setDiceRolls] = useState([3,4,5])

  return (
    <View>
      <Button
        title="Roll dice!"
        onPress={() => {
          setDiceRolls(diceRolls.map((value)=>{return value+1}))
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  )
}