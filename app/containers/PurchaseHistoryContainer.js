import React, { Component } from 'react'
import PurchaseHistory from '../components/PurchaseHistory'
import RecentOrders from '../particles/RecentOrders'
import HistoryOrders from '../particles/HistoryOrders'
import moment from 'moment'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


// const dataRecentOrders = [
//   {
//     categories : "Beauty Box, Cream Sunblock, and 3 others",
//     status : "Packaging",
//     total : 430000,
//     date : "28 mei 2018",
//     time : "16:00 PM",
//     image : "https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
//   },
//   {
//     categories : "Beauty Box, Cream Sunblock, and 3 others",
//     status : "Packaging",
//     total : 446000,
//     date : "28 mei 2018",
//     time : "16:00 PM",
//     image : "https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
//   },
//   {
//     categories : "Beauty Box, Cream Sunblock, and 3 others",
//     status : "Packaging",
//     total : 26000,
//     date : "28 mei 2018",
//     time : "16:00 PM",
//     image : "https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
//   },
//   {
//     categories : "Beauty Box, Cream Sunblock, and 3 others",
//     status : "Packaging",
//     total : 454000,
//     date : "28 mei 2018",
//     time : "16:00 PM",
//     image : "https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
//   },
//   {
//     categories : "Beauty Box, Cream Sunblock, and 3 others",
//     status : "Packaging",
//     total : 42000,
//     date : "28 mei 2018",
//     time : "16:00 PM",
//     image : "https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
//   }
// ]

// const dataHistoryOrders = [
//   {
//     categories : "Beauty Box, Cream Sunblock, and 3 others",
//     status : "Packaging",
//     total : 234000,
//     date : "28 mei 2018",
//     time : "16:00 PM",
//     image : "https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
//   },
//   {
//     categories : "Beauty Box, Cream Sunblock, and 3 others",
//     status : "Packaging",
//     total : 544000,
//     date : "28 mei 2018",
//     time : "16:00 PM",
//     image : "https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
//   },
//   {
//     categories : "Beauty Box, Cream Sunblock, and 3 others",
//     status : "Packaging",
//     total : 664000,
//     date : "28 mei 2018",
//     time : "16:00 PM",
//     image : "https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
//   }
// ]

class PurchaseHistoryContainer extends Component{

  state = {
    modalVisibleEditQuantity : false
  }

  render(){
    return(
      <PurchaseHistory
        goback={() => this.props.navigation.goBack()}
        dataRecentOrders={this.props.productrecent}
        renderRecentOrders={({item}) => (
          <RecentOrders 
            image={item.list[0].thumbnails[0].thumbnail_url}
            billing_code={item.billing_code}
            status={item.order_status}
            total={item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            date={moment(item.created_at).calendar()}
            action={() => this.props.navigation.navigate("DetailsTransactionContainer", {data:item})}/>
        )}
        dataHistoryOrders={this.props.producthistory}
        renderHistoryOrders={({item}) => (
          <HistoryOrders
            image={item.list[0].thumbnails[0].thumbnail_url}
            billing_code={item.billing_code}
            status={item.order_status}
            total={item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            date={moment(item.created_at).calendar()}
            action={() => this.props.navigation.navigate("DetailsTransactionContainer", {data:item})} />
        )}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    getsingleuser: state.getsingleuser,
    editname: state.editname,
    productrecent: state.productrecent,
    producthistory: state.producthistory
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseHistoryContainer)