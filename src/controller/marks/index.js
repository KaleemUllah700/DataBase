import MarksModel from "../../model/marks/index.js";

  const MarksController = {
    
    getAll: async(req, res) => {
      try {
        const Marks = await MarksModel.findAll({
          where:{
            MERN:"60"
          },
          limit:5
        })
        res.json({
          data: Marks
        });
      } catch (error) {
        res.status(500).json({ message: "Internal server error",error });
      }
    },

    getSingle:async(req, res)=>{
      try{
      const marks = await MarksModel.findOne({
        where:{
          MERN:"60"
        },
        order:[["id","DESC"]],
        limit:2
      })
      res.json({
        data: marks,
      });
    }catch (error) {
      res.status(500).json({ message: "Internal server error",error });
    }
  },

    create: async (req, res) => {
      try {
        const payload = req.body;
        const marks = await MarksModel.create({
          Maths:payload.Maths,
          Urdu:payload.Urdu,
          MERN:payload.MERN,
          DS:payload.DS
        })
        res.status(200).json({ message: "marks created", marks});
      } catch (error) {
        res.status(500).json({ message: "Internal server error",error });
      }
    },

    update: async(req, res) => {
      try {
        const { id } = req.params;
        const payload = req.body;
        const marks = await MarksModel.findByPk(id);
        if(!marks){
          return res.status(404).json({message:"marks not found"})
        }

        const foundMarks= await marks.update({
          Maths:payload.Maths,
          Urdu:payload.Urdu,
          MERN:payload.MERN,
          DS:payload.DS
        })
      res.status(200).json({ message: "Marks Updated", foundMarks });
     } catch (error) {
        res.status(500).json({ message: "Internal server error",error });
      }
    },

    delete:async(req, res) => {
      try {
        const { id } = req.params;
        const marks = await MarksModel.findByPk(id)
          if (!marks) {
            return res.status(404).json({ message: "marks not found" });
          }
     
        const foundMarks = await marks.destroy()
      res.status(200).json({ message: "Marks Deleted", foundMarks });
     } catch (error) {
        res.status(500).json({ message: "Internal server error",error });
      }
    },

  }
  
  export default MarksController;
  