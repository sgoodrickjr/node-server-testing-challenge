const db = require("../data/config")

function find() {
    return db("bashes")
}

function findById(id) {
    return db("bashes").where({ id }).first()
}

async function create(data) {
    const [id] = await db("bashes").insert(data)
    return findById(id)
}

async function update(id, data) {
    await db("bashes").where({ id }).update(data)
    return findById(id)
}

function remove(id) {
    return db("bashes").where({ id }).del()
}

module.exports = {
    find,
    findById,
    create,
    update,
    remove,
}