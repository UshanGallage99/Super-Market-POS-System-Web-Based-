function ItemListDTO(itemcode, itemname, unitprice, qty, total){
    var __itemcode=itemcode;
    var __itemname=itemname;
    var __unitprice=unitprice;
    var __qty=qty;
    var __total=total;

    this.getIlcode = function () {
        return __itemcode;
    }
    this.getIlname = function () {
        return __itemname;
    }
    this.getIluprice = function () {
        return __unitprice;
    }
    this.getIlqty = function () {
        return __qty;
    }
    this.getIltotal = function () {
        return __total;
    }

    this.setIlcode = function (newID) {
        __itemcode = newID;
    }
    this.setIlname = function (newName) {
        __itemname = newName;
    }
    this.setIluprice = function (newPrice) {
        __unitprice = newPrice;
    }
    this.setIlqty = function (newQty) {
        __qty = newQty;
    }
    this.setIltotal = function (newTotal) {
        __total = newTotal;
    }


}