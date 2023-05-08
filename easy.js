function exercise(type){
    return function(){
        return "Today's exercise: " + type;
    }
}

let run = exercise('running');
console.log(run());

let swim = exercise('swimming');
console.log(swim());