import CartItemCard from "../CartItemCard/CartItemCard";

const CartItemList = ({ cartItems }) => {
  console.log("cartItems:", cartItems);

  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <CartItemCard
            key={item.id}
            cartItem={item}
            quantity={item.quantity}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CartItemList;
