import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import CardsService from '../../Services/CardsService';
import Card from './card';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const index = ({ navigation, route }) => {
    const [cards, setCards] = useState([]);
    console.log(route.params.mechanicsId);
    useEffect(() => {
        CardsService.getAllCards().then((result) => {
            let _cards = [];
            Object.keys(result).map(function (key, index) {
                if (result[key]) {
                    result[key].map((r, i) => {
                        if (r.mechanics) {
                            r.mechanics.map((m, i) => {
                                if (m.name == route.params.mechanicsId)
                                    _cards.push(r)
                            })
                        }
                    });
                }
            });
            setCards(_cards);

        }).catch((err) => console.log(err))
        return;
    }, [])

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <Card card={item} />
    )

    return (
        <View style={styles.container}>

            {cards.length == 0 &&
                <ActivityIndicator style={styles.loading} size={"small"} color={"black"} />
            }
            {cards.length > 0 &&
                <>
                    <Button
                        icon={
                            <Icon
                                name="search"
                                size={15}
                                color="white"
                            />
                        }
                        title="Ara"
                        style={styles.searchButton}
                        onPress={() => navigation.navigate("CardSearch")}
                    />
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
        justifyContent: 'center',
        backgroundColor: "#fff",
        alignItems: "center"
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    divider: {
        padding: 0.3,
        width: "95%",
        backgroundColor: "#ddd",
        marginLeft: 20
    },
    cardContainer: {
        width: 320,
        height: 470,
        marginBottom: 20,
        marginTop: 20,
    },
    card: {
        width: 320,
        height: 470,
        backgroundColor: '#FE474C',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
    },
    header: {
        fontSize: 36,
        fontWeight: "500",
        margin: 20,
        alignSelf: "center",
    },
    title: {
        fontSize: 32,
        fontWeight: "500",
        margin: 10,
    },
    cardFront: {
        backgroundColor: '#FE474C',
    },
    cardBack: {
        backgroundColor: '#FEB12C',
    },
    label: {
        lineHeight: 470,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    loading: {
        justifyContent: "center",
        alignSelf: "center"
    },
    searchButton: {
        width: 300,
        height: 40,
        margin: 10
    }
});
export default index;
