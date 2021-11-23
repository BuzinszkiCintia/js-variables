let products = [
    "sampon", 
    "tusfürdő", 
    {
        category: "konyhai",
        name: "turmix2000", 
        price:15000, 
        inStock:true, 
        attachements:["fej","motor"]
    }
];//{object}

function main() { //ez a belépési function ennek érdemes ugyanazt a nevet adni mint a js neve
    console.log("It works!");
    let product = products[2];
    let answer = window.confirm("Do you want a " + product.name);
    if (answer === false){
        let answer = window.confirm("But it has " + product.attachements.join(","));
        if(answer === true){
            console.log(product);
        }
    }
}




window.addEventListener("load", main);