import express from 'express';
import routes from './routes';

import './initialScript';

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log('Server is running!!'));