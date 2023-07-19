const productsService = require("./products.service"); 
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const productExists = async (req, res, next) => {
    const product = await productsService.read(req.params.productId);

    if(product) {
      res.locals.product = product;
      return next();
    } 

    return next({
      status: 404,
      message: `Product cannot be found.`,
  });
}

const listTotalWeightByProduct = async (req, res, next) => {
  res.json({ data: await productsService.listTotalWeightByProduct() });
}

const listPriceSummary = async (req, res,next) => {
  res.json({ data: await productsService.listPriceSummary() });
}

const listOutOfStockCount = async (req, res, next) => {
  res.json({ data: await productsService.listOutOfStockCount() });
}

function read(req, res) {
  const { product: data } = res.locals;
  res.json({ data });
}

const list = async (req, res, next) => {
     const data = await productsService.list();
     res.send({ data });
}

module.exports = {
  read: [asyncErrorBoundary(productExists), read],
  list: asyncErrorBoundary(list),
  listOutOfStockCount: asyncErrorBoundary(listOutOfStockCount),
  listPriceSummary: asyncErrorBoundary(listPriceSummary),
  listTotalWeightByProduct: asyncErrorBoundary(listTotalWeightByProduct),
};
