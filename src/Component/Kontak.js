import React, { Component } from 'react';
import '../Component/main.css';
import {
    Container, Row, Col} from 'reactstrap';

class Kontak extends Component {
    render() {
        return (
            <div className="judul">
                <Container>
                    <Row className="mt-5">
                        <h1 className="display-3 font-weight-normal text-light">Hubungi <span className="text-warning">Saya</span></h1>
                    </Row>
                    <Row className="mt-3 mb-5">
                        <h5 className="text-light">This is a modified jumbotron that occupies the entire horizontal space of its parent.</h5>
                    </Row>
                    <Container className="mt-5 pt-4 pb-4 bg-dark">
                        <Row className="text-center">
                            <Col sm="6" md="3">
                                <a href="https://instagram.com/angka.asa" className=""><i class="aaa text-light fab fa-instagram display-3" /></a>
                            </Col>
                            <Col sm="6" md="3">
                                <a href="https://twitter.com/dimasangkasa27" className=""><i class="aaa text-light fab fa-twitter display-3" /></a>
                            </Col>
                            <Col sm="6" md="3">
                                <a href="https://facebook.com/profile.php?id=100008192491687" className=""><i class="aaa text-light fab fa-facebook display-3" /></a>
                            </Col>
                            <Col sm="6" md="3">
                                <a href="https://github.com/angkasa27" className=""><i class="aaa text-light fab fa-github display-3" /></a>
                            </Col>
                        </Row>
                        <Row className="mt-2 text-center">
                            <Col sm="6" md="3">
                                <a href="https://instagram.com/angka.asa" className=" h3 aaa">@angka.asa</a>
                            </Col>
                            <Col sm="6" md="3">
                                <a href="https://twitter.com/dimasangkasa27" className=" h3 aaa">@dimasangkasa27</a>
                            </Col>
                            <Col sm="6" md="3">
                                <a href="https://facebook.com/profile.php?id=100008192491687" className=" h3 aaa">Dimas Angkasa Nurindra</a>
                            </Col>
                            <Col sm="6" md="3">
                                <a href="https://github.com/angkasa27" className=" h3 aaa">angkasa27</a>
                            </Col>
                        </Row>
                    </Container>
                    
                </Container>
            </div>
        )
    }
}
export default Kontak;
