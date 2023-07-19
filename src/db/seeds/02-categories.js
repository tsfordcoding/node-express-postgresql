/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const categories = require("../fixtures/categories");

exports.seed = async function(knex) {
  await knex.raw("TRUNCATE TABLE categories RESTART IDENTITY CASCADE");
  await knex("categories").insert(categories);
};
