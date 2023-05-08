function cutPizzaSlices(slices){
    return function(people){
        return "Each person gets " + (slices/people).toFixed(2) + " slices of pizza."
    }
}

let sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
console.log(sharePizza(3));