const StoreItemCard = ({ storeItem, addToCart }) => {
  const { name, image, description, price, quantityAvailable } = storeItem;
  return (
    <article className="store-item-card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
      <p>total Available: {quantityAvailable}</p>
      <button onClick={() => addToCart(storeItem)}>Add to Cart</button>
    </article>
  );
};

export default StoreItemCard;
