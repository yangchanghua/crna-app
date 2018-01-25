'use strict';

import React from 'react'

import ShopAvatarView from '../component/ShopAvatarView'
import DetailPage from '../pages/ShopDetail'
import data from '../data'

export default class ShopListView extends React.Component {
    render() {
        return data.list.map((item, i) => {
            item.shopClicked = () => {
                this.props.navigation.navigate('ShopDetail', {
                    store: item,
                });
            };
            return (<ShopAvatarView {...item} key={i}/>)
        })
    }
}