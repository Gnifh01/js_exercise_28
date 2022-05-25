const order = {};

console.log(order?.customer?.address?.city); 

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}