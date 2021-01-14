import express from 'express';
import routes from './routes';

import '../../typeorm';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('📚 Server started on port 3333');
});
