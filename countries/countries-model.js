const db = require("../data/db-config");

async function add(city) {
  return db("cities")
    .insert(city, "id")
    .then(ids =>
      db("cities")
        .where({ id: ids[0] })
        .first()
    );
}

async function remove(id) {
  return db("cities").del(id);
}

function getAll() {
  return db("cities");
}

module.exports = {
  add,
  remove,
  getAll
};
