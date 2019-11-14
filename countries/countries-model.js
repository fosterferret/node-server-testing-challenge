const db = require("../data/db-config");

async function add(country) {
  return db("countries")
    .insert(country, "id")
    .then(ids =>
      db("countries")
        .where({ id: ids[0] })
        .first()
    );
}

async function remove(id) {
  return db("countries").del(id);
}

function getAll() {
  return db("countries");
}

module.exports = {
  add,
  remove,
  getAll
};
