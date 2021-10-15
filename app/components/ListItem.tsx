import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationScreens } from '../constants/NavigationScreens';
import { numberFormat } from '../utils/utils';


const ListItem = ({ item, navigation }) => {

    const navigateToDetails = () => {
        navigation.push(NavigationScreens.Details, { item })
    }

    const isPositive = item.price_change_percentage_24h > 0
    
    return(
        <TouchableOpacity onPress={() => navigateToDetails()} activeOpacity={0.5}>
            <View style={styles.itemContainer}>
                <View>
                    <View style={styles.leftFlex}>
                        <Image style={styles.coinLogo} source={{uri: item.image}} />
                        <View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.symbol}>{item.symbol}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.price}>{numberFormat(item.current_price)}</Text>
                    <Text style={isPositive ? 
                        styles.percentageChangePositive: 
                        styles.percentageChangeNegative}>{Math.abs(item.price_change_percentage_24h)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 80,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    price: {
        textAlign: 'right',
        marginBottom: 7
    },
    leftFlex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    percentageChangePositive: {
        color: 'green',
        textAlign: 'right'
    },
    percentageChangeNegative: {
        color: 'red',
        textAlign: 'right'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 7,
    },
    symbol: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 12,
        color: 'grey'
    },
    coinLogo: {
        width: 30,
        height: 30,
        marginRight: 10
    }
})


export default ListItem