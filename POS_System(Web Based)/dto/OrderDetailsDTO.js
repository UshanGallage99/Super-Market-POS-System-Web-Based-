function OrderDetailsDTO(orderId, itemCode, qty, unitPrice){
    var __orderId=orderId;
    var __itemCode=itemCode;
    var __unitPrice=unitPrice;
    var __qty=qty;
     
    this.getId = function () {
        return __orderId;
    }
    this.getCode = function () {
        return __itemCode;
    }
    this.getUprice = function () {
        return __unitPrice;
    }
    this.getQty = function () {
        return __qty;
    }

    this.setId  = function (newOrderId) {
        __orderId = newOrderId;
    }
    this.setCode = function (newCode) {
        __itemCode = newCode;
    }
    this.setUprice = function (newUprice) {
        __unitPrice = newUprice;
    }
    this.setQty = function (newQty) {
        __qty = newQty;
    }
     

}