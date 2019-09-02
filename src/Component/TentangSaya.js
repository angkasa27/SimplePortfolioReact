import React, { Component } from 'react';
import '../Component/main.css';
import {
    Container, Row, Col, Card, CardBody, Button, CardTitle, CardText, CardImg, Progress  } from 'reactstrap';
import foto from "./foto.jpg";
import boot from "./bootstrap.png";
import mate from "./materialize.png";
import reac from "./react.png";

class TentangSaya extends Component {
    render() {
        return (
            <div className="judul">
                <Container className="mb-5">
                    <Row className="mt-5">
                        <h1 className="display-1 font-weight-normal text-light">Tentang <span className="text-warning">Saya</span></h1>
                    </Row>
                    <Row className="mt-4">
                        <h4 className="text-light">Hai, gimana kabarnya? Perkenalkan, Nama saya Dimas Angkasa</h4>
                    </Row>
                    <Row className="mt- 3">
                        <Col sm="12" md="3">
                            <img src={foto} className="rounded-circle  img-fluid bunder" />
                        </Col>
                        <Col sm="12" md="9" className="mt-3">
                            <h3 className="text-warning">BIO</h3>
                            <p className="text-light h5 mt-4">
                                Saya adalah seorang web developer dan UI designer. Tools yang biasa saya gunakan untuk membuat UI adalah photoshop dan adobe XD. Saya telah menguasai CSS, Java Script, & Java. Framework yang biasa saya gunakan antara lain, Bootstrap, Materialize, dan ReactJs
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col sm="12" md="4">
                            <Card className="bg-dark kartu border-left-0 border-top-0 border-right-0">
                                <CardImg top width="100%" src={boot} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle className="h4 text-warning text-center">Bootstrap</CardTitle>
                                    <CardText className="text-light"><Progress value={70} max={100} color="warning" className="progres"/></CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" md="4">
                            <Card className="bg-dark kartu border-left-0 border-top-0 border-right-0">
                                <CardImg top width="100%" src={mate} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle className="h4 text-warning text-center">Materialize</CardTitle>
                                    <CardText className="text-light"><Progress value={80} max={100} color="warning" className="progres"/></CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" md="4">
                            <Card className="bg-dark kartu border-left-0 border-top-0 border-right-0">
                                <CardImg top width="100%" src={reac} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle className="h4 text-warning text-center">ReactJs</CardTitle>
                                    <CardText className="text-light"><Progress value={45    } max={100} color="warning" className="progres"/></CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default TentangSaya;
