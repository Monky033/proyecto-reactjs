import { addDoc, collection } from "firebase/firestore";
import { db } from "./Configuracion";

const ordersRef = collection(db, "ordenCompra");

export const addOrden = async (order) => {
  const ordenDoc = await addDoc(ordersRef, order);

  return ordenDoc.id;
};
