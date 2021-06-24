/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Touchable, ActivityIndicator } from 'react-native';
import CardsService from '../../Services/CardsService';

const index = ({ navigation }) => {
    const [mechanics, setMechanics] = useState([]);

    useEffect(() => {
        CardsService.getAllCards().then((result) => {
            let _mechanics = [];

            Object.keys(result).map(function (key, index) {
                if (result[key]) {
                    result[key].map((r, i) => {
                        if (r.mechanics) {
                            r.mechanics.map((m, i) => {
                                _mechanics.push(m.name);
                            })
                        }
                    });
                }
            });

            setMechanics(_mechanics.filter((v, i, a) => a.indexOf(v) === i));
            console.log(mechanics);

        }).catch((err) => console.log(err))
        return;
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Hearthstone</Text>
            {mechanics.length == 0 &&
                <ActivityIndicator style={{ justifyContent: "center", alignSelf: "center" }} size={"small"} color={"black"} />
            }

            {mechanics.length > 0 &&
                <ScrollView>
                    {mechanics.map((m, i) => (
                        <TouchableOpacity key={i} onPress={() => navigation.navigate("Cards", { mechanicsId: m })}>
                            <Text style={styles.title}>{m}</Text>
                            <View style={styles.divider} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#fff"
    },
    divider: {
        padding: 0.3,
        width: "95%",
        backgroundColor: "#ddd",
        marginLeft: 20
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
});
export default index;
