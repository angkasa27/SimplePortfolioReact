import React, { Component } from 'react';
import '../Component/main.css';
import {
    Container, Row, Col, Card, CardBody, Button, CardTitle, CardText, CardImg
} from 'reactstrap';

class Karya extends Component {
    render() {
        return (
            <div className="judul">
                <Container>
                    <Row className="mt-5">
                        <h1 className="display-1 font-weight-normal text-light">Karya <span className="text-warning">Saya</span></h1>
                    </Row>
                    <Row className="mt-4">
                        <h4 className="text-light">Beberapa contoh aplikasi yang telah saya buat</h4>
                    </Row>
                    <Row className="mt-3">
                        <Col sm="12" md="3">
                            <Card className="bg-dark mt-3">
                                <CardBody>
                                    <CardTitle className="h4 text-warning text-center">Portfolio</CardTitle>
                                    <CardText className="text-light">Sebuah web portfolio yang dibuat dengan ReactJs</CardText>
                                    <Button className="col-sm-12"><i class="text-light aa fab fa-github" /> Github</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" md="3">
                            <Card className="bg-dark mt-3">
                                <CardBody>
                                    <CardTitle className="h4 text-warning text-center">Daily Activity Scheduler</CardTitle>
                                    <CardText className="text-light">Contoh implementasi dari React Date</CardText>
                                    <Button className="col-sm-12"><i class="text-light aa fab fa-github" /> Github</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" md="3">
                            <Card className="bg-dark mt-3">
                                <CardBody>
                                    <CardTitle className="h4 text-warning text-center">Daftar Hotel</CardTitle>
                                    <CardText className="text-light">Sebuah web yang menampilkan hotel hotel di Jogja. dibuat dengan React</CardText>
                                    <Button className="col-sm-12"><i class="text-light aa fab fa-github" /> Github</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" md="3">
                            <Card className="bg-dark mt-3">
                                <CardBody>
                                    <CardTitle className="h4 text-warning text-center">List Nama</CardTitle>
                                    <CardText className="text-light">Contoh web dengan JavaScript sederhana</CardText>
                                    <Button className="col-sm-12"><i class="text-light aa fab fa-github" /> Github</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" md="3">
                            <Card className="bg-dark mt-3">
                                <CardBody>
                                    <CardTitle className="h4 text-warning text-center">Stop Nganggur</CardTitle>
                                    <CardText className="text-light">Web tentang gerakan untuk mengurangi pengangguran</CardText>
                                    <Button className="col-sm-12"><i class="text-light aa fab fa-github" /> Github</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" md="3">
                            <Card className="bg-dark mt-3">
                                <CardBody>
                                    <CardTitle className="h4 text-warning text-center">Muffy Store</CardTitle>
                                    <CardText className="text-light">Web yang menjual kue, permen dan Scrapbok</CardText>
                                    <Button className="col-sm-12"><i class="text-light aa fab fa-github" /> Github</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" md="3">
                            <Card className="bg-dark mt-3">
                                <CardBody>
                                    <CardTitle className="h4 text-warning text-center">Ngalam Rek</CardTitle>
                                    <CardText className="text-light">Web yang mempromosikan pariwisata kota malang</CardText>
                                    <Button className="col-sm-12"><i class="text-light aa fab fa-github" /> Github</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" md="3">
                            <Card className="bg-dark mt-3">
                                <CardBody>
                                    <CardTitle className="h4 text-warning text-center">Cuti Online</CardTitle>
                                    <CardText className="text-light">Sebuah web pengajuan cuti secara online</CardText>
                                    <Button className="col-sm-12"><i class="text-light aa fab fa-github" /> Github</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Karya;
