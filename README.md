# Intelnexo Test

Este proyecto es una aplicación web desarrollada con Angular para el frontend y Flask para el backend. Utiliza Docker y Docker Compose para facilitar el despliegue y la gestión de contenedores.

## Backend

### Requisitos

- Docker y Docker Compose instalados

### Instrucciones para Levantar el Backend

1. Clona el repositorio:

   ```bash
   git clone git@github.com:geamdev/intelnexo.git
   ```

2. Navega al directorio del backend:
   ```bash
   cd intelnexo/intelnexo-back
   ```
3. Ejecuta Docker Compose para levantar los servicios:
   ```bash
   docker-compose up
   ```

- Esto iniciará los contenedores necesarios para el backend.

4.  El backend estará disponible en http://localhost:4000

## Frontend

### Requisitos

- Node.js y npm instalados
- Angular CLI (puedes instalarlo con `npm install -g @angular/cli`)

### Instrucciones para Levantar el Frontend

1. Navega al directorio del frontend:
   ```bash
   cd intelnexo/intelnexo-front
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación Angular:
   ```bash
   ng serve
   ```

- La aplicación estará disponible en http://localhost:4200

4. Abre tu navegador y visita http://localhost:4200 para ver la aplicación.
