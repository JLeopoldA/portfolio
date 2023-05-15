import React from 'react';
import './Background.css';

const Background = () => {
  const tileSize = 20; // Size of each tile in pixels
  const numColumns = Math.ceil(window.innerWidth / tileSize); // Number of columns based on window width
  const numRows = Math.ceil(window.innerHeight / tileSize); // Number of rows based on window height

  const renderTiles = () => {
    const tiles = [];
    const colors = ['black', 'grey', 'white'];

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numColumns; col++) {
        const tileColor = colors[(row + col) % colors.length];
        const tileStyle = {
          width: `${tileSize}px`,
          height: `${tileSize}px`,
          backgroundColor: tileColor,
        };

        tiles.push(<div key={`${row}-${col}`} className="tile" style={tileStyle}></div>);
      }
    }

    return tiles;
  };

  return <div className="background-container">{renderTiles()}</div>;
};

export default Background;