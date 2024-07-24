import {  useContext } from "react";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import CartContextProvider from "./components/Store/Cart-Context.jsx";
import { CartContext } from "./components/Store/Cart-Context.jsx";
// import {CartContext} from "./components/Store/Cart-Context.jsx";

function App() {
  const {addItemToCart} = useContext(CartContext);
  return (
    <CartContextProvider>
      <Header
      // cart={shoppingCart}
      // onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop onAddItemToCart={addItemToCart} />
    </CartContextProvider>
  );
}

export default App;
