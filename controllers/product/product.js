const knex = require("../../config/db");

const getProduct = async (req, res) => {
  const year = req.query?.year;
  const from = `${year}-01-01`;
  const to = `${year}-12-31`;
  try {
    let product;
    if (year) {
      product = await knex
        .select()
        .table("expenses")
        .whereBetween("createdAt", [from, to]);
    } else {
      product = await knex.select().table("expenses");
    }
    return res.status(200).send(product);
  } catch (error) {
    return res.status(404).send("Something Wrong");
  }
};

const createProduct = async (req, res) => {
  const payload = req.body;
  try {
    await knex("expenses").insert({ ...payload });
    return res.status(200).send("Created SuccesFully");
  } catch (error) {
    return res.status(404).send("Something Wrong");
  }
};

module.exports = {
  getProduct,
  createProduct,
};
