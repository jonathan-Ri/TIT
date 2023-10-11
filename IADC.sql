CREATE DATABASE IADC;

CREATE TABLE juego (
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
    id_avatar INT,
    id_equipo INT,
    FOREIGN KEY (id_avatar) REFERENCES avatares(id_avatar),
    FOREIGN KEY (id_equipo) REFERENCES equipo(id_equipo),
    UNIQUE (id_avatar)  
);

CREATE TABLE equipo(
    id_equipo INT AUTO_INCREMENT PRIMARY KEY,
    nombre_equipo ENUM("Equipo de Ataque", "Equipo de Defensa"),
    pozo_comun INT DEFAULT 18000
);

CREATE TABLE ronda(
    id_ronda INT AUTO_INCREMENT PRIMARY KEY,
    num_ronda INT,
    ronda_completada BOOLEAN
);

CREATE TABLE donacion(
    id_donacion INT AUTO_INCREMENT PRIMARY KEY,
    donacion INT DEFAULT 0,
    id_jugador INT,
    id_ronda INT,
    FOREIGN KEY (id_jugador) REFERENCES jugador(id_jugador),
    FOREIGN KEY (id_ronda) REFERENCES rondas(id_ronda)
);



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