
function getUsers(jsonobject) {
    for (i = 0; i < Object.keys(jsonobject).length; i++) {
        $("#table-row").append("<tr>");
        console.log(jsonobject[0]);
        $("#table-column").append("<td>" + jsonobject[i].userId + "</td>");
        $("#table-column").append("<td>" + jsonobject[i].firstname + "</td>");
        $("#table-column").append("<td>" + jsonobject[i].lastname + "</td>");
        $("#table-column").append("<td>" + jsonobject[i].initials + "</td>");
        $("#table-column").append("<td>" + jsonobject[i].password + "</td>");
        // $("#table-column").append("<td>" + jsonobject[i].roles + "</td>");
        $("#table-row").append("</tr>");
      }
};
