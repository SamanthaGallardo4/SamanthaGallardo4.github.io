const mysql = require('mysql2/promise');

const config = {
  host: 'mysql-1b336be3-tec-e448.a.aivencloud.com',
  port: 13269,
  user: 'avnadmin',
  password: 'PASSWORD',
  database: 'defaultdb',
};

async function main() {
  let connection;
  try {
    connection = await mysql.createConnection(config);
    console.log('Conectado a la base de datos');

    await connection.execute(`
      CREATE TABLE IF NOT EXISTS widget (
        id INT PRIMARY KEY AUTO_INCREMENT,
        accion VARCHAR(255) NOT NULL
      )
    `);
    console.log('Tabla widget ');

    await connection.execute(`
      INSERT INTO widget (accion)
      SELECT 'abrir widget'
      WHERE NOT EXISTS (
        SELECT 1 FROM widget WHERE accion = 'abrir widget'
      )
    `);

    console.log('Acción agregada');

    const [rows] = await connection.execute('SELECT * FROM widget');
    console.log('Lista de acciones del widget:');
    console.table(rows);

  } catch (error) {
    console.log('Error:', error.message);
  } finally {
    if (connection) {
      await connection.end();
      console.log('Conexión cerrada');
    }
  }
}

main();