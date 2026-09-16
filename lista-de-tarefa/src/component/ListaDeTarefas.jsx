import React from 'react';

function ListaDeTarefas({ tarefas }) {

  const renderizarConteudo = () => {
    if (tarefas.length === 0) {
      return (
        <p>Nenhuma tarefa para exibir.</p>
      );
    } else {
      return (
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      {renderizarConteudo()}
    </div>
  );
}

export default ListaDeTarefas;