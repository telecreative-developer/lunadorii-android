const change = (status) => {

  switch(status){
    case "checkout":
      return "Checkout"
      break
    case "accepted_payment":
      return "Deal"
      break
    case "Packing":
      return "Packing"
      break
    case "Shipping":
      return "Shipping"
      break
    case "Delivered":
      return "Delivered"
      break
    default:
      return "Unknown"
      break
  }

}

export{
  change
}