const order = {};

// if (
//     order &&
//     order.customer &&
//     order.customer.address &&
//     !order.customer.address.city
// ) {
//     console.log("City is required");
// }

if (!order?.customer?.address?.city) {
  console.log("City is required");
}

// The optional chaining operator (?.) is a feature in JavaScript that allows you to safely access deeply nested properties of an object without having to perform multiple nullish checks.
