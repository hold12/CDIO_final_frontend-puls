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
      "permissions": ["ingredientbatch.create", "ingredientbatch.read", "productbatch.create", "productbatch.read"]
    }, {
      "role_id": 0,
      "role_name": "labtech",
      "permissions": ["weighing"]
    }]
  };
  //var i = 0;
  //var j = 0;
  // Object.keys(obj.roles).length
  // Object.keys(obj.roles.permissions).length;
  var arr = [];
  for (i = 0; i < Object.keys(obj.roles).length ; i++) {
    //console.log("i = " + i);
    //console.log("length = " + Object.keys(obj.roles[0].permissions).length );
    for (j = 0; j < Object.keys(obj.roles[i].permissions).length; j++) {
      //console.log("j = " + j);
      //console.log(obj.roles[i].permissions[j]);
      arr.push(obj.roles[i].permissions[j]);
    }
  }
  result(arr);
  // var x;
  // for (x in arr.length){
  //   console.log("bum " + x);
  //  $("#side-nav-bar").html(arr[x]);
  // }

}
