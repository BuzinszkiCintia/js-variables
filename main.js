let products = [
    {
        category: "konyhai",
        name: "turmix2000", 
        price:15000, 
        stock:4, 
        attachements:["fej","motor"]
    },
    {
        category: "fürdőszobai",
        name: "sampon", 
        price:1500, 
        stock:9, 
        attachements:["Head","Shoulders"]  
    },
    {
        category: "fürdőszobai",
        name: "tusfürdő", 
        price:2000, 
        stock:15, 
        attachements:["kókusz","szagtalanító"]
    }
];//{object}

let customer = "Ádám";

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
function inventory() {
    let stock = products[2].stock;
    let price = products[2].price;
    let value = stock * price;
    let div = document.createElement("div");//ide valódi html elementeket illik beírni
    div.innerText = products[2].name + " : " + value;
    document.body.append(div); // hozzá kell adni a body-hoz a divet, azaz kirakod a DOM ba

    stock = products[0].stock;
    price = products[0]. price;
    value = stock * price;
    div = document.createElement("div");
    div.innerText = products[0].name + " : " + value;
    document.body.append(div);

    stock = products[1].stock;
    price = products[1]. price;
    value = stock * price;
    div = document.createElement("div");
    div.innerText = products[1].name + " : " + value;
    document.body.append(div);

    stock = products[0].stock;
    let available = stock > 5;// ennek true vagy false lesz az értéke
    div = document.createElement("div");
    if (available){ // azért nem kell külön feltétel "available === true" mert az első ágban mindig a true-ba fut be
        div.innerText = products[0].name + ": " + "Elérhető";
    }else{
        div.innerText = products[0].name + ": " + "Nem Elérhető";
    }
    document.body.append(div);

    let special = customer === "Ádám"; //Nem egyenlő: !== 
    if (!available && special){
        div.innerText = div.innerText + "(De neki mégis)";
    }

}

window.addEventListener("load", inventory);