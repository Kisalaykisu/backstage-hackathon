const { Client } = require('pg');
const client = new Client({
  host: 'postgres', // or the ClusterIP Service name inside K8s
  user: 'backstage',
  password: 'backstage',
  database: 'catalog',
  port: 5432,
});

client
  .connect()
  .then(() => {
    console.log('✅ Connected to PostgreSQL!');
    return client.end();
  })
  .catch(err => {
    console.error('❌ Connection error', err.stack);
  });
