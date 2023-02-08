import React from 'react'
import { Text } from 'react-native';

const CapitalInformation = ({route}) => {
    let capital=route.params.capital;
    console.log(capital);
  return (
    <Text>{capital}</Text>
  )
}
//97c8cb1d9925a7f3c0872381123b9659
export default CapitalInformation