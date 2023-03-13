# c9-54-t-mern
TU DESTINO APP ( es una app de alquileres inmobiliarios)

<div align="center">
  <p align="center">c9-54-t-mern</p>
  <p align="center">   
    <image src="https://res.cloudinary.com/djdp4cavt/image/upload/v1677519830/my-uploads/LogoIcono_tlmc1f.png" alt="logo width="150" height="150">
  </p>

# **:clapper: Vídeo de presentación**

Click [Aqui](https://youtu.be/Z4_4QKyuIkM "Tu Destino App") para ver el video.

</div>

<details>
  <summary>Tabla de contenidos</summary>
  <ol>
    <li><a href="#introducción">Introducción</a></li>       
    <li><a href="#diseño">Diseño</a></li>   
    <li><a href="#prerequisitos">Prerequisitos</a></li>    
    <li><a href="#librerías-externas">Librerias externas</a></li>
    <li><a href="#funcionalidades">Funcionalidades</a></li>
    <li><a href="#qa-testing">QA Testing</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

<br />

## Introducción

- Tu Destino app es una aplicación para reservas, booking de alojamiento, alquiler de casa, apartamento o habitación.
- Las principales funcionalidades son reservas, plataforma de pago (Paypal) y panel de administrador para la gestión de usuarios y productos (CRUD).
- La app cuenta con registro y login de usuarios. Los usuarios no registrados no pueden reservar y además los usuarios se pueden deshabilitar (bannear desde Dashboard de Administración).
- La app es responsive, se puede ver perfectamente en dispositivos móviles.
- Cuenta con un Panel o Dashboard de Administrador, donde se pueden manejar los usuarios, productos (CRUD) y ver las reservas, también nos muestra en tiempo real algunas estadísticas, como cantidad de usuarios, cantidad de reservas, las últimas reservas del día, cantidad de ventas (en USD), ganancias totales a la fecha actual (en USD).


## Getting Started

### FRONTEND
First, run the development server:
#### Clone Repository
$ git clone https://github.com/No-Country/C9-54-t-mern.git
#### Go to a specific folder
$ cd client
#### Install Dependencies
$ npm i
#### Run Aplication with ViteJS
$ npm run dev

### BACKEND
First, run the development server:
#### Clone Repository
$ git clone https://github.com/No-Country/C9-54-t-mern.git
#### Install Dependencies
$ npm i
#### Create .env for Environment Variables.
$ cp .env.example .env
#### Configure the .env with your Connection Data.
PORT=
MONGO_URI=
JWT=
PAYPAL_API_CLIENT=
PAYPAL_API_SECRET=
PAYPAL_API_URL=
#### Create MongoDB Atlas database with name tudestino
Click [Aqui](https://account.mongodb.com/account/login?n=%2Fv2%2F63dc2750be2d2d1a4f072ed6&nextHash=%23clusters "MongoDB Atlas") para ingresar a MongodB Atlas.
#### Run Aplication
$ npm start


## Funcionalidades

- :white_check_mark: Registrarse con email y password.
- :white_check_mark: Busqueda y Filtrado de Alquileres.
- :white_check_mark: Reserva de Alquileres.
- :white_check_mark: Pago online con plataforma Paypal.
- :white_check_mark: Consulta de reservas.
- :white_check_mark: Modificacion de perfil de usuario.
- :white_check_mark: Panel de administrador, manejo de usuarios y productos (propiedades) (CRUD).
- :white_check_mark: Deshabilitacion de usuarios y productos (baneo).


## Developers

<strong>Frontend Devs: </strong>
<li>Luciana Melisa Rabozzi Orelo  <a target="_blank" href="https://www.linkedin.com/in/lrabozzi/"><img  width="20px" height="20px" src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmT3rEWw0KwxXzlpI_BpGFOCQmGN4Bxy53pidk-bfuo02PpRqwIXqZ9ISLN5Nk0AJOg2Z_7JqZA=w1265-h817" /></a></li>
<br />
<li>Jorge Espinoza  <a target="_blank" href="https://www.linkedin.com/in/espinoza-jorgeluis/"><img  width="20px" height="20px" src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmT3rEWw0KwxXzlpI_BpGFOCQmGN4Bxy53pidk-bfuo02PpRqwIXqZ9ISLN5Nk0AJOg2Z_7JqZA=w1265-h817" /></a></li>
<br />
<li>Eitan Sanabria  <a target="_blank" href="https://www.linkedin.com/in/eitan-sanabria-yberbuden-3b1a16237/"><img  width="20px" height="20px" src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmT3rEWw0KwxXzlpI_BpGFOCQmGN4Bxy53pidk-bfuo02PpRqwIXqZ9ISLN5Nk0AJOg2Z_7JqZA=w1265-h817" /></a></li>
<br />
  <li>Victor Fernandez <a target="_blank" href="https://www.linkedin.com/in/victor-h-fernandez-p/"><img  width="20px" height="20px" src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmT3rEWw0KwxXzlpI_BpGFOCQmGN4Bxy53pidk-bfuo02PpRqwIXqZ9ISLN5Nk0AJOg2Z_7JqZA=w1265-h817" /></a></li>
<br />

<strong>Backend Devs: </strong>
<li>Anmy Moreno  <a target="_blank" href="https://www.linkedin.com/in/anmy-moreno-b11943247/"><img  width="20px" height="20px" src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmT3rEWw0KwxXzlpI_BpGFOCQmGN4Bxy53pidk-bfuo02PpRqwIXqZ9ISLN5Nk0AJOg2Z_7JqZA=w1265-h817" /></a></li>
<br />
<li>Luis Alomia Valencia  <a target="_blank" href="https://www.linkedin.com/in/luis-fidel-alomia-valencia-87b24923b/"><img  width="20px" height="20px" src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmT3rEWw0KwxXzlpI_BpGFOCQmGN4Bxy53pidk-bfuo02PpRqwIXqZ9ISLN5Nk0AJOg2Z_7JqZA=w1265-h817" /></a></li>
<br />
<li>Horacio Abitú  <a target="_blank" href="https://www.linkedin.com/in/horacioabitu/"><img  width="20px" height="20px" src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmT3rEWw0KwxXzlpI_BpGFOCQmGN4Bxy53pidk-bfuo02PpRqwIXqZ9ISLN5Nk0AJOg2Z_7JqZA=w1265-h817" /></a></li>
<br />
 
## MOCKUPS / SCREENSHOOTS

No contamos con el rol de diseño UI/UX en el equipo, hicimos algunos mockups de bajo nivel en Excalidraw, como para tener una guía e idea.

Click [Aqui](https://excalidraw.com/#room=fc2c5fd4474493cc2a7c,X35ZGsDnCXZdJ1hHva7Ccg "mockups") para ver Mockups de bajo nivel.


## Technologies
The following tools were used in the construction of the project:

- ReactJS
- Javascript
- Redux
- Axios
- ViteJS
- NodeJS
- ExpressJS
- MongoBD
- Material UI
- Tailwindcss
- Css Modules
- DaisyUI
- React-Router-Dom
- React-Hook-Form


## License
This project is under the [MIT](./LICENSE) license.

                                                                                                             
