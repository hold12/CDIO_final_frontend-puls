var userjson = [{
  "userId": 1,
  "firstname": "admin",
  "lastname": null,
  "initials": "adm",
  "password": "root",
  "active": true,
  "roles": [{
    "role_id": 0,
    "role_name": "administrator",
    "permissions": ["user.create", "user.update", "user.delete", "user.read"]
  }]
}, {
  "userId": 2,
  "firstname": "Antonella",
  "lastname": "B",
  "initials": "AB",
  "password": "atoJ21v",
  "active": true,
  "roles": [{
    "role_id": 0,
    "role_name": "pharmacist",
    "permissions": ["ingredient.create", "ingredient.read", "recipe.create", "recipe.read"]
  }]
}, {
  "userId": 3,
  "firstname": "Luigi",
  "lastname": "C",
  "initials": "LC",
  "password": "jEfm5aQ",
  "active": false,
  "roles": [{
    "role_id": 0,
    "role_name": "foreman",
    "permissions": ["ingredientbatch.create", "ingredientbatch.read", "productbatch.create", "productbatch.read"]
  }]
}, {
  "userId": 4,
  "firstname": "Bob",
  "lastname": "D",
  "initials": "BD",
  "password": "h3jE7Ol",
  "active": true,
  "roles": [{
    "role_id": 0,
    "role_name": "foreman",
    "permissions": ["ingredientbatch.create", "ingredientbatch.read", "productbatch.create", "productbatch.read"]
  }, {
    "role_id": 0,
    "role_name": "labtech",
    "permissions": ["weighing"]
  }]
}]


$(function() {
  getPermissions(function(output) {
    for (i = 0; i < output.length; i++) {
      // if (output[i] !== "weighing")
      //   $("#side-nav-bar").append("<a href='#' class='mdl-navigation__link'>" + output[i] + "</a>")
      switch (output[i]) {
        case "productbatch.read":
          $("#side-nav-bar").append("<a id='product-batch-admin-viewBtn' class='mdl-navigation__link'>Product Batch Administration</a>");
          break;
        case "ingredientbatch.read":
          $("#side-nav-bar").append("<a href='#' class='mdl-navigation__link'>Ingredient Batch Administration</a>");
          break;
        case "ingredient.read":
          $("#side-nav-bar").append("<a href='#' class='mdl-navigation__link'>Ingredient Administration</a>");
          break;
        case "ingredientbatch.read":
          $("#side-nav-bar").append("<a href='#' class='mdl-navigation__link'>ingredient Batch Administration</a>");
          break;
        case "user.read":
          $("#side-nav-bar").append("<a id='user-admin-viewBtn' class='mdl-navigation__link'>User Administration</a>");
          getUsers(userjson);
          break;
        case "recipe.read":
          $("#side-nav-bar").append("<a href='#' class='mdl-navigation__link'>Recipe Administration</a>");
          break;
      }
    }
  });;
});

$("#user-admin-viewBtn").click(function() {
  getUsers(userjson);
});
