import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native'
import ListItem from '../components/ListItem'

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GetCoins } from '../redux/actions/home';
import Loading from '../components/Loading';

const Home = ({ navigation }) => {

  const [ loading, setLoading ] = useState<boolean>(true)
  const [ coinsList, setCoinsList ] = useState([])
  const { data } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCoins());
  }, [])

  useEffect(() => {
    if (data.coinsData.length > 0) {
      setCoinsList(data.coinsData)
      setLoading(false)
    }
  }, [data.coinsData])

  return(
      <SafeAreaView style={styles.container}>
          {loading ? 
           <Loading/> : 
            <View style={styles.listContainer}>
              <View style={styles.listView}>
                  <FlatList
                      testID="auto-complete-list-container"
                      data={coinsList}
                      ListHeaderComponent={() => <Text style={styles.heading}>Popular Currencies</Text>}
                      renderItem={({ item }) => {
                          return <ListItem navigation={navigation} item={item} />
                      }}
                      keyExtractor={(item, index) =>
                          `${item.id}-${item.current_price}-${index}`
                      }
                  />
              </View>
          </View>}
      </SafeAreaView>
  )
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8eaed',
        flex: 1,
    },
    listContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    heading: {
        fontSize: 20,
        marginBottom: 10,
    },
    listView: {
        
    }
})

export default Home