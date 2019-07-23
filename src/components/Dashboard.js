import React, {Component, Fragment} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    half1: {
        flex: 1,
        backgroundColor: '#da582e'
    },
    half2: {
        flex: 1,
        backgroundColor: 'green'
    },
});

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <View style={styles.container}>
                    <View style={styles.half1}>
                    </View>
                    <View style={styles.half2}>

                    </View>
                </View>
            </Fragment>
        );
    }
}

export default Dashboard;
