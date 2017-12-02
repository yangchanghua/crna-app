import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CitySearchBar from "../components/CitySearchBar";
import DummyStatusBar from "../components/DummyStatusBar";
import StorePoster from "../components/StorePoster";
import Categories from "../components/Categories";
import JoinBanner from "../components/JoinBanner";
import StoreList from "../components/StoreList";

export default class Home extends React.Component {
    render() {
        return (
        <View style={styles.home}>
            <DummyStatusBar/>
            <CitySearchBar/>
            <StorePoster/>
            <Categories/>
            <Text style={{fontSize: 12}}>收藏</Text>
            <ScrollView>
                <StoreList/>
            </ScrollView>
        </View>
        );
    };
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        paddingHorizontal: 5,
    },
});