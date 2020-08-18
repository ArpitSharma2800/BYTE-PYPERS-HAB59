var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

var userDynamic = document.getElementById('userStore');

function hideSpinner() {
    document.getElementById('spinnerDelivery').style.display = 'none';
}

fetch("https://byte-pypers.herokuapp.com/list_items_get", requestOptions)
    .then(response => response.text())
    .then(result => {
        hideSpinner();
        var userResult = JSON.parse(result);
        console.log(userResult.prod)


        for (var i = 0; i < userResult.prod.length; i++) {
            var listName = userResult.prod[i].nameOfProduct;
            var listPrice = userResult.prod[i].price;
            var listQuant = userResult.prod[i].quantity;
            var listImage = userResult.prod[i].image;
            console.log(listName)
            console.log(listPrice)
            console.log(listQuant)
            console.log(listImage)

            var userContent = `<div class="card mb-3 cardWrapper shadow"><div class="row no-gutters"><div class="col-md-4"><img src="https://byte-pypers.herokuapp.com/images/${listImage}" class="card-img" alt="..."></div><div class="col-md-8"><div class="card-body"><div class="prodName"><h5 class="card-title" id="prodName${i+1}">${listName}</h5><p class="card-text price">MRP: <i class="fas fa-rupee-sign"></i> ${listPrice}</p><p class="card-text"><small class="text-muted">Quantity Available : ${listQuant}</small></p></div><div class="prodSelect"><select class="custom-select mr-sm-2" id="inlineFormCustomSelect"><option selected>Quantity</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="3">4</option><option value="3">5</option></select><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck${i+1}"><label class="custom-control-label" for="customCheck${i+1}">Add to Cart</label></div></div></div></div></div></div>`

            userDynamic.insertAdjacentHTML('beforeend', userContent);
        }

        return userResult;

    })
    .then((hello) => {
        console.log(hello.prod.length);


        // for (var i = 1;
        //     (i < hello.prod.length + 1); i++) {
        //     var checkedArr = document.getElementById(`customCheck${i}`).addEventListener('click', () => {
        //         for (var j = 1;
        //             (j < hello.prod.length + 1); j++) {
        //             if (document.getElementById(`customCheck${j}`).checked === true && document.getElementById(`customCheck${j+1}`).checked === false && document.getElementById(`customCheck${j+2}`).checked === false) {
        //                 var asd = `prodName${j}`;
        //                 console.log(asd);

        //             } else if (document.getElementById(`customCheck${j}`).checked === false && document.getElementById(`customCheck${j+1}`).checked === true && document.getElementById(`customCheck${j+2}`).checked === false) {
        //                 var a = `prodName${j}`;
        //                 console.log(a);
        //             }
        //         }
        //     })
        // }



        document.getElementById('deliverySubmit').addEventListener('click', () => {


            var raw = JSON.stringify({
                name: document.getElementById('deliveryName').value,
                phoneNumber: document.getElementById('deliveryMobile').value,
                address: document.getElementById('deliveryAddress').value,
                time: document.getElementById('deliveryTime').value
            })
            console.log(raw);


            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://byte-pypers.herokuapp.com/hd/set_home_delivery", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .then(alert('Delivery Request Sent'))
                .then(() => {
                    location.reload();
                    document.getElementById('deliveryForm').reset();
                })
                .catch(error => console.log('error', error));
        })
    })
    .catch(error => console.log('error', error));