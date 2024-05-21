import TeacherModel from "../../model/teacher/index.js";

  const teacherController = {
    getAll: async(req, res) => {
      try {
        const teachers = await TeacherModel.findAll({
          // where:{
          //   firstName:"Ali"
          // },
          // order:[['id','DESC']],
          // limit:2
        })

        res.json({
          data: teachers
        });
      } catch (error) {
        res.status(500).json({ message: "Internal server error",error });
      }
    },

    getSingle:async(req, res)=>{
      try{
      const teacher = await TeacherModel.findOne({
        where:{
          firstName:"malik"
        },
        order:[["id","DESC"]],
        limit:2
      })
      res.json({
        data: teacher,
      });
    }catch (error) {
      res.status(500).json({ message: "Internal server error",error });
    }
  },

    create: async (req, res) => {
      try {
        const payload = req.body;
        const teacher = await TeacherModel.create({
          firstName:payload.firstName,
          lastName:payload.lastName
        })
        res.status(200).json({ message: "teacher created", teacher});
      } catch (error) {
        res.status(500).json({ message: "Internal server error",error });
      }
    },

    update: async(req, res) => {
      try {
        const { id } = req.params;
        const payload = req.body;
        const teacher = await TeacherModel.findByPk(id);
        if(!teacher){
          return res.status(404).json({message:"teacher not found"})
        }

        const foundTeacher= await teacher.update({
          firstName:payload.firstName,
          lastName:payload.lastName
        })
      res.status(200).json({ message: "Teacher Updated", foundTeacher });
     } catch (error) {
        res.status(500).json({ message: "Internal server error",error });
      }
    },

    delete:async(req, res) => {
      try {
        const { id } = req.params;
        const teacher = await TeacherModel.findByPk(id)
          if (!teacher) {
            return res.status(404).json({ message: "Teacher not found", teacher });
          }
     
        const foundTeacher = await teacher.destroy()
      res.status(200).json({ message: "Teacher Deleted", foundTeacher });
     } catch (error) {
        res.status(500).json({ message: "Internal server error",error });
      }
    },

  };
  
  export default teacherController;
  