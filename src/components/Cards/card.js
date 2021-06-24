/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import CardFlip from 'react-native-card-flip';

const index = ({ card }) => {
    const _card = useRef();

    return (
        <View style={styles.container}>
            <CardFlip style={styles.cardContainer} ref={_card}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.card, styles.cardFront]}
                    onPress={() => { _card.current.flip() }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image style={styles.image} source={card.img ? { uri: card.img } : require("../../assets/no-image.png")} />
                        <Text style={styles.label}>{card.name}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.card, styles.cardBack]}
                    onPress={() => _card.current.flip()}>
                    <Text style={styles.text}>Card Set:{card.cardSet}</Text>
                    <Text style={styles.text}>Faction: {card.faction}</Text>
                    <Text style={styles.text}>Type: {card.type}</Text>
                    <Text style={styles.text}>Text: {card.text}</Text>
                    <Text style={styles.text}>Player Class: {card.playerClass}</Text>
                </TouchableOpacity>
            </CardFlip>
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
    cardFront: {
        backgroundColor: '#FE474C',
    },
    cardBack: {
        backgroundColor: '#FEB12C',
    },
    label: {
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    text: {
        lineHeight: 50,
        textAlign: 'center',
        fontSize: 33,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    image: {
        margin: 10,
        height: 200,
        width: 200
    }
});
export default index;
