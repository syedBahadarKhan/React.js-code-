import { useContext, createContext, useEffect, useState } from "react";

const cartContext = createContext();

const getStoredCart = () => {
  try {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
};

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(getStoredCart);

     //add to cart
    const addToCart = (product) =>{
        setCart((prev) =>{
            const existing = prev.find((item)=> item.id === product.id  );
            if(existing) {
                return prev.map((item) =>item.id === product.id ? {...item, qty: item.qty + 1} : item)
            }
            return [...prev, {...product, qty: 1}]
        })
    }
    
    //update cart
    const updateQty = (id, qty) => {
        setCart(cart.map(item =>
          item.id === id ? { ...item, qty: Number(qty) } : item
        ));
      };
    
      //remove from cart
      const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
      };


      //Total
      const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);

    return(
        <cartContext.Provider value={{cart, addToCart, updateQty, removeItem, total}}>
            {children}
        </cartContext.Provider>
    )
}



export const  useCart= () => useContext(cartContext);