// CartContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color: string,
  descriptopn: string,
  image: string,
  size: string,
  colorName?: string
}

interface CartContextType {
  cartItems: CartItem[];
  totalPrice: number;
  totalQuantity?: number;
  addToCart?: (item: CartItem) => void;
  removeFromCart?: (itemId: string) => void;
}

export const CartContext = createContext<any | undefined>(undefined);

export const useCartProvider = (): {} => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartProducts');
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems) as CartItem[];
      setCartItems(parsedCartItems);
      calculateTotal(parsedCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    calculateTotal(cartItems);
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemName: string) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== itemName);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = (items: CartItem[]) => {
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
    setTotalPrice(totalPrice);
    setTotalQuantity(totalQuantity);
  };

  return { cartItems, setCartItems, totalPrice, setTotalPrice, totalQuantity, setTotalQuantity, addToCart, removeFromCart }
  // <CartContext.Provider value={{ cartItems, totalPrice, totalQuantity, addToCart, removeFromCart }}>

  // </CartContext.Provider>

};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
