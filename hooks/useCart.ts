import { CartContext } from "@/app/_utils/cartContext"
import { useContext } from "react"

interface CartItems {
  ProductName?: string,
  color?: string,
  descriptopn?: string,
  image?: string,
  price?: number
  quantity?: number
  size?: string,
  slug?: string,
  colorName?: string
}
const useCart = () => {
  const { cart, setCart } = useContext(CartContext)

  const addToCart = (product: CartItems) => {
    const storedData: string | null = window.localStorage.getItem('cartProducts');
    if (storedData !== null) {
      const oldItems: CartItems[] = JSON.parse(storedData);
      let isProductAlreadyInCart = false;
      for (let i = 0; i < oldItems.length; i++) {
        if (oldItems[i].ProductName === product.ProductName) {
          isProductAlreadyInCart = true;
          break;
        }
      }
      if (isProductAlreadyInCart) {
        window.alert('This item is already in your cart!');
      } else {
        setCart([...oldItems, product])
        window.localStorage.setItem('cartProducts', JSON.stringify([...oldItems, product]));
      }
    } else {
      setCart([product])
      window.localStorage.setItem('cartProducts', JSON.stringify([product]));
    }
  };


  const removeFromCart = (product: string) => {
    console.log(product)
  }
  const clearCart = (product: string) => {
    console.log(product)
  }

  return { addToCart, removeFromCart, clearCart }
}

export default useCart 