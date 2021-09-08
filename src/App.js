import React, { Component } from 'react';
import BeastsData from './beastsData.json'; //contains beasts data
import 'bootstrap/dist/css/bootstrap.min.css'; //required css stylesheets for React Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
//Components:
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import SelectHornsForm from './SelectHornsForm';

class App extends Component {

  // constructor function:
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      title: '',
      image_url: '',
      description: '',
      keyword: '',
      horns: '',
      shownBeats: 'all',
      selectedHorns: '',
    }
  }

  // form select function:
  handleHornsSelect = (e) => {
    e.preventDefault();
    let selectedHorns = e.target.value;
    this.setState({
      selectedHorns: selectedHorns,
      shownBeats: selectedHorns,
    });
  }

  // close modal function:
  handleCloseMethod = () => {
    this.setState({
      showModal: false,
    });
  }

  // open modal function:
  handleOpenMethod = (title, image_url, description, keyword, horns) => {
    this.setState({
      showModal: true,
      title: title,
      image_url: image_url,
      description: description,
      keyword: keyword,
      horns: horns,
    })
  }

  // filtering shown beasts function (to create an array to map through):
  shownBeastsArray = (arr) => {
    if (this.state.shownBeats === 'all') {
      return arr;
    }
    else {
      return arr.filter(animal => {
        return animal.horns === parseInt(this.state.selectedHorns);
      });
    }
  }

  render() {
    return (
      <>
        <Header />
        <br />
        <br />
        <Container>
          <Row>
            {/* Form: */}
            <Col xs={11}>
              <SelectHornsForm handleSelect={this.handleHornsSelect} selectedHorns={this.state.selectedHorns} />
            </Col>
          </Row>

          <Row>
            {this.shownBeastsArray(BeastsData).map(beast => {
              return (
                <Main handleOpenMethod={this.handleOpenMethod} title={beast.title} image_url={beast.image_url}
                  description={beast.description} keyword={beast.keyword} horns={beast.horns} />
              );
            })}
          </Row>
          <br />
        </Container>

        <SelectedBeast handleCloseMethod={this.handleCloseMethod} showModal={this.state.showModal} title={this.state.title}
          image_url={this.state.image_url} description={this.state.description} keyword={this.state.keyword} horns={this.state.horns} />

        <Footer />
      </>
    )
  }
}

export default App
