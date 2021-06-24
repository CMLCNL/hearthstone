import React, { useRef, useState } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { SearchBar } from 'react-native-elements';
import CardsService from '../../Services/CardsService';
import Card from './card';

const index = ({ card }) => {
    const [searchText, setSearchText] = useState("");
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);

    const search = (t) => {
        setLoading(true);
        setSearchText(t);
        if (t == "") {
            setLoading(false);
            setCards([])
        }
        else {
            CardsService.searchCardByName(t).then((result) => {
                setCards(result.slice(0, 50))
                console.log(result);
                setLoading(false);
            }).catch((error) => { console.log(error); })
        }
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <Card card={item} />
    )
    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Buraya Yazınız..."
                onChangeText={(t) => search(t)}
                value={searchText}
                lightTheme
                platform='ios'
                style={styles.searchBar}
                showLoading={loading}
            />
            {cards.length > 0 &&
                <>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={cards}
                        renderItem={this.renderItem}
                        initialNumToRender={10}
                    />
                </>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center"
    },
});
export default index;
