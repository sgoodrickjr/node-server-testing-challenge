
exports.seed = async function(knex) {
  
  await knex("bashes").truncate()

  await knex("bashes").insert([
    {title: "Steve's Wild Bash", description: "Always a great time", date: "01/01/2021", time: "19:00", cover: "5.00", address: "200 W 200 S, Salt Lake City, UT 84101"},
    {title: "Steve's Chill Bash", description: "Always a chill time", date: "02/02/2021", time: "16:00", cover: "10.00", address: "300 W 300 S, Salt Lake City, UT 84101"},
    {title: "Joe's Coding Bash", description: "Always a nerdy time", date: "04/04/2021", time: "20:00", cover: "0.00", address: "300 W 300 S, Salt Lake City, UT 84101"}
]);
};
