'use strict';

import React from 'react'

import ShopAvatarView from '../component/ShopAvatarView'
import DetailPage from '../pages/ShopPage'
import data from '../data'

export default class ShopListView extends React.Component {
    render() {
        return data.list.map((item, i) => {
            item.shopClicked = () => {
                this.props.navigation.navigate('ShopPage', {
                    store: item,
                });
            };
            return (<ShopAvatarView {...item} showDistance={true} showActivities={true} key={i}/>)
        })
    }
}