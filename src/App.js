import React, { Component } from 'react';
import Utama from './Component/Utama';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, Col, Row, UncontrolledTooltip} from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar className="bg-dark fixed-top" light>
          <NavbarBrand href="/Beranda" className="mr-auto"></NavbarBrand>
          <button onClick={this.toggleNavbar} className="btn btn-outline-dark text-light mt-1 mb-1"><i class="fas fa-bars"/></button>
          <Collapse isOpen={!this.state.collapsed} navbar className="mb-3 ">
            <Nav navbar className="text-center bg-transparent ">
              <NavItem>
                <Row>
                  <Col sm="12" md={{ size: 3, offset: 7 }} className=""><Link to="/Beranda" id="tes" className="aaa font-weight-light col-md-3 h3">BERANDA</Link></Col>
                  <UncontrolledTooltip placement="left" target="tes">
                    Buat kembali ke halaman awal
                  </UncontrolledTooltip>
                </Row>
              </NavItem>
              <NavItem>
                <Row>
                  <Col sm="12" md={{ size: 3, offset: 2 }} className=""><Link to="/TentangSaya" id="tes1" className="aaa font-weight-light col-md-3 h3">TENTANG SAYA</Link></Col>
                  <UncontrolledTooltip placement="right" target="tes1">
                    Semua yang kamu mau tau
                  </UncontrolledTooltip>
                </Row>
              </NavItem>
              <NavItem>
                <Row>
                  <Col sm="12" md={{ size: 3, offset: 7 }} className=""><Link to="/Karya" id="tes2" className="aaa font-weight-light col-md-3 h3">KARYA</Link></Col>
                  <UncontrolledTooltip placement="left" target="tes2">
                    Hasil jerih payah saya
                  </UncontrolledTooltip>
                </Row>
              </NavItem>
              <NavItem>
                <Row>
                  <Col sm="12" md={{ size: 3, offset: 2 }} className=""><Link to="/Kontak" id="tes3" className="aaa font-weight-light col-md-3 h3">KONTAK</Link></Col>
                  <UncontrolledTooltip placement="right" target="tes3">
                    Kalo minat bisa di buka
                  </UncontrolledTooltip>
                </Row>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <p className="sss"> <Utama /> </p>
      </div>
    );
  }
}

export default App;


