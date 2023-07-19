/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const productsCategories = require("../fixtures/productsCategories");

exports.seed = async function(knex) {
  await knex.raw("TRUNCATE TABLE products_categories RESTART IDENTITY CASCADE");
  await knex("products_categories").insert(productsCategories);
};
