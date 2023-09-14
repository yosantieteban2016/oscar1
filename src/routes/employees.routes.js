import { Router } from "express";
import { getEmployees , createEmployees , updateEmployees , deleteEmployees} from "../controllers/employees.controller.js";

const routes = Router()

routes.get( '/employees', getEmployees )

routes.post( '/employees', createEmployees)

routes.patch( '/employees/:id', updateEmployees)

routes.delete( '/employees/:id', deleteEmployees)

export default routes
