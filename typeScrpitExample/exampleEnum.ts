enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Cancelled = "Cancelled",
}
function displayOrderStatus(status: OrderStatus) {
  switch (status) {
    case OrderStatus.Pending:
      console.log("Your order is pending.");
      break;
    case OrderStatus.Shipped:
      console.log("Your order is Shipped.");
      break;
    case OrderStatus.Cancelled:
      console.log("Your order is Cancelled.");
      break;
    default:
      console.log("Unknow order status.");
  }
}
displayOrderStatus(OrderStatus.Shipped);
displayOrderStatus(OrderStatus.Cancelled);