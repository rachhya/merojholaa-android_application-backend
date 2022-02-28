const express = require("express");
const { getData } = require("../controllers/adminData");
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/productController");
const { authenticated, authorized } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/allProducts").get(getProducts);
router.route("/product/:id").get(getSingleProduct);

router.route("/admin/data").get(authenticated, authorized("admin"), getData);
router
  .route("/admin/product/new")
  .post(authenticated, authorized("admin"), createProduct);
router
  .route("/admin/product/:id")
  .put(authenticated, authorized("admin"), updateProduct)
  .delete(authenticated, authorized("admin"), deleteProduct);

module.exports = router;
