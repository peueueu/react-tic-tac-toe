const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const Gameboard = () => {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, index) => (
        <li key={`row-${index}`}>
          <ol>
            {row.map((col, index) => {
              return (
                <li key={`col-${index}`}>
                  <button>{col}</button>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
};
