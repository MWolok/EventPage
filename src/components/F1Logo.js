import React from "react";

const F1Chessboard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.text}>
        <span style={styles.blackLetter}>F</span>
        <span style={styles.whiteLetter}>o</span>
        <span style={styles.blackLetter}>r</span>
        <span style={styles.whiteLetter}>m</span>
        <span style={styles.blackLetter}>u</span>
        <span style={styles.whiteLetter}>l</span>
        <span style={styles.blackLetter}>a</span>
        <span style={styles.blackLetter}>1</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    display: "flex",
  },
  text: {
    fontSize: "100px", // Dostosuj rozmiar tekstu według własnych preferencji
    fontWeight: "bold",
    textShadow: "2px 2px 4px #000000", // Cień tekstu, aby lepiej pasował do tła
  },
  blackLetter: {
    color: "#000000", // Kolor czarny
  },
  whiteLetter: {
    color: "#ffffff", // Kolor biały
  },
};

export default F1Chessboard;