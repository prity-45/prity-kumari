//object are super important for grouping the data and functionalities so we can do a lot of thing in object of js
//object are contructed in key and value pair.
//let my cars={
//BMW:"series7"
//Audi:"Q7",
//}
 const jsuser ={
     name : "prity",
     email : "pritykumari@gmail.com",
     fullname:"prity singh",
     age :"22",
     "fullname":"prity singh",
     location : "odisha",
     isLogging:"false",
     lastLoggedinDays : ["monday","wednesday","friday"]
 }
//  console.log(jsuser.name);
//  console.log(jsuser["email"]);
//  console.log(jsuser["fullname"])
//  jsuser.email="webbocket@gmail.com";
//  Object.freeze(jsuser);
//  jsuser.email="giet@gmail.com";
//  console.log(jsuser.email);


jsuser.greeting=function(){

    console.log("Hello future elon musk");
}
console.log(jsuser.greeting());

jsuser.greetingTwo = function(){
    console.log(`hello user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

const tinderuser ={}
tinderuser.id ="1234",
tinderuser.email ="prity@gmail.com",
tinderuser.name ="prity",
console.log(tinderuser)

const regularuser={
    email:"prity@gmail.com",
    fullname:{
        userFullname:{
            firstName:"prity",
            lastName:"kumari"
        }
    }
}
console.log(regularuser.fullname.userFullname)


