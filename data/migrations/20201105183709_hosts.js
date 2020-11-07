
exports.up = async function(knex) {
    await knex.schema.createTable("hosts", (table) => {
        table.text("name")
        table.date("birthday")
        table.text("aboutMe")
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("hosts")
};
