function getPermissions(result) {

  var final_html = "";
  var obj = {
    "userId": 3,
    "firstname": "Luigi",
    "lastname": "C",
    "initials": "LC",
    "password": "jEfm5aQ",
    "active": true,
    "roles": [{
      "role_id": 0,
      "role_name": "foreman",
      "permissions": ["ingredientbatch.create", "ingredientbatch.read", "productbatch.create", "productbatch.read", "user.read"]
    }, {
      "role_id": 0,
      "role_name": "labtech",
      "permissions": ["weighing"]
    }]
  };
  var arr = [];
  for (i = 0; i < Object.keys(obj.roles).length ; i++) {
    for (j = 0; j < Object.keys(obj.roles[i].permissions).length; j++) {
      arr.push(obj.roles[i].permissions[j]);
    }
  }
  result(arr);
}
