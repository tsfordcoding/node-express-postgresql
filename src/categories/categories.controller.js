const categoriesService = require("./categories.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const list = async (req, res, next) => {
    const data = await categoriesService.list();
    res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
