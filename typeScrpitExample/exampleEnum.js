var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
function displayOrderStatus(status) {
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
