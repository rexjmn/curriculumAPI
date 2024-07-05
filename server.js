require('dotenv').config({ path: './config.env' });
const express = require('express');
const cors = require('cors');
const connectDB = require('./connect');
const router = require('./routers/contactRouter');
const compRouter = require('./routers/competanceRoute');
const langueRouter = require('./routers/langue');
const loisirRouter = require('./routers/loisirRouter');
const experianceRouter = require('./routers/experianceRouter');
const formationRouter = require('./routers/formationRouter');

const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use('', router);
app.use('', compRouter);
app.use('', langueRouter);
app.use('',loisirRouter);
app.use('',experianceRouter);
app.use('',formationRouter);
connectDB();
app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));

