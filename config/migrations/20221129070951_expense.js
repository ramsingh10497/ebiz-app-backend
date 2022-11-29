exports.up = function (knex) {
    return knex.schema.createTable("expenses", (table) => {
      table.increments("id");
      table.string("title").notNullable();
      table.decimal("amount").notNullable();
      table.timestamp("createdAt").defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("expenses");
  };
