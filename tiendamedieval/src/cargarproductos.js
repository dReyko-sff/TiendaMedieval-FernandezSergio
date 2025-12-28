import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import productos from "../data/productos.json";

function CargarProductos() {

  const subir = async () => {
    try {
      const ref = collection(db, "products");

      for (const p of productos) {
        await addDoc(ref, p);
        console.log("Subido:", p.nombre);
      }

      alert("🔥 Productos cargados en Firebase");
    } catch (error) {
      console.error("❌ Error subiendo productos:", error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Carga inicial de productos</h2>
      <button onClick={subir}>
        SUBIR PRODUCTOS A FIREBASE
      </button>
    </div>
  );
}

export default CargarProductos;
