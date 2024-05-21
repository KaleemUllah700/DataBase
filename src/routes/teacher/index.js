import { Router } from "express";
import teacherController from "../../controller/teacher/index.js"

const teacherRouter = Router() 
//getdata
teacherRouter.get("/teacher",teacherController.getAll)

//post
teacherRouter.post("/teacher",teacherController.create)

//update data
teacherRouter.put("/teacher/:id",teacherController.update)

//delete data
teacherRouter.delete("/teacher/:id",teacherController.delete)


export default teacherRouter;