import ProductsModel from '../../model/products/index.js';

const ProductController = {
  getAll: async (req, res) => {
    try {
      const products = await ProductsModel.findAll({
        // order: [["createdAt", "DESC"]],
        // limit: 5,
      });

      res.json({
        data: products,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;

      const product = await ProductsModel.findByPk(id);

      if (!product) {
        return res.status(404).json({ message: "No product with this id" });
      }
      res.status(200).json({ data: product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error", error });
    }
  },
  create: async (req, res) => {
    try {
      const payload = req.body;
      const product = new ProductsModel();
      product.productName = payload.productName,
        product.productStock = payload.productStock,
        product.price = payload.price
      await product.save();

      res.status(200).json({ message: "product created", product });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  },

}

export default ProductController;