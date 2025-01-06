

function LoadCategories(){
    fetch("https://fakestoreapi.com/products/categories")
    .then(function(response){
        return response.json();
    })

    .then(function(categories){
        categories.unshift("all");
        categories.map(function(category){

        var option = document.createElement("option");
        option.text = category.toUpperCase();
        option.value = category;
        document.getElementById("lstCategories").appendChild(option);
        })
    })
}

function LoadProducts(){
    document.querySelector("main").innerHTML = "";
    fetch("https://fakestoreapi.com/products")
    .then(function(response){
        return response.json();
    })

    .then(function(products){
        products.map(function(product){
            var div = document.createElement("div");
            div.className= "card p-2 m-2";
            div.style.width = "250px";
            div.innerHTML = `
             <img src = "${product.image}" class = "card-img-top" height= "120">
             <div class = "card-header" style = height:"130px", font-size = "25px"> ${product.title}</div>
             <div class = "card-body">
             <dt> Category </dt>
             <dd> ${product.category} </dd>
             <dt> Price </dt>
             <dd> &#8377; ${product.price} </dd>
             <dt> Rating </dt>
             <dd> ${product.rating.rate} </dd>
             <div class = "card-footer">
             <button onclick = "AddClick(${product.id})" class = "btn btn-warning w-100 bi bi-cart4"> Add to Cart </button>
             </div>

            `;
            document.querySelector("main").appendChild(div);
        })
    })

}



function bodyload(){
    LoadCategories();
    LoadProducts();
    GetCartCount();
}

function CategoryChanged(){
    var categoryName = document.getElementById("lstCategories").value;
    if(categoryName==="all") {
        LoadProducts("https://fakestoreapi.com/products");
    } else {
        LoadProducts(`https://fakestoreapi.com/products/category/${categoryName}`);
    }
}

function GetCartCount(){
    document.getElementById("lblCount").innerHTML = cartItems.length;
}

var cartItems=[];
function AddClick(id)
{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(function(response){
         return response.json();
    })
    .then(function(product){
        cartItems.push(product);
        alert(`${product.title}\nAdded to Cart`);
        GetCartCount();
    })
}

function LoadCart(){
    document.querySelector("tbody").innerHTML = "";
    cartItems.map(function(item){
        var tr = document.createElement("tr");
        var tdTitle = document.createElement("td");
        var tdPhoto = document.createElement("td");
        var tdPrice = document.createElement("td");

        tdTitle.innerHTML = item.title;
        tdPhoto.innerHTML = `<img src=${item.image} width="50" height="50">`;
        tdPrice.innerHTML = item.price;

        tr.appendChild(tdTitle);
        tr.appendChild(tdPhoto);
        tr.appendChild(tdPrice);

        document.querySelector("tbody").appendChild(tr);
    })
}


