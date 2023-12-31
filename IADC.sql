CREATE DATABASE IADC;

USE IADC;

CREATE TABLE juego (
   id_juego INT AUTO_INCREMENT PRIMARY KEY,  
   fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE equipo(
    id_equipo INT AUTO_INCREMENT PRIMARY KEY,
    nombre_equipo ENUM("Equipo de Ataque", "Equipo de Defensa"),
    pozo_comun INT DEFAULT 0
);

CREATE TABLE jugador (
    id_jugador INT AUTO_INCREMENT PRIMARY KEY,
    fondo INT DEFAULT 3000,
    imagen BLOB,
    id_equipo INT,
    FOREIGN KEY (id_equipo) REFERENCES equipo(id_equipo) 
);


CREATE TABLE ronda(
    id_ronda INT AUTO_INCREMENT PRIMARY KEY,
    num_ronda INT,
    ronda_completada BOOLEAN,
    id_juego INT,
    FOREIGN KEY (id_juego) REFERENCES juego(id_juego)
);

CREATE TABLE donacion(
    id_donacion INT AUTO_INCREMENT PRIMARY KEY,
    donacion INT DEFAULT 0,
    id_jugador INT,
    id_ronda INT,
    FOREIGN KEY (id_jugador) REFERENCES jugador(id_jugador),
    FOREIGN KEY (id_ronda) REFERENCES ronda(id_ronda)
);

CREATE TABLE negociacion(
    id_negociacion INT AUTO_INCREMENT PRIMARY KEY,
    continuar BOOLEAN DEFAULT FALSE,
    id_ronda INT,
    FOREIGN KEY (id_ronda) REFERENCES ronda(id_ronda)
);

CREATE TABLE castigo(
    id_castigo INT AUTO_INCREMENT PRIMARY KEY,
    monto INT,
    id_remitente INT,
    id_receptor INT,
    id_ronda INT,
    FOREIGN KEY (id_remitente) REFERENCES jugador(id_jugador),
    FOREIGN KEY (id_receptor) REFERENCES jugador(id_jugador),
    FOREIGN KEY (id_ronda) REFERENCES ronda(id_ronda)
);

CREATE TABLE prestigio(
    id_prestigio INT AUTO_INCREMENT PRIMARY KEY,
    monto INT,
    id_remitente INT,
    id_receptor INT,
    id_ronda INT,
    FOREIGN KEY (id_remitente) REFERENCES jugador(id_jugador),
    FOREIGN KEY (id_receptor) REFERENCES jugador(id_jugador),
    FOREIGN KEY (id_ronda) REFERENCES ronda(id_ronda)
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