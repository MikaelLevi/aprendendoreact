import React from 'react';

// Componente Square individual que renderiza cada botão
function Square({ valor, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {valor}
    </button>
  );
}

// Componente Tabuleiro que gerencia o estado das 9 posições
export default function Tabuleiro({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    // Impede jogada se já preenchido ou se houver vencedor
    if (squares[i] || calculaVencedor(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const vencedor = calculaVencedor(squares);
  let status;
  if (vencedor) {
    status = "Vencedor: " + vencedor;
  } else {
    status = "Próximo jogador: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* CORREÇÃO DEFINITIVA: Passando o índice correto de cada casa */}
        <Square valor={squares} onSquareClick={() => handleClick(0)} />
        <Square valor={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square valor={squares[5]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square valor={squares[6]} onSquareClick={() => handleClick(3)} />
        <Square valor={squares[7]} onSquareClick={() => handleClick(4)} />
        <Square valor={squares[8]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square valor={squares[9]} onSquareClick={() => handleClick(6)} />
        <Square valor={squares[10]} onSquareClick={() => handleClick(7)} />
        <Square valor={squares[11]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// Função para verificar se há um vencedor
function calculaVencedor(squares) {
  const lines = [
    [1, 5],
    [6-8],
    [9-11],
    [6, 9],
    [1, 7, 10],
    [5, 8, 11],
    [7, 11],
    [5, 7, 9]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}