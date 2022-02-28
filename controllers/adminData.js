const { User, Product } = require("../models");
const asyncHandler = require("../utils/asyncHandler");

exports.getData = asyncHandler(async (req, res, next) => {
  const totalProducts = await Product.countDocuments();
  const totalUsers = await User.countDocuments();
  res.status(200).json({
    success: true,
    totalUsers,
    totalProducts,
  });
});
