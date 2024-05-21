import SalesModel from '../../model/sales/index.js';
import SaleProductModel from '../../model/sales/salesproduct.js';
import ProductsModel from '../../model/products/index.js';

const SalesController = {
  getAll: async (req, res) => {
    try {
      const sales = await SalesModel.findAll({
        // order: [["createdAt", "DESC"]],
        // limit: 5,
      });

      res.json({
        data: sales,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;

      const sale = await SalesModel.findByPk(id, {
        // include: [SaleProductModel, ProductsModel],
        include: [
          {
            module: salesProduct,
            include:[ProductsModel]
          }
        ]
      });

      if (!sale) {
        return res.status(404).json({ message: "No sale with this id" });
      }
      res.status(200).json({ data: sale });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error", error });
    }
  },

  create: async (req, res) => {
    try {
      const payload = req.body;
      console.log("payload", payload);
      let totalAmount = 0;
      payload.salesProducts.forEach((ele) => {
        totalAmount = totalAmount + ele.rate * ele.productQuantity;
      });
      const sale = new SalesModel();
      sale.totalAmount = totalAmount;
      await sale.save();
      console.log(payload.totalAmount);
      const salesProduct = [];

      for (let index = 0; index < payload.salesProducts.length; index++) {
        const ele = payload.salesProducts[index];

        const product = await ProductsModel.findByPk(ele.ProductId);
        if (ele.productQuantity > product.stock) {
          return res.status(400).json({
            message: "The product " + product.name + " has in-sufficient stock",
          });
        }

        salesProduct.push({
          ...ele,
          SaleId: sale.id,
        });
      }

      console.log("sales products", salesProduct);
      await SaleProductModel.bulkCreate(salesProduct);

      res.status(200).json({ message: "sale created", sale, salesProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  },

}

export default SalesController;