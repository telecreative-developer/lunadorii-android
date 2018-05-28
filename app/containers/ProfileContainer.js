import React, { Component } from 'react'
import Profile from '../components/Profile'
import RecentOrders from '../particles/RecentOrders'


const dataRecentOrders = [
  {
    image: 'https://ssli.ebayimg.com/images/g/Dp8AAOSwPc9WuaVh/s-l640.jpg',
    categories: 'Beuty Box, Cream Sunblock, and 3 others',
    status: 'Packing',
    date: '20 Mei',
    time: '12:00 AM',
    total:'250.000',
    key: 1
  },
  {
    image: 'https://i5.walmartimages.ca/images/Large/1c0/_en/999999-00770103148748_a1c0_en.jpg?odnBound=460',
    categories: 'Beuty Box, Cream Sunblock, and 3 others',
    status: 'Non - Packing',
    date: '20 Mei',
    time: '12:00 AM',
    total:'250.000',
    key: 2
  },
  {
    image: 'https://image.afcdn.com/expertclub/20150420/279261_w300h300.jpg',
    categories: 'Beuty Box, Cream Sunblock, and 3 others',
    status: 'Packing',
    date: '20 Mei',
    time: '12:00 AM',
    total:'250.000',
    key: 3
  },
]

export default class ProfileContainer extends Component {
  render() {
    return (
      <Profile
      dataRecentOrders={dataRecentOrders}
      renderRecentOrders={({item}) => (
        <RecentOrders image={item.image} categories={item.categories} status={item.status} total={item.total} date={item.date} time={item.time}/>
      )}
      />
    )
  }
}
