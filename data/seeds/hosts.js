
exports.seed = async function(knex) {
  await knex("hosts").truncate()

  await knex("hosts").insert([
    {
      name: "Steve Goodrick", birthday: "02/28/1992", aboutMe: "I like to eat eat eat oples and bononos" 
    }
  ])
};
