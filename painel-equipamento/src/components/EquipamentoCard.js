function EquipamentoCard({ imagem, nome, status, funcao }) {
  return (
    <div className="card">

      <img
        className="imagem-equip"
        src={imagem}
        alt={nome}
      />

      <h2 className="nome-equip">
        {nome}
      </h2>

      <p className={`status ${status.toLowerCase().replace(" ", "-")}`}>
        Status: {status}
      </p>

      <p className="funcao">
        {funcao}
      </p>

    </div>
  );
}

export default EquipamentoCard;