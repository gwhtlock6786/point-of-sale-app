const CartItemCard = ({ cartItem, quantity }) => {
  const { name, price, image, description, category } = cartItem;

  return (
    <tr>
      <td>
        <img src={image} alt={name} style={{ width: "50px", height: "50px" }} />
      </td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>${price.toFixed(2)}</td>
      <td>{quantity}</td>
      <td>${(price * quantity).toFixed(2)}</td>
    </tr>
  );
};

export default CartItemCard;
