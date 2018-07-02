import React, { Component } from 'react'
import PurchaseHistory from '../components/PurchaseHistory'
import RecentOrders from '../particles/RecentOrders'
import HistoryOrders from '../particles/HistoryOrders'

const dataRecentOrders = [
  {
    categories : "Beauty Box, Cream Sunblock, and 3 others",
    status : "Packaging",
    total : 430000,
    date : "28 mei 2018",
    time : "16:00 PM",
    image : "https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
  },
  {
    categories : "Beauty Box, Cream Sunblock, and 3 others",
    status : "Packaging",
    total : 446000,
    date : "28 mei 2018",
    time : "16:00 PM",
    image : "https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
  },
  {
    categories : "Beauty Box, Cream Sunblock, and 3 others",
    status : "Packaging",
    total : 26000,
    date : "28 mei 2018",
    time : "16:00 PM",
    image : "https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
  },
  {
    categories : "Beauty Box, Cream Sunblock, and 3 others",
    status : "Packaging",
    total : 454000,
    date : "28 mei 2018",
    time : "16:00 PM",
    image : "https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
  },
  {
    categories : "Beauty Box, Cream Sunblock, and 3 others",
    status : "Packaging",
    total : 42000,
    date : "28 mei 2018",
    time : "16:00 PM",
    image : "https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
  }
]

const dataHistoryOrders = [
  {
    categories : "Beauty Box, Cream Sunblock, and 3 others",
    status : "Packaging",
    total : 234000,
    date : "28 mei 2018",
    time : "16:00 PM",
    image : "https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
  },
  {
    categories : "Beauty Box, Cream Sunblock, and 3 others",
    status : "Packaging",
    total : 544000,
    date : "28 mei 2018",
    time : "16:00 PM",
    image : "https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
  },
  {
    categories : "Beauty Box, Cream Sunblock, and 3 others",
    status : "Packaging",
    total : 664000,
    date : "28 mei 2018",
    time : "16:00 PM",
    image : "https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
  }
]

export default class PurchaseHistoryContainer extends Component{

  state = {
    modalVisibleEditQuantity : false
  }

  render(){
    return(
      <PurchaseHistory
        goback={() => this.props.navigation.goBack()}
        dataRecentOrders={dataRecentOrders}
        renderRecentOrders={({item}) => (
          <RecentOrders 
            categories={item.categories}
            status={item.status}
            total={item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            date={item.date}
            time={item.time}
            image={item.image}/>
        )}
        dataHistoryOrders={dataHistoryOrders}
        renderHistoryOrders={({item}) => (
          <HistoryOrders
            categories={item.categories}
            status={item.status}
            total={item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            date={item.date}
            time={item.time}
            image={item.image}/>
        )}
      />
    )
  }
}