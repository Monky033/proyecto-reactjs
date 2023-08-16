import { useState } from "react";
import { useCartContext } from "../../State/Cart.contex";
import { AiOutlineDelete } from "react-icons/ai";
import { addOrden } from "../../../lib/ordenCompra";
import { LocaleString } from "../../LocaleString/LocaleString";
import { Input } from "../../Input/Input";
import { actualizaProduc } from "../../../lib/dat";
import { OnlyCount } from "../../OnlyCount/OnlyCount";
import "./Cart.scss";

const BUY_FORM = [
  { label: "Nombre", name: "name", placeholder: "Escribe tu nombre" },
  { label: "Correo", name: "email", placeholder: "Escribe tu email" },
  { label: "Repite correo", name: "email2", placeholder: "Repite tu email" },
  { label: "Teléfono", name: "phone", placeholder: "Escribe tu teléfono" },
];

export const Cart = () => {
  const [form, setForm] = useState({});

  const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();

  const createOrder = async () => {
    const items = cart.map(({ id, nombre, qty, precio }) => ({
      id,
      nombre,
      qty,
      precio,
    }));

    const { nombre, celular, mail } = form;

    const order = {
      buyer: { nombre, celular, mail },
      items,
      total: getTotalPrice,
    };

    console.log({ order });
    const id = await addOrden(order);
    console.log(id);

    await actualizaProduc(items);

    cleanCart();
  };

  const handleChange = ({ target: { value, name } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="cart">
      <div className="container cart__container">
        {cart.length ? (
          <>
            <div className="cart__item" style={{ border: "none" }}>
              <button className="cart__item-button" onClick={cleanCart}>
                Vaciar carrito
              </button>
            </div>
            <div className="cart__products">
              <div
                className="cart__item"
                style={{ border: "none", padding: "0 16px" }}
              >
                <span>Producto</span>
                <span>Cantidad</span>
                <span>Precio</span>
                <span>Subtotal</span>
              </div>
              {cart.map((item) => (
                <div className="cart__item" key={item.id}>
                  <span>{item.nombre}</span>
                  <span>{item.qty}</span>
                  <LocaleString num={item.precio} />
                  <LocaleString num={item.qty * item.precio} />
                  <OnlyCount />
                  <button
                    className="cart__item-delete"
                    onClick={() => removeProduct(item.id)}
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              ))}
            </div>
            <div className="cart__item" style={{ border: "none" }}>
              <div className="cart__total">
                <span>Total</span> <LocaleString num={getTotalPrice} />
              </div>{" "}
            </div>
            <div className="form">
              {BUY_FORM.map((input) => (
                <Input key={input.title} onChange={handleChange} {...input} />
              ))}
              <button
                className="cart__item-button form__button"
                onClick={createOrder}
              >
                Realizar pedido
              </button>
            </div>
          </>
        ) : (
          <h1>EL carrito esta vacio</h1>
        )}
      </div>
    </div>
  );
};
