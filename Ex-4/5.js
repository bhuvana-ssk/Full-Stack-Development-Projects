var user = {
    first_name: "John",
    last_name: "Mathew",
    age: "21",
    department: "Data Science"
    }
console.log(user);
console.log("No. of Attributes: "+Object.keys(user).length);
delete user.last_name;
console.log("--------------------------")
console.log("After Deletion");
console.log(user);
console.log("No. of Attributes: "+Object.keys(user).length);
console.log("--------------------------")
console.log("After Addition");
user.dob ="09-09-2002";
console.log(user);
console.log("--------------------------")
console.log("After Updation");
user.first_name ="John M";
console.log(user);