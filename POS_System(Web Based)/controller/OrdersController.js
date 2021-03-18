// search customer
$("#txtCustomerID").on('keyup', function (eObj) {
    if (eObj.key == "Enter") {
        let customer = searchCustomer2($(this).val());
        if (customer != null) {
            $("#txtCustomerName2").val(customer.getCustomerName());
        } else {
            clearcustomer2();
        }
    }
});

function searchCustomer2(customerID) {
    for (var i in customerTable) {
        if (customerTable[i].getCustomerID() == customerID) return customerTable[i];
    }
    return null;
}

function clearcustomer2() {
    $('#txtCustomerID').val("");     
}

// search item
$("#txtItemCode2").on('keyup', function (eObj) {
    if (eObj.key == "Enter") {
        let item = searchItem2($(this).val());
        if (item != null) {
            $("#txtItemName2").val(item.getItemName());
            $("#txtInStocks2").val(item.getQtyOnHand());
            $("#txtUnitPrice2").val(item.getUnitPrice());
        } else {
            clearcustomer2();
        }
    }
});

function searchItem2(itemCode) {
    for (var i in itemTable) {
        if (itemTable[i].getItemCode() == itemCode) return itemTable[i];
    }
    return null;
}

function clearItem2() {
    $('#txtItemCode2').val("");     
}

// add to list
// $('#btnAddToList').click(function () {
//     $('#tblLIst tbody').append('<tr>' +
//         '<td>' + $('#txtItemCode2').val() + '</td>' +
//         '<td>' + $('#txtItemName2').val() + '</td>' +
//         '<td>' + $('#txtUnitPrice2').val() + '</td>' +
//         '<td>' + $('#txtQuantity').val() + '</td>' +
//         '<td>' + $('#txtQuantity').val()* $('#txtUnitPrice2').val() + '</td>' +
//         '</tr>');
//         subTotal();

// });

// function subTotal() {
        
//             // var rowTotals = $('#tblLIst>tr').children('td:eq(4)').text();
//             // var orderTotal = 0;
//             // for(var i = 0; i < rowTotals.length; i++){
//             //     orderTotal += parseFloat(rowTotals[i].value);
//             // }
//             // alert(orderTotal);
  
// }

// save
$('#btnAddToList').click(function () {
    let itemcode = $("#txtItemCode2").val();
    let itemname = $("#txtItemName2").val();
    let unitprice = $("#txtUnitPrice2").val();
    let qty = $("#txtQuantity").val();
    let total = $('#txtQuantity').val()* $('#txtUnitPrice2').val()

    let result = saveItemList(itemcode, itemname, unitprice, qty, total);
    if(result)clearfields();
    subTotal();
    updateStocks(itemcode);
});

// save
function getAllList() {
    return itemList;
}
function saveItemList(itemcode, itemname, unitprice, qty, total) {
    let itemlist = new ItemListDTO(itemcode, itemname, unitprice, qty, total);
    itemList.push(itemlist);// customer aded

    // load the table
    loadAllItemList();
    return true;   
}

// other functions
function loadAllItemList() {
    let allItemList = getAllList();
    $('#tblLIst').empty(); // clear all the table before adding for avoid duplicate
    for (var i in allItemList) {
        let code = allItemList[i].getIlcode();
        let name = allItemList[i].getIlname();
        let uprice = allItemList[i].getIluprice();
        let qty = allItemList[i].getIlqty();
        let total = allItemList[i].getIltotal();

        var row = `<tr><td>${code}</td><td>${name}</td><td>${uprice}</td><td>${qty}</td><td>${total}</td></tr>`;
        $('#tblLIst').append(row);
    }
    $('#tblLIst>tr').click(function () {
        let code=$(this).children('td:eq(0)').text();
        let name=$(this).children('td:eq(1)').text();
        let uprice=$(this).children('td:eq(2)').text();
        let qty=$(this).children('td:eq(3)').text();
        let total=$(this).children('td:eq(4)').text();
        
        $("#txtItemCode2").val(code);
        $("#txtItemName2").val(name);
        $("#txtUnitPrice2").val(uprice);
        $("#txtQuantity").val(qty);
         
        
      
   });
}
function clearfields() {
    $("#txtItemCode2").val("");
    $("#txtItemName2").val("");
    $("#txtUnitPrice2").val("");
    $("#txtQuantity").val("");
    $("#txtInStocks2").val("");
         
    }

function subTotal() {
    
    var orderTotal = 0;
    for (var i in itemList) {
        var rowTotals =itemList[i].getIltotal() ;
        orderTotal += rowTotals;
    }
    $("#subTotal").text(orderTotal);
  
            // var rowTotals = $('#tblLIst>tr').children('td:eq(4)').text();
            // var orderTotal = 0;
            // for(var i = 0; i < rowTotals.length; i++){
            //     orderTotal += parseFloat(rowTotals[i].value);
            // }
            // alert(orderTotal);
  
}
// function updateStocks(itemcode){
//     var newStocks = 0;
//     for (var i in itemList) {
//         for (var j in itemTable) {
             
//         if ((itemList[i].getIlcode() && itemTable[j].getQtyOnHand())==itemcode ){
//             newStocks=itemTable[j].getQtyOnHand()-itemlist[i].getIlqty();
//         }
//     }
//     }alert(newStocks);
// }