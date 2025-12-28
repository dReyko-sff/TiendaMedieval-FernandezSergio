import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
//import productos from "../data/productos.json";

function CargarProductos() {

  const subirProductos = async () => {
    const ref = collection(db, "products");

    for (const producto of producto) {
      await addDoc(ref, producto);
      console.log("Subido:", producto.nombre);
    }

    alert("🔥 Productos subidos a Firebase");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Carga inicial</h2>
      <button onClick={subirProductos}>
        SUBIR PRODUCTOS A FIREBASE
      </button>
    </div>
  );
}

export default CargarProductos;
