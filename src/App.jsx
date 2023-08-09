import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import { Cart } from "./components/Pages/Cart/Cart";
import { Categoria } from "./components/Pages/Categoria/Categoria";
import { Detalle } from "./components/Pages/Detalle/Detalle";
import { CartProvider } from "./components/State/Cart.contex";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/item/:id" element={<Detalle />} />
      <Route path="/Categoria/:id" element={<Categoria />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <CartProvider>
        <RouterProvider router={routes} />
      </CartProvider>
    </div>
  );
}

export default App;
