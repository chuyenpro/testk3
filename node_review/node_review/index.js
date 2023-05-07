import express from 'express'

import { connectToDb, db }  from "./db.js";
import inventoryRouter from './routers/Inventory.js';
import userRouter from './routers/user.js';
const app = express();
connectToDb();


app.use(express.json());
app.use('/api/inventory', inventoryRouter)
app.use('/api/users', userRouter)

app.listen(3000, () => {
  console.log("App is running at 3000");
connectToDb();

});
