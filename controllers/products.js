const Products = require('../models/products');

const getAllProducts = () => {
  try {
    return await Products.findAll()
  } catch(err) {
    return err;
  }
}

const createProduct = (data) => {
  try {
    return await Products.create(data)
  } catch(err) {
    return err;
  }
}

const getOneProduct = (id) => {
  try {
    return await Products.findByPk(id);
  } catch(err) {
    return err;
  }
}

const updateProduct = (data) => {
  try {
    if(data.method === 'PATCH') {
      return await Products.upsert(data)
    } else {
      return await Products.update(data)
    }
  } catch(err) {
    return err;
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  getOneProduct
};