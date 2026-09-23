import EquipamentoCard from "./components/EquipamentoCard";
import equipamentos from "./data/equipamentos";
import "./styles/visual.css";

function App() {
  return (
    <div className="app-container">

      <h1 className="titulo">
        Visualizador de Equipamentos de Manufatura Inteligente
      </h1>

      <div className="equipamentos">

        {equipamentos.map((equipamento, index) => (
          <EquipamentoCard
            key={index}
            imagem={equipamento.imagem}
            nome={equipamento.nome}
            status={equipamento.status}
            funcao={equipamento.funcao}
          />
        ))}

      </div>

    </div>
  );
}

export default App;