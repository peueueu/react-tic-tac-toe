export const Gameboard = ({ onSelectSquare, board }) => {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={`row-${rowIndex}`}>
          <ol>
            {row.map((playerSymbol, colIndex) => {
              return (
                <li key={`col-${colIndex}`}>
                  <button
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
};
