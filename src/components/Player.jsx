import { useState } from "react";

export const Player = ({ initialName, symbol, isActive, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function toggleEditing() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onSave(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={`${isActive ? "active" : undefined}`}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggleEditing}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
};
