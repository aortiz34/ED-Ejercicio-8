export default class Inventory{
    constructor() {
        this._inicio = null;
    }

    addProduct(nuevo){
        if (this._inicio===null){
            this._inicio=nuevo;
            console.log(this._inicio);
            return `${this._inicio.getInfo()}`;
        } else if (this.searchProduct(nuevo.getCode()) == null) {
            let aux=this._inicio;
            while(aux.getNext()!=null){
                aux=aux.getNext();
            }
            aux.setNext(nuevo);
            console.log(this._inicio);
            return `${nuevo.getInfo()}`;
        } else{
            return `No se pudo agregar`;
        }
    }

    searchProduct(code){
        let aux = this._inicio;
        while(aux != null){
            if(aux.getCode() == code){
                return aux;
            }else {
                aux = aux.getNext();
            }
          }
          return null;
        }

    listProducts(){
        let txt = "";
        if (this._inicio===null){
            return "Esta vacio";
        }else {
            return this._addToList(this._inicio);
        }
    }

    _addToList(aux){
        if (aux.getNext() == null) {
            return aux.getInfoList();
        }else{
            return aux.getInfoList() + this._addToList(aux.getNext());
        }
    }

    listProductsInv(){
        let txt = "";
        if (this._inicio===null){
            return "Esta vacio";
        }else {
            return this._addToListInv(this._inicio);
        }
    }

    _addToListInv(aux){
        if (aux.getNext() == null) {
            return aux.getInfoList();
        }else{
            return this._addToListInv(aux.getNext()) + aux.getInfoList();
        }
    }

    deleteProduct(code){
        if (this._inicio == null) {
            return null;
        }else{
            let elim = null;
            if (code == this._inicio.getCode()){
                elim = this._inicio;
                console.log(elim);
                this._inicio = this._inicio.getNext();
                elim.setNext(null);
                return elim;
            }else{
                let aux = this._inicio;
                while (aux.getNext != null) {
                    if (aux.getNext().getCode() == code){
                        elim = aux.getNext();
                        console.log(aux.getNext().getNext());
                        aux.setNext(aux.getNext().getNext());
                        elim.setNext(null);
                        return elim;
                    }else{
                        console.log(aux.getNext());
                        aux = aux.getNext();
                        console.log(aux);
                        }
                }
                return elim;
            }
        }
    }

    insertProduct(nuevo,pos){
        if(this.searchProduct(nuevo.getCode()) == null){
            if (this._inicio == null || pos == 1) {
                let temp = this._inicio;
                this._inicio = nuevo;
                this._inicio.setNext(temp);
                    return `${this._inicio.getInfo()}`;
            }else {
                let cont = 1;
                let aux = this._inicio;
                while (aux != null) {
                    if (cont == pos - 1) {
                        let temp = aux.getNext();
                        console.log(this._inicio);
                        aux.setNext(nuevo);
                        aux.getNext().setNext(temp);
                        console.log(`lol`);
                        return `${aux.getNext().getInfo()}`;
                    }else{
                        console.log('saw');
                        cont++;
                        aux = aux.getNext();
                    }
                }
                console.log(pos);
                if (cont == pos) {
                    console.log(this._inicio);
                    aux = nuevo;
                    return `${nuevo.getInfo()}`;
                }else{
                    return `No fue posible agregarse`;
                }

            }
        }else{
            return `No se agrego el producto`;
        }
    }
}