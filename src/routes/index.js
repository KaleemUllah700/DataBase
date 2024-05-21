import studentRouter from "./student/index.js"
import teacherRouter from "./teacher/index.js"
import marksRouter from "./marks/index.js"
import SalesRouter from "./sales/index.js"
import ProductRouter from "./products/index.js"


const allRoutes = [
    studentRouter,
    teacherRouter,
    marksRouter,
    SalesRouter,
    ProductRouter
]

export default allRoutes