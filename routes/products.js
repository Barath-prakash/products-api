const router = require('express').Router();
const controller = require('../controllers/products');

router.get('/products', (req, res) => {
  console.log("innnnnnn")
  const res = controller.getAllProducts();
  console.log("innnnn3333", res)
  //console.log(res);
  res.send({ status: 200, data: res });
})

router.post('/products', (req, res) => {
  const res = controller.createProduct(req.body);
  // console.log(res);
  res.send({ status: 201, data: res })
})

module.exports = router;
