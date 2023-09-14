console.log("server runing on port 3000");
import Express from "express";
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = Express();
app.listen(3000);

app.use(Express.json())

app.use(indexRoutes)
app.use(employeesRoutes)

