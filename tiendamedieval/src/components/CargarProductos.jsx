import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const productos = [
  {
    nombre: "Espada de Acero",
    precio: 150,
    img: "https://via.placeholder.com/200x150?text=Espada",
    categoria: "ataque"
  },
  {
    nombre: "Escudo de Madera",
    precio: 100,
    img: "https://via.placeholder.com/200x150?text=Escudo",
    categoria: "defensa"
  },
  {
    nombre: "Varita Mágica",
    precio: 200,
    img: "https://via.placeholder.com/200x150?text=Varita",
    categoria: "magia"
  },
  {
    nombre: "Hacha de Batalla",
    precio: 180,
    img: "https://via.placeholder.com/200x150?text=Hacha",
    categoria: "ataque"
  },
  {
    nombre: "Armadura de Placas",
    precio: 300,
    img: "https://via.placeholder.com/200x150?text=Armadura",
    categoria: "defensa"
  },
  {
    nombre: "Poción de Mana",
    precio: 50,
    img: "https://via.placeholder.com/200x150?text=Pocion",
    categoria: "magia"
  }
];

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