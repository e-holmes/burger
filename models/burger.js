// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burgers",
    [ "burger_name", "devoured"],
    [name, false],
    cb);
  },
  update: function(id, cb) {
    console.log("Error Here!!!!!!!");
    var condition = "id=" +id;
    orm.update("burgers", {devoured: true}, condition, cb);
    }
  };

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
