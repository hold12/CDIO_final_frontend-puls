
function getUsers(jsonobject) {
  $("#table-column").append("<tr>");
  $("#table-column").append("<td>UserID</td>");
  $("#table-column").append("<td>firstname</td>");
  $("#table-column").append("<td>lastname</td>");
  $("#table-column").append("<td>Initials</td>");
  $("#table-column").append("<td>Password</td>");
  $("#table-column").append("<td>Roles</td>");
  $("#table-column").append("</tr>");
      for (i = 0; i < Object.keys(jsonobject).length; i++) {
        console.log(jsonobject[0]);
        $("#table-column").append("<tr class=\"active\">");
        $("#table-column").append("<td>"+jsonobject[i].userId+"</td");
        $("#table-column").append("<td>"+jsonobject[i].firstname+"</td");
        $("#table-column").append("<td>"+jsonobject[i].lastname+"</td");
        $("#table-column").append("<td>"+jsonobject[i].initials+"</td");
        $("#table-column").append("<td>"+jsonobject[i].password+"</td");
        $("#table-column").append("<td>" + jsonobject[i].roles.role_name + "</td>");
        $("#table-column").append("</tr>");

      }
};

function getIngredient(jsonobject) {
  $("#table-column").append("<tr>");
  $("#table-column").append("<td>ingredientID</td>");
  $("#table-column").append("<td>Ingredient Name</td>");
  $("#table-column").append("<td>Supplier</td>");
  $("#table-column").append("</tr>");
      for (i = 0; i < Object.keys(jsonobject).length; i++) {
        console.log(jsonobject[0]);
        $("#table-column").append("<tr class=\"active\">");
        $("#table-column").append("<td>"+jsonobject[i].ingredient_id+"</td");
        $("#table-column").append("<td>"+jsonobject[i].ingredient_name+"</td");
        $("#table-column").append("<td>"+jsonobject[i].supplier+"</td");
        $("#table-column").append("</tr>");

      }
};

function getIngredientBatch(jsonobject) {
  $("#table-column").append("<tr>");
  $("#table-column").append("<td>ingredientBatchID</td>");
  $("#table-column").append("<td>Ingredient Batch Name</td>");
  $("#table-column").append("<td>Amount</td>");
  $("#table-column").append("</tr>");
      for (i = 0; i < Object.keys(jsonobject).length; i++) {
        console.log(jsonobject[0]);
        $("#table-column").append("<tr class=\"active\">");
        $("#table-column").append("<td>"+jsonobject[i].ingredientbatch_id+"</td");
        $("#table-column").append("<td>"+jsonobject[i].ingredientbatch_name+"</td");
        $("#table-column").append("<td>"+jsonobject[i].amount+"</td");
        $("#table-column").append("</tr>");

      }
};


function getProductBatch(jsonobject) {
  $("#table-column").append("<tr>");
  $("#table-column").append("<td>ProductBatchID</td>");
  $("#table-column").append("<td>Created Time</td>");
  $("#table-column").append("<td>Finished Time</td>");
  $("#table-column").append("<td>Status</td>");
  $("#table-column").append("<td>RecipeID</td>");
  $("#table-column").append("<td>UserID</td>");
  $("#table-column").append("</tr>");
      for (i = 0; i < Object.keys(jsonobject).length; i++) {
        console.log(jsonobject[0]);
        $("#table-column").append("<tr class=\"active\">");
        $("#table-column").append("<td>"+jsonobject[i].productbatch_id+"</td");
        $("#table-column").append("<td>"+jsonobject[i].created_time+"</td");
        $("#table-column").append("<td>"+jsonobject[i].finished_time+"</td");
        $("#table-column").append("<td>"+jsonobject[i].status+"</td");
        $("#table-column").append("<td>"+jsonobject[i].recipe_id+"</td");
        $("#table-column").append("<td>"+jsonobject[i].user_id+"</td");
        $("#table-column").append("</tr>");

      }
};

function getRecipe(jsonobject) {
  $("#table-column").append("<tr>");
  $("#table-column").append("<td>RecipeID</td>");
  $("#table-column").append("<td>Recipe Name</td>");
  $("#table-column").append("</tr>");
      for (i = 0; i < Object.keys(jsonobject).length; i++) {
        console.log(jsonobject[0]);
        $("#table-column").append("<tr class=\"active\">");
        $("#table-column").append("<td>"+jsonobject[i].recipe_id+"</td");
        $("#table-column").append("<td>"+jsonobject[i].recipe_name+"</td");
        $("#table-column").append("</tr>");

      }
};
