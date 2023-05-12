
// let myData;


// if (localStorage.getItem('myData') !== null) {
//     myData = JSON.parse(localStorage.getItem('myData'));
//     // displayData()
// }
// else {
//     myData = [];
// }


// let data = document.getElementById('start');
// var dateValue = data.value;
// var dateObject = new Date(dateValue);
// var year = dateObject.getFullYear();
// var month = dateObject.getMonth() + 1;
// var day = dateObject.getDate();
// var dateString = year + '-' + month + '-' + day;


// $(document).ready(function () {

//     $("#add-btn").click(function () {

//         var name = $("#name").val();

//         var white_chick_price = $("#white_chick_price").val();
//         var white_chick_katkout = $("#white_katkout_qty").val();

//         var sasso_chick_price = $("#sasso_chick_price").val();
//         var sasso_chick_katkout = $("#sasso_katkout_qty").val();

//         var baladi_chick_price = $("#baladi_chick_price").val();
//         var baladi_chick_katkout = $("#baladi_katkout_qty").val();

//         var doki_chick_price = $("#doki_chick_price").val();
//         var doki_chick_katkout = $("#doki_katkout_qty").val();

//         var duck_price = $("#duck_price").val();
//         var duki_chick_katkout = $("#duck_katkout_qty").val();
//         var old = $('#old').val()
//         var pay = $('#pay').val()
//         var total = pay - old;


//         let record = {
//             name: name,
//             white_chick_price: white_chick_price,
//             white_chick_katkout: white_chick_katkout,
//             sasso_chick_price: sasso_chick_price,
//             sasso_chick_katkout: sasso_chick_katkout,
//             baladi_chick_price: baladi_chick_price,
//             baladi_chick_katkout: baladi_chick_katkout,
//             doki_chick_price: doki_chick_price,
//             doki_chick_katkout: doki_chick_katkout,
//             duck_price: duck_price,
//             duki_chick_katkout: duki_chick_katkout,
//             old: old,
//             pay: pay,
//             total: total,
//             total:total,
            
                
            
            
            
//         }



    //     var total_price = (duck_price * duki_chick_katkout) + (doki_chick_price * doki_chick_katkout) + (baladi_chick_price * baladi_chick_katkout) + (sasso_chick_price * sasso_chick_katkout) + (white_chick_price * white_chick_katkout)
    //     var total_priceAll = total_price - total

    //   function displayData(){
    //     let row = $("<tr></tr>");
        
    //     row.append($("<td>" + name + "</td>"));
    //     row.append($("<td>" + dateString + "</td>"));
    //     row.append($("<td>" + white_chick_katkout + "</td>"));
    //     row.append($("<td>" + white_chick_price + "</td>"));
    //     row.append($("<td>" + sasso_chick_katkout + "</td>"));
    //     row.append($("<td>" + sasso_chick_price + "</td>"));
    //     row.append($("<td>" + baladi_chick_katkout + "</td>"));
    //     row.append($("<td>" + baladi_chick_price + "</td>"));
    //     row.append($("<td>" + doki_chick_katkout + "</td>"));
    //     row.append($("<td>" + doki_chick_price + "</td>"))
    //     row.append($("<td>" + duki_chick_katkout + "</td>"));
    //     row.append($("<td>" + duck_price + "</td>"));
    //     row.append($("<td>" + total_price + "</td>"));
    //     row.append($("<td>" + pay + "</td>"));
    //     row.append($("<td>" + old + "</td>"));
    //     row.append($("<td>" + total_priceAll + "</td>"));







    //  return   $("table").append(row);
    //   }
     
    
//       displayData()
//         myData.push(record);
//         localStorage.setItem('myData', JSON.stringify(myData))

//         // Calculate column totals and add them to the footer
//         $("tfoot tr").remove();



//         var table = document.getElementById("myTable");
//         var numRows = table.rows.length;
//         var numCols = table.rows[0].cells.length - 2
//         var totals = new Array(numCols).fill(0);

//         for (var i = 1; i < numRows; i++) {
//             for (var j = 0; j < numCols; j++) {
//                 if (table.rows[i].cells[j].innerHTML.trim() !== '') {
//                     var cellValue = parseFloat(table.rows[i].cells[j].innerHTML);
//                     totals[j] += cellValue;
//                 }
//             }
//         }
//         var footer = table.createTFoot();
//         var mo = footer.insertRow(0);
//         for (var i = 0; i < numCols; i++) {
//             var cell = mo.insertCell(i);
//             cell.innerHTML = totals[i];;
//         }
//         var totalLabelCell = mo.insertCell(numCols);
//         totalLabelCell.colSpan = 2;

//         totalLabelCell.innerHTML = "الإجمالي";





//         // Clear input fields after adding new row
//         $("input[type=text]").val("");

//     });
// });












let dateElement = document.getElementById("date");

// تحويل التاريخ إلى صيغة نصية
let today = new Date();
let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

// عرض التاريخ داخل عنصر الـ div
dateElement.innerHTML = date;
let expenes = document.getElementById('expenes')
let nubmer = document.getElementById('nubmer')
let price = document.getElementById('price')
let katea = document.getElementById('katea')
let namemoward = document.getElementById('namemoward')
let tawred = document.getElementById('tawred')
var namee = document.getElementById("namee");

var white_chick_price = document.getElementById("white_chick_price");
var white_chick_katkout = document.getElementById("white_katkout_qty");

var sasso_chick_price = document.getElementById("sasso_chick_price");
var sasso_chick_katkout = document.getElementById("sasso_katkout_qty");

var baladi_chick_price = document.getElementById("baladi_chick_price");
var baladi_chick_katkout = document.getElementById("baladi_katkout_qty");

var doki_chick_price = document.getElementById("doki_chick_price");
var doki_chick_katkout = document.getElementById("doki_katkout_qty");

var duck_price = document.getElementById("duck_price");
var duck_katkout_qty = document.getElementById("duck_katkout_qty");
var old = document.getElementById('old')
var pay = document.getElementById('pay')
var total = pay.value - old.value;




let sreach = document.getElementById('sreach')
let addbtn = document.getElementById('addbtn')
let ubdatebtn = document.getElementById('updatebtn')
let sales = document.getElementById('sales')
let expenses = document.getElementById('expenses')
let updateexpwnes = document.getElementById('updateexpwnes')
let btnexpenes = document.getElementById('btnexpenes')



function Sales() {
    sales.classList.replace('d-block', 'd-none')
    expenses.classList.replace('d-none', 'd-block')
}
function Expenses() {
    expenses.classList.replace('d-block', 'd-none')
    sales.classList.replace('d-none', 'd-block')
}


var proudctsContainer = [];
var expenescontainer = [];

if (localStorage.getItem('product') !== null) {
    proudctsContainer = JSON.parse(localStorage.getItem('product'))
    

      
        // Check if the name is already exist and the old input is empty
        // const existingCustomer = proudctsContainer.find(( proudctsContainer) =>  proudctsContainer.name === namee.value);
        // if (existingCustomer && old.value === "") {
        //   old.value = existingCustomer.old;
        // }
      
    displayProduct(proudctsContainer)
    
}

if (localStorage.getItem('expenes') !== null) {
    expenescontainer = JSON.parse(localStorage.getItem('expenes'))
    displayexpenes(expenescontainer)
    
}



function addProudcts() {
    var product = {
        name: namee.value,
        dateString: dateElement.innerHTML,
        white_chick_price: white_chick_price.value,
        white_chick_katkout: white_chick_katkout.value,
        sasso_chick_price: sasso_chick_price.value,
        sasso_chick_katkout: sasso_chick_katkout.value,
        baladi_chick_price: baladi_chick_price.value,
        baladi_chick_katkout: baladi_chick_katkout.value,
        doki_chick_price: doki_chick_price.value,
        doki_chick_katkout: doki_chick_katkout.value,
        duck_price: duck_price.value,
        duck_katkout_qty: duck_katkout_qty.value,
        // total_price: total_price,
        old: old.value,
        pay: pay.value,
        total: total,
        // total_priceAll: total_priceAll,
        total:total,

    }

    // console.log(product)
    proudctsContainer.push(product);
    localStorage.setItem('product', JSON.stringify(proudctsContainer))
    // console.log(proudctsContainer)
    displayProduct(proudctsContainer)
    
}
function addexpenes() {
    var expenesss = {
        dateString: dateElement.innerHTML,
        tawred: tawred.value,
        namemoward: namemoward.value,
        katea: katea.value,
        price: price.value,
        nubmer: nubmer.value,
        expenes: expenes.value

    }

    expenescontainer.push(expenesss);
    localStorage.setItem('expenes', JSON.stringify(expenescontainer))
    console.log(expenescontainer)
    displayexpenes(expenescontainer)
}

function displayProduct(arr) {
    let cartona = ``
    let sum = 0
    let paid =0
    let remaining =0
    for (let i = 0; i < arr.length; i++) {
    
      
      sum = (arr[i].white_chick_price * arr[i].white_chick_katkout) + ( arr[i].sasso_chick_price * arr[i].sasso_chick_katkout) + (arr[i].baladi_chick_price * arr[i].baladi_chick_katkout) + (arr[i].doki_chick_price * arr[i].doki_chick_katkout) + (arr[i].duck_price * arr[i].duck_katkout_qty)
       paid = arr[i].old - arr[i].pay
      remaining = sum - paid
  
      
  
      cartona += `
        <tr>
          <td>${arr[i].name}</td>
          <td>${arr[i].dateString}</td>
          <td>${arr[i].white_chick_katkout}</td>
          <td>${arr[i].white_chick_price}</td>
          <td>${arr[i].sasso_chick_katkout}</td>
          <td>${arr[i].sasso_chick_price}</td>
          <td>${arr[i].baladi_chick_katkout}</td>
          <td>${arr[i].baladi_chick_price}</td>
          <td>${arr[i].doki_chick_katkout}</td>
          <td>${arr[i].doki_chick_price}</td>
          <td>${arr[i].duck_katkout_qty}</td>
          <td>${arr[i].duck_price}</td>
          <td>${sum}</td>
          <td>${arr[i].old}</td> 
          <td>${arr[i].pay}</td>
          <td>${remaining}</td>
  
          <td><button onClick='setFormForUpdate(${i})' class="btn btn-info btn-sm">تعديل</button></td>
          <td><button onclick='dleteProduct(${i})' class="btn btn-danger btn-sm">حذف</button></td>
        </tr>
      `
    }
  
    document.getElementById('table-body').innerHTML = cartona
    
  }
  

function displayexpenes(arr) {
    let cartona = ``
    for (let i = 0; i < arr.length; i++) {
        cartona += `
       <tr>
       <td>${dateElement.innerHTML}</td>
        <td> ${arr[i].expenes}</td>
        <td>${arr[i].nubmer} </td>
        
        <td>${arr[i].price}</td>
        <td>${arr[i].katea}</td>
        <td> ${arr[i].namemoward}</td>
        <td> ${arr[i].tawred}</td>
        
        
        <td><button onClick='setForm(${i})' class="btn btn-info btn-sm">تعديل</button></td>
        <td><button onclick='dleteexpenes(${i})' class="btn btn-danger btn-sm">حذف</button></td>
    </tr>
        
        `
    }

    document.getElementById('t-body').innerHTML = cartona

}



function dleteProduct(index) {
    proudctsContainer.splice(index, 1)
    localStorage.setItem('product', JSON.stringify(proudctsContainer))
    displayProduct(proudctsContainer)
    
}
function dleteexpenes(index) {
    expenescontainer.splice(index, 1)
    localStorage.setItem('expenes', JSON.stringify(expenescontainer))
    displayexpenes(expenescontainer)
}

function serchProducts(term) {
    let mathproducts = []
    for (let i = 0; i < proudctsContainer.length; i++) {
        if (proudctsContainer[i].name.includes(term) == true) {
            mathproducts.push(proudctsContainer[i])
        }
    }
    displayProduct(mathproducts)
}
function serchexpenes(term) {
    let mathproducts = []
    for (let i = 0; i < expenescontainer.length; i++) {
        if (expenescontainer[i].namemoward.includes(term) == true) {
            mathproducts.push(expenescontainer[i])
        }
    }
    displayexpenes(mathproducts)
}
function dateProducts(term) {
    let mathproducts = []
    for (let i = 0; i < proudctsContainer.length; i++) {
        if (proudctsContainer[i].dateString.includes(term) == true) {
            mathproducts.push(proudctsContainer[i])
        }
    }
    displayProduct(mathproducts)
    
}
function setFormForUpdate(i) {
    addbtn.classList.replace('d-block', 'd-none')
    ubdatebtn.classList.replace('d-none', 'd-block')
    namee.value = proudctsContainer[i].name
    dateElement.innerHTML = proudctsContainer[i].dateString
    white_chick_price.value = proudctsContainer[i].white_chick_price
    white_chick_katkout.value = proudctsContainer[i].white_chick_katkout
    sasso_chick_price.value = proudctsContainer[i].sasso_chick_price
    sasso_chick_katkout.value = proudctsContainer[i].sasso_chick_katkout
    baladi_chick_price.value = proudctsContainer[i].baladi_chick_price
    baladi_chick_katkout.value = proudctsContainer[i].baladi_chick_katkout
    doki_chick_price.value = proudctsContainer[i].doki_chick_price
    doki_chick_katkout.value = proudctsContainer[i].doki_chick_katkout
    duck_price.value = proudctsContainer[i].duck_price
    duck_katkout_qty.value = proudctsContainer[i].duck_katkout_qty

    ubdate = i
    
}
function setForm(i) {
    btnexpenes.classList.replace('d-block', 'd-none')
    updateexpwnes.classList.replace('d-none', 'd-block')
    namemoward.value = expenescontainer[i].namemoward
    nubmer.value = expenescontainer[i].nubmer
    price.value = expenescontainer[i].price
    katea.value = expenescontainer[i].katea
    tawred.value = expenescontainer[i].tawred
    expenes.value = expenescontainer[i].expenes


    ubdatee = i

}
function update(i) {

    expenescontainer[i].namemoward = namemoward.value
    expenescontainer[i].price = price.value
    expenescontainer[i].nubmer = nubmer.value
    expenescontainer[i].katea = katea.value
    expenescontainer[i].tawred = tawred.value
    expenescontainer[i].expenes = expenes.value

    btnexpenes.classList.replace('d-none', 'd-block')
    updateexpwnes.classList.replace('d-block', 'd-none')

    localStorage.setItem('expenes', JSON.stringify(expenescontainer))
    displayexpenes(expenescontainer)
}
function formupdate(i) {

    proudctsContainer[i].name = namee.value,
        proudctsContainer[i].dateString = dateElement.innerHTML
    proudctsContainer[i].white_chick_price = white_chick_price.value
    proudctsContainer[i].white_chick_katkout = white_chick_katkout.value
    proudctsContainer[i].sasso_chick_price = sasso_chick_price.value
    proudctsContainer[i].sasso_chick_katkout = sasso_chick_katkout.value
    proudctsContainer[i].baladi_chick_price = baladi_chick_price.value
    proudctsContainer[i].baladi_chick_katkout = baladi_chick_katkout.value
    proudctsContainer[i].doki_chick_price = doki_chick_price.value
    proudctsContainer[i].doki_chick_katkout = doki_chick_katkout.value
    proudctsContainer[i].duck_price = duck_price.value
    proudctsContainer[i].duck_katkout_qty = duck_katkout_qty.value
    addbtn.classList.replace('d-none', 'd-block')
    ubdatebtn.classList.replace('d-block', 'd-none')

    localStorage.setItem('product', JSON.stringify(proudctsContainer))
    displayProduct(proudctsContainer)
    
}
// function {
//     var table = document.getElementById("myTable");
//     var numRows = table.rows.length;
//     var numCols = table.rows[0].cells.length - 2;
//     // console.log(numCols);
    
//     var totals = new Array(numCols).fill(0);
    
//     for (var i = 1; i < numRows ; i++) {
//       for (var j = 2; j < numCols + 2; j++) {
//         // console.log(table.rows[i].cells[j]);
//         if (
//           table.rows[i].cells[j].innerHTML.trim() !== "" &&
//           !isNaN(parseFloat(table.rows[i].cells[j].innerHTML))
//         ) {
//           var cellValue = parseFloat(table.rows[i].cells[j].innerHTML);
//           totals[j-2] += cellValue;
//         }
//       }
//     }
    
//     // Add new row at the beginning of the table for the totals
//     var footer = table.createTFoot();
//     var mh = footer.insertRow(0);
//     var totalLabelCell = mh.insertCell(0);
//     totalLabelCell.colSpan = 2;
//     totalLabelCell.innerHTML = "الإجمالي";
//     for (var i = 0; i < numCols; i++) {
//       var cell = mh.insertCell(i + 1);
//       cell.innerHTML = totals[i];
//     }
// }
// 



    var table = document.getElementById("myTable");
    var numRows = table.rows.length;
    var numCols = table.rows[0].cells.length - 2;
    // console.log(numCols);
    
    var totals = new Array(numCols).fill(0);
    
    for (var i = 1; i < numRows ; i++) {
      for (var j = 2; j < numCols + 2; j++) {
        // console.log(table.rows[i].cells[j]);
        if (
          table.rows[i].cells[j].innerHTML.trim() !== "" &&
        //   console.log(table.rows[i].cells[j].innerHTML.trim() !== "" &&)
          !isNaN(parseFloat(table.rows[i].cells[j].innerHTML))
        ) {
          var cellValue = parseFloat(table.rows[i].cells[j].innerHTML);
          totals[j-2] += cellValue;
        }
      }
    }
    
    // Add new row at the beginning of the table for the totals
    var footer = table.createTFoot();
    var mh = footer.insertRow(0);
    var totalLabelCell = mh.insertCell(0);
    totalLabelCell.colSpan = 2;
    totalLabelCell.innerHTML = "الإجمالي";
    for (var i = 0; i < numCols; i++) {
      var cell = mh.insertCell(i + 1);
      cell.innerHTML = totals[i];
    }





  
