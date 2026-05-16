//Ayuda a crear el servidor y asi se empieza a utilizar express
import express from 'express';
//Sirve para leer documentos HTML. 
import fs from 'fs';
import path from 'path';

const app = express();
//Express es mas sencillo que HTML en especial en la parte de lor URLS es mas sencillo solo utilizar app.get y empezar el servidor es muchi mas resumido.
app.use(express.static('public'));
    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           //500 significa que hubo un error en el servidor.
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //200 significa que todo salio bien.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }


    //Esta función deberá enviar un json con los datos de los usuarios
    function getUsuarios(req, res) {
        //Esto representa un objeto JSON de un usuario
        //Agrega otro usuario
        const usuarios = [
        {
          nombre: 'Punk',
          saldo: '0'
        },
        {
          nombre: 'Sam',
          saldo: '100'
        }
      ];
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      //convierte un objeto de JavaScript a texto JSON y se usa porque el servidar necesita enviar el texto al navegador. 
      res.end(JSON.stringify(mascotas));
    }

  
    function mostrarPerfil(req, res) {
        fs.readFile('perfil.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

     
      function mostrarMovimientos(req, res) {
        //Construye una página básica movimientos.html
        fs.readFile('movimientos.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    //Esta función deberá enviar un json con los datos de las movimientos
    function getMovimientos(req, res) {
      const movimientos = [
        {
          tipo: 'quincena',
          monto: 100
        },
        {
          tipo: 'pagos comida',
          monto: 50
        },
        {
          tipo: 'pago casa',
          monto: 10
        }
      ];
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(movimientos));
    }

     //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
    function mostrarEquipo(req, res) {
  fs.readFile('equipo.html', 'utf8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('No se pudo cargar equipo.html');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

    function mostrarOpinion(req, res) {
  fs.readFile('opinion.html', 'utf8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('No se pudo cargar opinion.html');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

    function getPerfil(req, res) {
  const perfil = {
    nombre: 'Samantha',
    carrera: 'ITC',
    semestre: 'Cuarto'
  };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(perfil));
}

function getEquipo(req, res) {
  const equipo = [
    {
      nombre: 'Sam',
      cualidad: 'Creativa'
    },
    {
      nombre: 'Punk',
      cualidad: 'Participativo'
    },
  ];
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(equipo));
}

async function getApiExterna(req, res) {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const datos = await respuesta.json();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(datos));
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error al consumir la API externa');
  }
}


    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('Si ves este mensaje es porque acabas de borrar la página.');
    }

    //incluye el enlace a la documentación de createServer
    const servidor = http.createServer((req, res) => {
      const url = req.url;
//Ruta en express en mugar de url se usa app.get 

      app.get('/',darBienvenida);
      app.get( '/api/usuarios',getUsuarios);
      app.get('/api/movimientos',getMovimientos);
      app.get('/usuarios',mostrarUsuarios);
      app.get('/movimientos',mostrarMovimientos);
      app.get('/equipo',mostrarEquipo);
      app.get('/opinion',mostrarOpinion);
      app.get('/api/perfil',getPerfil);
      app.get('/api/equipo',getPerfil);
      app.get('/api/externa',getApiExterna);
      app.use(manejarRuta404);
   
     
      //Haz una página equipo.html correspondiente
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a equipo.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //¿Qué es el freedombox?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

