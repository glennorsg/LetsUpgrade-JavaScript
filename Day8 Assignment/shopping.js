var products=[
    {
        id:1,
        img:"product1.jpeg",
        name:"REX Shoes",
        size:10,
        color:"Multicolor",
        price:1200,
        desp:"Multicolor Shoes"
    },
    {
        id:2,
        img:"product2.jpeg",
        name:"Nika Shoes",
        size:12,
        color:"Blue",
        price:800,
        desp:"Blue Sports Shoes"
    },
    {
        id:3,
        img:"product3.jpeg",
        name:"Woodsand Shoes",
        size:9,
        color:"Black",
        price:1000,
        desp:"Office Formal Shoes"
    },
    {
        id:4,
        img:"product4.jpeg",
        name:"Filo Shoes",
        size:8,
        color:"Light Grey",
        price:700,
        desp:"Gray Running Shoes"
    },
    {
        id:5,
        img:"product5.jpeg",
        name:"Skotchers",
        size:11,
        color:"BLack and White",
        price:1300,
        desp:"Black and white Sneakers"
    },
    {
        id:6,
        img:"product6.jpeg",
        name:"Hush Guppies",
        size:10,
        color:"Brown",
        price:2800,
        desp:"Brown formal shoes"
    },
    {
        id:7,
        img:"product7.jpeg",
        name:"VRLVCY",
        size:7,
        color:"Floral",
        price:2000,
        desp:"Floral Womens Sandals"
    },
    {
        id:8,
        img:"product8.jpeg",
        name:"Pisen Shoes",
        size:6,
        color:"Blue and White",
        price:950,
        desp:"Blue Crocs"
    },
    {
        id:9,
        img:"product9.jpeg",
        name:"Gimmy Whoo",
        size:8,
        color:"Blue",
        price:4000,
        desp:"Blue Stilts"
    },
    {
        id:10,
        img:"product10.jpeg",
        name:"Adibas",
        size:9,
        color:"Black and White",
        price:1900,
        desp:"Black and white sports shoes"
    },
    {
        id:11,
        img:"product11.jpeg",
        name:"Sperk",
        size:10,
        color:"Bright Blue",
        price:800,
        desp:"Blue Womens Sport Shoes"
    },
    {
        id:12,
        img:"product12.jpeg",
        name:"Puna",
        size:10,
        color:"White",
        price:3000,
        desp:"White Ladies Sneakers"
    }
];
var cart = [];
var numberOfItems = 0;
function displayCount(count){
    document.getElementById("noOfProds").innerHTML= count;
}
displayCount(numberOfItems);

function displayProducts(productData, who="productwrapper"){
    productString = "";
    productData.forEach(function(product,index){
       productString  += `<div class="product">
                    <div class="prodImg">
                        <img src="${product.img}" width="100%"/>
                    </div>
                    <h3>${product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Size: ${product.size} UK</p>
                    <p>Color: ${product.color}</p>
                    <p>${product.desp}</p>`;
        if(who=="productwrapper"){
            productString  += `<button onclick="addToCart(${product.id})">Add to Cart!</button></div>`;
        } else if(who == "cart") {
            productString  += `<button onclick="removeFromCart(${product.id})">Remove</button></div>`;
        }
    });

    document.getElementById(who).innerHTML=productString;
}

displayProducts(products,who="productwrapper");
displayProducts(cart,who="cart");

function displayCount(count){
    document.getElementById("noOfProds").innerHTML= count;
}

function getProductById(id, who="productwrapper"){
    if(who == "productwrapper"){
        return products.find(function(product){
            return product.id==id;
        });
    }else if(who == "cart"){
        return cart.find(function(product){
            return product.id==id;
        });
    }
}

function addToCart(id){

 if(getProductById(id , who="cart") != undefined){
     alert("Product Already Added To Cart!!");
     return;
 }
let pro = getProductById(id);
 cart.push(pro);
 displayProducts(cart,"cart");
 displayCount(++numberOfItems);
}

function removeFromCart(id){
    let index= cart.findIndex(function(product){
        return product.id == id;
    });
    cart.splice(index,1);
    displayProducts(cart,"cart");
    displayCount(--numberOfItems);
}

function search(searchStr){
    let searchProds = products.filter(function(product){
        str = product.name +" "+ product.color +" "+ product.desp;
        return str.toLowerCase().indexOf(searchStr.toLowerCase()) !=-1;
    });

    displayProducts(searchProds,"productwrapper");
}

function applyPriceFilter(){
    let min = parseFloat(document.getElementById("fromAmount").value);
    let max = parseFloat(document.getElementById("toAmount").value);
    if(isNaN(min) && isNaN(max)){
        displayProducts(products,"productwrapper");
        return;
    }
    let filtered = products.filter(function(product){
        if(!isNaN(min) && !isNaN(max)){
            return product.price >= min && product.price <=max;
        } else if(isNaN(max)){
            return product.price >= min;
        } else if(isNaN(min)){
            return product.price <= max;
        }
    });
    displayProducts(filtered,"productwrapper");
}