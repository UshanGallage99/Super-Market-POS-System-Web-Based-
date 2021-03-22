function OrderDTO(orderId, date, cusId, orderDetails){
    var __orderId=orderId;
    var __date=date;
    var __cusId=cusId;
    var __orderDetails=orderDetails;
     
    this.getOrderId = function () {
        return __orderId;
    }
    this.getDate = function () {
        return __date;
    }
    this.getCusId = function () {
        return __cusId;
    }
    this.getOrderDetail = function () {
        return __orderDetails;
    }

    this.setOrderId  = function (newOrderId) {
        __orderId = newOrderId;
    }
    this.setDate = function (newDate) {
        __date = newDate;
    }
    this.setCusId = function (newCusId) {
        __cusId = newCusId;
    }
    this.setOrderDetail = function (newOrderDetails) {
         __orderDetails=newOrderDetails;
    }

     

}