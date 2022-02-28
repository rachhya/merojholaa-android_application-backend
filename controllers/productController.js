const { Product } = require("../models");
const ErrorHandler = require("../utils/errorHandler");
const asyncHandler = require("../utils/asyncHandler");
const ApiFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary").v2;

// @desc Get all products
// @route api/v1/products
// @access PUBLIC
exports.getProducts = asyncHandler(async (req, res, next) => {
  const resultsPerPage = req.query?.resultsPerPage || 5;
  const totalProducts = await Product.countDocuments();
  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultsPerPage);
  const allProducts = await apiFeatures.query.sort({ createdAt: -1 });
  var totalPages = totalProducts / resultsPerPage;
  var rem = totalPages % 1;
  if (rem !== 0) {
    totalPages = totalPages + 1 - rem;
  }
  res.status(200).json({
    success: true,
    allProducts,
    totalPages,
    totalProducts,
  });
});

// @desc Create new product
// @route api/v1/products/new
// @access ADMIN
exports.createProduct = asyncHandler(async (req, res, next) => {
  const cloud = await cloudinary.uploader.upload(req.body.image, {
    folder: "products",
    width: 400,
    crop: "scale",
  });
  req.body.user = req.user.id;
  const product = await Product.create({
    images: [
      {
        public_id: cloud.public_id,
        url: cloud.secure_url,
      },
    ],
    ...req.body,
  });

  res.status(201).json({
    success: true,
    product,
  });
});

// @desc Get single product
// @route api/v1/products/:id
// @access PUBLIC
exports.getSingleProduct = asyncHandler(async (req, res, next) => {
  const singleProduct = await Product.findById(req.params.id);
  if (!singleProduct) {
    return next(new ErrorHandler("Product not found.", 404));
  }

  res.status(200).json({
    success: true,
    singleProduct,
  });
});

// @desc Update product
// @route api/v1/products/:id
// @access ADMIN
exports.updateProduct = asyncHandler(async (req, res, next) => {
  const cloud = await cloudinary.uploader.upload(req.body.image, {
    folder: "products",
    width: 400,
    crop: "scale",
  });
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  }

  product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      images: [
        {
          public_id: cloud.public_id,
          url: cloud.secure_url,
        },
      ],
      ...req.body,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    product,
  });
});

// @desc Delete product
// @route api/v1/products/:id
// @access ADMIN
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product deleted successfully.",
  });
});
