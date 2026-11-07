import CartItemList from "../components/CartItems/CartItemList/CartItemList";

const CartItemPage = ({ cart }) => {
  return (
    <section>
      <h2>CartItemPage</h2>
      <CartItemList cartItems={cart} />
    </section>
  );
};

export default CartItemPage;
