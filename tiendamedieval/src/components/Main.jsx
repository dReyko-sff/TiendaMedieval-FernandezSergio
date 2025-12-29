import "./main.css";

function Main() {
  return (
    <main className="main_container">
      <section className="atajo">
        <h1 className="atajo_title">Bienvenido a la Forja Medieval <br /> "dreyko"</h1>
        <p className="atajo_subtitle">
          Armas, escudos y piezas forjadas con dedicación, fuego y tradición guerrera.
        </p>

        <a href="/productos" className="atajo_button">
          Ver Productos
        </a>
      </section>

      <section className="flyers">
        <div className="flyer_card">
          <h3>🔥 Forja Real</h3>
          <p>Acero trabajado al estilo clásico.</p>
        </div>
        <div className="flyer_card">
          <h3>🛡 Calidad Épica</h3>
          <p>Durabilidad digna de cualquier guerrero.</p>
        </div>
        <div className="flyer_card">
          <h3>⚔ Artesanal</h3>
          <p>Cada pieza tiene su carácter único.</p>
        </div>
      </section>
    </main>
  );
}

export default Main;
