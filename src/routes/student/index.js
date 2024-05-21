import { Router } from "express";
import studentController from "../../controller/student/index.js"

const studentRouter = Router() 
//getdata
studentRouter.get("/student",studentController.getAll)

//post
studentRouter.post("/student",studentController.create)

//update data
studentRouter.put("/student/:id",studentController.update)

//delete data
studentRouter.delete("/student/:id",studentController.delete)


export default studentRouter;