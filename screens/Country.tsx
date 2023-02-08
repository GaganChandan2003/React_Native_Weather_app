import React, { useEffect, useState } from 'react'
import { Text, View, Image, Button } from 'react-native';
import {  DataTable } from 'react-native-paper';


const Country = ({navigation, route }) => {
    let country = route.params.country;
    let [data, setdata] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
            .then((res) => res.json())
            .then((res) => setdata(res))
            .catch((err) => console.log(err))
    }, []);


    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{ fontSize: 25, marginBottom: 30 }}>Country Information</Text>
            {
                data.map((el)=>
                {
                    return <View key={el.name} style={{ borderWidth: 1, height: 200, alignItems: 'center', justifyContent: 'center', padding: 20, borderRadius: 10 }}>
                        <Image
                            style={{width:80,height:50}}
                            source={{uri: `${el.flags.png}`}}
                        /> 
                        <Text>Capital: {el.capital}</Text>
                        <Text>Population: {el.population}</Text>
                        <Text>Latitude: {el.latlng[0]}</Text>
                        <Text>Longitude: {el.latlng[1]}</Text>
                        <Button title="Capital weather" onPress={()=>navigation.navigate('CapitalInformation',{"capital":el.capital})}></Button>
                    </View>
                })
            }
        </View>
    )
}

export default Country

