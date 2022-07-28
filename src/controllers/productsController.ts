import Products from "../models/productsModel";

const productsController = {
  getProducts: async (req, res) => {
    try {
      const products = await Products.find();
      return res.status(200).json(products);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);

      if (!product) 
        return res.status(404).json({ message: "This product is not available." });
      
      return res.status(200).json(product);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  addProduct: async (req, res) => {
    try {
      const { title, price, description, category, image } = req.body;
      const newProduct = new Products({ title, price, description, category, image })
      await newProduct.save();

      return res.status(200).json(newProduct);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { title, price, description, category, image } = req.body;
      
      const product = await Products.findByIdAndUpdate(req.params.id, {
        title, price, description, category, image
      }, { new: true })

      if (!product) 
        return res.status(404).json({ message: "This product is not available." });
      

      return res.status(200).json(product);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      
      const product = await Products.findByIdAndDelete(req.params.id)

      if (!product) 
        return res.status(404).json({ message: "This product is not available." });
      

      return res.status(200).json({msg: "Product deleted successfully."});
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};

export default productsController;
