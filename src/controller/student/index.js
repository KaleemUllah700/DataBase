import StudentModel from "../../model/student/index.js";

  const StudentController = {
    
    getAll: async(req, res) => {
      try {
        const students = await StudentModel.findAll({
          // where:{
          //  firstName:"malik"
          // },
          // limit:2
        })
        res.json({
          data: students,
        });
      } catch (error) {
        res.status(500).json({ message: "Internal server error",error });
      }
    },

    getSingle:async(req, res)=>{
      try{
      const students = await StudentModel.findOne({
        where:{
          firstName:"malik"
        },
        order:[["id","DESC"]],
        limit:2
      })
      res.json({
        data: students,
      });
    }catch (error) {
      res.status(500).json({ message: "Internal server error",error });
    }
  },

    create: async (req, res) => {
      try {
        const payload = req.body;
        const student = await StudentModel.create({
          firstName:payload.firstName,
          lastName:payload.lastName,
          Email:payload.Email,
          Address:payload.Address
        })
        res.status(200).json({ message: "Student created", student});
      } catch (error) {
        res.status(500).json({ message: "Internal server error",error });
      }
    },

    update: async(req, res) => {
      try {
        const { id } = req.params;
        const payload = req.body;
        const student = await StudentModel.findByPk(id);
        if(!student){
          return res.status(404).json({message:"Student not found"})
        }

        const foundStudent= await student.update({
          firstName:payload.firstName,
          lastName:payload.lastName,
          Email:payload.Email,
          Address:payload.Address
        })
      res.status(200).json({ message: "Student Updated", foundStudent });
     } catch (error) {
        res.status(500).json({ message: "Internal server error",error });
      }
    },

    delete:async(req, res) => {
      try {
        const { id } = req.params;
        const student = await StudentModel.findByPk(id)
          if (!student) {
            return res.status(404).json({ message: "No student with this name" });
          }
     
        const students = await student.destroy()
      res.status(200).json({ message: "Student Deleted", students });
     } catch (error) {
        res.status(500).json({ message: "Internal server error",error });
      }
    },
  };
  
  export default StudentController;
  