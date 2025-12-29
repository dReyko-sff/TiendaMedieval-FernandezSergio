import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

export async function getAllProducts() {
  const snap = await getDocs(collection(db, "products"));
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export const getProductsByCategory = async (categoria) => {
  const q = query(
    collection(db, "products"),
    where("categoria", "==", categoria.toLowerCase())
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

