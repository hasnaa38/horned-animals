import React, { Component } from 'react';
import BeastsData from './beastsData.json'; //contains beasts data
import 'bootstrap/dist/css/bootstrap.min.css'; //required css stylesheets for React Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
//Components:
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import BeastsForms from './components/BeastsForms';

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
      searchTerm: '',
      selectedHorns: '',
    }
  }

  // form select function:
  handleHornsSelect = (e) => {
    e.preventDefault();
    let selectedHorns = e.target.value;
    this.setState({
      selectedHorns: selectedHorns,
    });
  }

  handleTitleSearch = (e) => {
    e.preventDefault();
    let searchTerm = e.target.value;
    this.setState({
      searchTerm: searchTerm,
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

  shownBeastsArray = (arr) => {
    if (this.state.searchTerm === '' && (this.state.selectedHorns === '' || this.state.selectedHorns === 'all')) {
      return arr;
    }
    else {
      if (this.state.searchTerm !== '') {
        return arr.filter(animal => {
          return animal.title.toLowerCase().includes(this.state.searchTerm.toLowerCase());
        })
      }
      else if (this.state.selectedHorns !== '') {
        return arr.filter(animal => {
          return animal.horns === parseInt(this.state.selectedHorns);
        })
      }
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
                <BeastsForms handleSelect={this.handleHornsSelect} selectedHorns={this.state.selectedHorns}
                  handleTitleSearch={this.handleTitleSearch} searchTerm={this.state.searchTerm} />
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
