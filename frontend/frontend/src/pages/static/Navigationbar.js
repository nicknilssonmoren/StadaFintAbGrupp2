import React, {Component} from 'react';

class Navigationbar extends Component {
    render() {
        return (
            <div>
                <div className={"container d-flex justify-content-between "}>
                    <div>
                        <h1>Städa Fint AB</h1>
                    </div>
                    <div>
                        <a href={"/"} type="button" className="btn btn-primary">Logga ut</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigationbar;