var addressBook = [
    {
        firstname: "Brayden",
        lastname: "Robbins",
        phone: "4051238532",
        address: "123 bakers field"
    },
    {
        firstname: "Trae",
        lastname: "Robbins",
        phone: "9128374422",
        address: "4622 Main St"
    },
    {
        firstname: "Bob",
        lastname: "Rockers",
        phone: "3243458723",
        address: "8732 Weenie Hut Way" 
    }
];

function printFirstNames(add) {
    for (var i=0; i<add.length;i++){
        console.log(add[i].firstname);
    }
}

function printContact(con) {
    for (var i=0; i<con.length;i++){
        console.log(con[i].firstname);
        console.log(con[i].lastname);
        console.log(con[i].phone);
        console.log(con[i].address);
    }
}

var printContact2 = function(contact) {
    console.log(contact.firstname);
        console.log(contact.lastname);
        console.log(contact.phone);
        console.log(contact.address);
}
//forEach(addressBook, printContact2);

var ourFunction = function(thing){
    for(var i=0; i<thing.length;i++){
        console.log(thing.lastname);
    };
}

function ourConsole(){
    return function(message){
        console.log("This is our message.");
    }
}

var msg = ourConsole();
//msg();

//printContact(addressBook);
//printFirstNames(addressBook);


function forEach(arr1, func1) {
    for(var i=0; i<arr1.length; i++){
        func1(arr1[i]);
    }
}

function printName(x){
    console.log(x.firstname, x.lastname);
}

function printAddr(x){
    console.log(x.address);
}

forEach(addressBook,printAddr);
forEach(addressBook,printName);
//forEach(addressBook,function(x){console.log(x.phone)});

var printHello = function(){
    console.log("Hello Everyone!");

}

//setTimeout(printHello, 5000);
