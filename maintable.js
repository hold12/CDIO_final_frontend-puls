
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
      // $("#table-end").append("</table>");


};
