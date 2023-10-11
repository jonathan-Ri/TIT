CREATE DATABASE IADC;

CREATE TABLE Juego (
   id_juego INT AUTO_INCREMENT PRIMARY KEY,  
   fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



CREATE TABLE avatares(
    id_avatar INT AUTO_INCREMENT PRIMARY KEY,
    imagen BLOB
);

CREATE TABLE jugador (
    id_jugador INT AUTO_INCREMENT PRIMARY KEY,
    fondo INT DEFAULT 3000,
    rol ENUM('Ataque', 'Defensa'),
    id_avatar INT,
    FOREIGN KEY (id_avatar) REFERENCES avatares(id_avatar)
);

CREATE TABLE equipo(
    rol ENUM('Ataque', 'Defensa'),

)

CREATE TABLE rondas(

)

CREATE TABLE donacion(
    id_jugador
)



-- Reestablecer la ronda al numero 1 cada vez que empiece un juego nuevo.
DELIMITER //
CREATE TRIGGER RestablecerNumeroRonda
AFTER INSERT ON Juego
FOR EACH ROW
BEGIN
   UPDATE Juego
   SET Numero_Ronda = 1
   WHERE Id_Juego = NEW.Id_Juego;
END;
//
DELIMITER ;