
exports.up = async function(knex) {
  await knex.schema.createTable("bashes",
  (table) => {
      table.increments()
      table.text("title").notNullable()
      table.text("description").notNullable()
      table.date("date").notNullable()
      table.time("time").notNullable()
      table.decimal("cover")
      table.text("address").notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("bashes")
};
