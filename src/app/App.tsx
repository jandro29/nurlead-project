import { useEffect, useState } from "react";
import HomePage from "@/features/home/pages/HomePage";
import Splash from "@/app/components/Splash";
import WorkshopPage from "@/features/workshop/pages/WorkshopPage";
import CartPage from "@/features/cart/pages/CartPage";
import CartProvider from "@/app/context/CartProvider";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const MIN_MS = 1200;
    const timer = setTimeout(() => setIsLoading(false), MIN_MS);
    return () => clearTimeout(timer);
  }, []);

  const [route, setRoute] = useState<string>(() => window.location.hash || '#/')
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '#/')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <CartProvider>
      {isLoading ? (
        <Splash onSkip={() => setIsLoading(false)} />
      ) : (
        route === '#/workshop' ? <WorkshopPage /> : route === '#/cart' ? <CartPage /> : <HomePage />
      )}
    </CartProvider>
  );
}

export default App;
