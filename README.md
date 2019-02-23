### Code Challenge presentado por Camilo Tabares

Buenos dias, este ejercicio hace parte de un code challenge creado por MATTERSUPPLY con la finalidad de probar los skills como desarrollador FRONTEND

### Tecnologias empleadas

- ReactJs/Redux(FrontEnd)
- Firebase(Backend) 
- Freenom(Dominio ligado a proyecto en firebase) 
- Versionamiento del proyecto(Github)

## Tareas que realiza la app del ejercicio:

-Cumple con los requisitos responsive mostrados en el sketch

-En el inicio Tiene un filtrado de  búsqueda que despliega la información de los repositorios del nombre o nick que se busque:
*Organiza la información que trae cada búsqueda de usuario para:
*Crear un card del usuario que se busco con el avatar, el nombre y tipo de usuario
*Desplegar a forma de card de post la información de cada repo, donde el título es el nombre del repositorio, la fecha es la fecha de creación y se encuentra linkeado al repositorio de github

-Tiene sistema de logueo a través de github gracias a la activación del firebase Auth
*Asincronicamente cambia estados de botony pagina principal donde aparece snippet del usuario
*Se cargan los gist de la persona, que esta linkeado a una pagina de detalle, en la cual, a través de un plugin que toma el autor y el id del gist para mostrarlo embebido

-Guarda en el ruteo
*Si la persona de desvincula al sitio en la pagina de detalle se redirecciona imediatamente al inicio, donde se encuentra el buscador 

## Links para ver resultados de la prueba:

Sitio version de desarrollo: https://quickblog.tk
Repositorio publico en github: https://github.com/Tbars84/posts-app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
