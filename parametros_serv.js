import express from 'express';
import mysql from 'mysql2/promise';

const app = express();

const config = {
  host: 'mysql-1b336be3-tec-e448.a.aivencloud.com',
  port: 13269,
  user: 'avnadmin',
  password: 'PASSWORD',
  database: 'defaultdb',
};

// Ruta principal
app.get('/', (req, res) => {
  res.send('Servidor de Kueski Smart Widget');
});

// GET normal: muestra todos los datos
app.get('/widget', async (req, res) => {
  const connection = await mysql.createConnection(config);

  const [rows] = await connection.execute('SELECT * FROM widget');

  await connection.end();

  res.json(rows);
});

app.listen(1984, () => {
  console.log('Up and up');
});