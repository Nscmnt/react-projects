import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="valid-keys">
        <span className="matched">Jor</span>
        <span className="remainder">ge</span>
      </div>

      <div className="typed-keys">asdssfdJorahasodau</div>

      <div className="completed-words">
        <ol>
          <li>Loki</li>
          <li>Safira</li>
          <li>Cristal</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
