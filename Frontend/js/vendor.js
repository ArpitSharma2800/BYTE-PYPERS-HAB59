document.getElementById('productSubmit').addEventListener('click', (e) => {

    console.log(document.getElementById('imgupload'))
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // var name = document.getElementById('prodName').value;
    // var quantity = document.getElementById('prodQuantity').value;
    // var price = document.getElementById('prodPrice').value;

    var x = document.getElementById('imgupload');
    var formdata = new FormData();
    formdata.append("image", x.files[0], document.getElementById('imgupload').value);
    formdata.append("nameOfProduct", document.getElementById('prodName').value);
    formdata.append("quantity", document.getElementById('prodQuantity').value);
    formdata.append("price", document.getElementById('prodPrice').value);

    var requestOptions = {
        mode: 'no-cors',
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://byte-pypers.herokuapp.com/imagee", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    //     var raw = JSON.stringify({
    //         nameOfProduct: document.getElementById('prodName').value,
    //         quantity: document.getElementById('prodQuantity').value,
    //         price: document.getElementById('prodPrice').value,
    //         image: document.getElementById('imgupload').value
    //     })


    //     var requestOptions = {
    //         mode: 'no-cors',
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: 'follow'
    //     };

    //     fetch("https://byte-pypers.herokuapp.com/imagee", requestOptions)
    //         .then(response => response.text())
    //         .then(result => {
    //             console.log(result);
    //             alert('Product Added !!');
    //             document.getElementById('addProd').reset();
    //         })
    //         .catch(error => console.log('error', error));
})