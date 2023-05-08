function createUser(name, ssn){
    let pii = {
        name: name,
        ssn: ssn
    };
    return {
        getName: function(){
            return pii.name;
        }
    };
}

let user = createUser("Sebastian Bonilla", "123-45-6789");
console.log(user.getName());
console.log(user.ssn);