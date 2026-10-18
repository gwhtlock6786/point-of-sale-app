import storeItems from "../data/storeItemData";
import StoreItemList from "../components/StoreItems/StoreItemList/StoreItemList";

export const StoreItemsPage = ({ addToCart }) => {
  return (
    <div>
      <h1>Store Items</h1>
      <StoreItemList storeItems={storeItems} addToCart={addToCart} />
    </div>
  );
};
