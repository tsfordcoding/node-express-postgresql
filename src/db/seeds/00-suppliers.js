/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const suppliers = require("../fixtures/suppliers");

exports.seed = async function(knex) {
  await knex.raw("TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE");
  await knex("suppliers").insert(suppliers);
};
