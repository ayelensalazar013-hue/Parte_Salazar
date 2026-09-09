CREATE DATABASE IF NOT EXISTS educore_db 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE educore_db;

-- 1. Tabla: core_roles
CREATE TABLE IF NOT EXISTS core_roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    descripcion VARCHAR(255)
) ENGINE=InnoDB;

-- Insertar roles por defecto
INSERT INTO core_roles (id, nombre, descripcion) VALUES
(1, 'Administrador', 'Acceso total al sistema'),
(2, 'Docente', 'Gestión académica y notas'),
(3, 'Estudiante', 'Acceso a materias y consultas')
ON DUPLICATE KEY UPDATE nombre=VALUES(nombre);

-- 2. Tabla: core_personas
CREATE TABLE IF NOT EXISTS core_personas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    dni VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 3. Tabla: core_usuarios
CREATE TABLE IF NOT EXISTS core_usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    persona_id INT NOT NULL,
    role_id INT NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    estado ENUM('activo', 'inactivo') DEFAULT 'activo',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (persona_id) REFERENCES core_personas(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES core_roles(id) ON DELETE RESTRICT
) ENGINE=InnoDB;
