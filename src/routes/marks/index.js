import { Router } from "express";
import marksController from "../../controller/marks/index.js"

const marksRouter = Router() 
//getdata
marksRouter.get("/marks",marksController.getAll)

//post
marksRouter.post("/marks",marksController.create)

//update data
marksRouter.put("/marks/:id",marksController.update)

//delete data
marksRouter.delete("/marks/:id",marksController.delete)


export default marksRouter;