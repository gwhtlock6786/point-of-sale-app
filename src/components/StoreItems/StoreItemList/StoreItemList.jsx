import StoreItemCard from "../StoreItemCard/StoreItemCard";

const StoreItemList = ({ storeItems, addToCart }) => {
  console.log(storeItems);
  return (
    <section className="store-item-list">
      {storeItems.map((storeItem, index) => (
        <StoreItemCard
          key={index}
          storeItem={storeItem}
          addToCart={addToCart}
        />
      ))}
    </section>
  );
};

export default StoreItemList;
