const express = require('express');
const routes  = require('./routes');
const { postgres } = require('./connections');
const { middlewareCors } = require('./middlewares');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(middlewareCors);
app.use('/api/v1',routes);

postgres.authenticate()
  .then(() => console.log('Successful connection'))
  .catch((err) => console.log('Error connection: ', err))

app.listen(PORT, () => console.log(`Server on at http://localhsost:${PORT}/`));