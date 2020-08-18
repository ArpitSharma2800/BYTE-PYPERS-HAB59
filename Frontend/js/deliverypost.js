var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({ "name": "test", "address": "test", "phoneNumber": "456", "time": "test" });

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("https://byte-pypers.herokuapp.com/hd/set_home_delivery", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));