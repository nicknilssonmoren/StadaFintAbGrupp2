import React, {Component} from 'react';

class Register extends Component {
    render() {
        return (
            <div className="justify-content-center d-flex">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-20 mt-3">
                            <label htmlFor="inputEmail4">Email</label>
                            <input className="form-control" id="inputEmail4" placeholder="Email" type="email"></input>
                        </div>
                        <div className="form-group col-md-20 mt-3">
                            <label htmlFor="inputPassword4">Password</label>
                            <input className="form-control" id="inputPassword4" placeholder="Password"
                                   type="password"></input>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="inputAddress">Address</label>
                        <input className="form-control" id="inputAddress" placeholder="1234 Main St"
                               type="text"></input>
                    </div>

                    <form>
                        <div className={"d-flex justify-content-around"}>

                                <button type="button" className=" btn btn-primary" onClick={() => this.postCustomerDetails()}>Register
                                </button>


                            <a href={"/"}>
                                <button type="button" className=" btn btn-secondary">Home
                                </button>
                            </a>


                        </div>
                    </form>
                </form>
            </div>
        );
    }

    postCustomerDetails() {
        let email = document.getElementById('inputEmail4');
        let password = document.getElementById('inputPassword4');
        let address = document.getElementById('inputAddress');

        if(email.value === ""){
            alert("You need an email");
            return;
        }
        if(password.value == ""){
            alert("You need to fill password");
            return;
        }
        if(address.value == ""){
            alert("You need to fill address");
            return;
        }


        fetch("http://localhost:8080/createCustomer", {
            method: 'post',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify({
                "role": "Customer",
                "password": password.value,
                "address": address.value,
                "documentId": email.value
            })
        })
            //.then(json)
            .then(function (data) {
                console.log('Request succeeded with JSON response', data);
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });

        setTimeout(function() {
            function myFunc() {
                window.location.href = "/";
            }
            myFunc()}, 1000);

        };


}

export default Register;