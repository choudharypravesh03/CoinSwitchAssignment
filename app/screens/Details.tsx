import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import { numberFormat } from '../utils/utils'


const Details = ({ route }) => {
    const { item } = route?.params
    const isPositive = item.price_change_percentage_24h > 0
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.detailContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.coinLogo} source={{uri: item.image}} />
                </View>
                <View>
                    <Text style={styles.symbolText}>Current 
                        <Text style={styles.symbol}> {item.symbol} </Text>
                    buy price</Text>
                    <View style={styles.pricesContainer}>
                        <Text style={styles.price}>{numberFormat(item.current_price)}</Text>
                        <Text style={isPositive ? 
                        styles.percentageChangePositive: 
                        styles.percentageChangeNegative}>{Math.abs(item.price_change_percentage_24h)}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.otherDetailItems}>
                <View style={styles.detailItem}>
                    <Text style={styles.bold}>Market Cap Rank: </Text>
                    <Text>{item.market_cap_rank}</Text>
                </View> 
                <View style={styles.detailItem}>
                    <Text style={styles.bold}>24 hour high: </Text>
                    <Text>{numberFormat(item.high_24h)}</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.bold}>24 hour low: </Text>
                    <Text>{numberFormat(item.low_24h)}</Text>
                </View>            
            </View>
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    bold: {
        fontWeight: 'bold'
    },
    detailContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    logoContainer: {
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 10,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderColor: '#dddddd'
    },
    coinLogo: {
        width: 30,
        height: 30,
    },
    symbolText: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 12,
    },
    symbol: {
        textTransform: 'uppercase',
    },
    price: {
        fontSize: 20,
        marginRight: 10
    },
    pricesContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    percentageChangePositive: {
        color: 'green',
        textAlign: 'right'
    },
    percentageChangeNegative: {
        color: 'red',
        textAlign: 'right'
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#dddddd',
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginBottom: 10,
    },
    otherDetailItems: {
        paddingHorizontal: 16,
        paddingVertical: 16
    }
})


export default Details