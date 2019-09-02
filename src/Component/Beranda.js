import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import '../Component/main.css';

class Beranda extends Component {
    render() {
        return (
            <div className="judul">
                <Jumbotron className="bg-transparent">
                    <h1 className="display-1 font-weight-normal mt-md-5 mt-sm-3 text-light">Dimas <span className="text-warning">Angkasa</span></h1>
                    <div className="col bg-dark text-light h3 pb-3 pt-2 ml-mb-2 mt-3">Web Developer & UI Designer</div>
                    <p className="mt-4 h1 ml-2 ">
                        <a href="https://instagram.com/angka.asa" className="mr-3"><i class="text-light fab fa-instagram"/></a>
                        <a href="https://twitter.com/dimasangkasa27" className="mr-3"><i class="text-light fab fa-twitter" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100008192491687" className="mr-3"><i class="text-light fab fa-facebook" /></a>
                        <a href="https://github.com/angkasa27/" className="mr-3"><i class="text-light fab fa-github" /></a>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}
export default Beranda;
