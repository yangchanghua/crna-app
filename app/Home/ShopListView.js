'use strict';

import React from 'react'

import ShopAvatarView from '../component/ShopAvatarView'
import DetailPage from '../pages/DetailPage'
import data from '../data'

export default class ShopListView extends React.Component {
    render() {
        return data.list.map((item, i) => {
            item.onPress = () => {
                this.props.navigator.push({
                    component: DetailPage,
                    args: {}
                })
            }
            return (<ShopAvatarView {...item} key={i}/>)
        })
    }
}