import StudentModel from "../model/student/index.js";
import TeacherModel from "../model/teacher/index.js";
import MarksModel from "../model/marks/index.js";
import SalesModel from "../model/sales/index.js";
import SalesProduct from "../model/sales/salesproduct.js";
import ProductsModel from "../model/products/index.js";

const syncDB = async()=>{
    await StudentModel.sync({ alter:true,force: false });
    await TeacherModel.sync({alter:true, force:false});
    await MarksModel.sync({alter:true, force:false});
    await ProductsModel.sync({alter:true, force: false})
    await SalesModel.sync({altert:true, force:false});
    await SalesProduct.sync({alter:true, force: false})
}

export default syncDB;