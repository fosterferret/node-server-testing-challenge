exports.up = function(knex) {
  return knex.schema.createTable("countries", table => {
    table.increments();
    table
      .string("country", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("countries");
};
