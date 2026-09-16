import ListaDeTarefas from "./component/ListaDeTarefas";

function App() {
  return (
    <div>
      <ListaDeTarefas tarefas={["Comprar pão", "Estudar React"]} />
    </div>
  );
}

export default App;