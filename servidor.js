//Ayuda en la comunicación entre el navegador y el servidor
import http from 'http';
//Sirve para leer documentos HTML. 
import fs from 'fs';


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

      if (url === '/') {
        darBienvenida(req, res);
      } 
      else if (url === '/api/usuarios') {
        getUsuarios(req, res);
      } 
      else if (url === '/api/movimientos') {
        getMovimientos(req, res);
      } 
      else if (url === '/usuarios') {
        mostrarUsuarios(req, res);
      } 
      else if (url === '/movimientos') {
        mostrarMovimientos(req, res);
      } 
        else if (url === '/perfil') {
        mostrarPerfil(req, res);
      } 
      else if (url === '/equipo') {
        mostrarEquipo(req, res);
      } 
      else if (url === '/opinion') {
        mostrarOpinion(req, res);
      } 
        else if (url === '/api/perfil') {
        getPerfil(req, res);
      } 
      else if (url === '/api/equipo') {
        getEquipo(req, res);
      } 
        else if (url === '/api/externa') {
      getApiExterna(req, res);
    }
    else {
      manejarRuta404(req, res);
    }
    });
     
      //Haz una página equipo.html correspondiente
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a equipo.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //¿Qué es el freedombox?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en miarchivo.html un enlace a servidor.js y al resto de los html
