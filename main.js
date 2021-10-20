import Product from "./product.js";
import Inventory from "./inventory.js";

class App{
    constructor(){
        this._inventory= new Inventory();
        this._div = document.querySelector("#detail");
        let btnAdd=document.querySelector("#btnAdd");
        btnAdd.addEventListener("click",this._addProduct);
        let btnSearch = document.querySelector("#btnSearch");
        btnSearch.addEventListener("click",this._searchProduct);
        let btnList=document.querySelector("#btnList");
        btnList.addEventListener("click",this._list);
        let btnListInv=document.querySelector("#btnListInv");
        btnListInv.addEventListener("click",this._listInv);
        let btnInsert=document.querySelector("#btnInsert");
        btnInsert.addEventListener("click",this._insert);
        let btnDelete=document.querySelector("#btnDelete");
        btnDelete.addEventListener("click",this._delete);
   }

   _addProduct= () =>{
       let product = null;
        let name = document.getElementById('textName').value;
        let code = document.getElementById('numberCode').value;
        let quantity = document.getElementById('numberQuantity').value;
        let cost = document.getElementById('numberCost').value;

        if(code&&name&&quantity&&cost){
            document.getElementById('textName').value = "";
            document.getElementById('numberCode').value = "";
            document.getElementById('numberQuantity').value = "";
            document.getElementById('numberCost').value = "";
            product = new Product(name,code,quantity,cost);
            this._div.innerHTML = this._inventory.addProduct(product);
        }else{
            this._div.innerHTML = `El producto no se agregó`;
            return;
        }
   }

   _searchProduct= () =>{
    let code = document.getElementById("numberCode");
    if (this._inventory.searchProduct(code.value)) {
        this._div.innerHTML = this._inventory.searchProduct(code.value).getInfo();
        code.value = "";
        return;
    }else {
        this._div.innerHTML = `No se encontró el producto.`;
        code.value = "";
        return;
    }
   }

   _list= () =>{
    this._div.innerHTML = this._inventory.listProducts();
   }

   _listInv= () =>{
    this._div.innerHTML = this._inventory.listProductsInv();
    return;
   }

   _delete= () => {
       let code = document.getElementById("numberCode");
       let elim = this._inventory.deleteProduct(code.value);
       if (elim) {
           this._div.innerHTML = `Se eliminó el producto. </n>
           ${elim.getInfo()}`;
           code.value = "";
           return;
       }else{
        this._div.innerHTML = `No se encontró el producto.`;
        code.value = "";
        return;
       }
   }

   _insert= () => {
    let product = null;
    let name = document.getElementById('textName').value;
    let code = document.getElementById('numberCode').value;
    let quantity = document.getElementById('numberQuantity').value;
    let cost = document.getElementById('numberCost').value;
    let pos = document.getElementById('numberPosition').value;

    if(code&&name&&quantity&&cost&&pos){
        document.getElementById('textName').value = "";
        document.getElementById('numberCode').value = "";
        document.getElementById('numberQuantity').value = "";
        document.getElementById('numberCost').value = "";
        document.getElementById('numberPosition').value = "";
        product = new Product(name,code,quantity,cost);
        this._div.innerHTML = this._inventory.insertProduct(product,pos);
    }else{
        this._div.innerHTML = `El producto no se agregó`;
        return;
    }
   }
}

new App();