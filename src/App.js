import React, { Component } from 'react';
import { Fragment } from 'react';
import FakerComponent from './Component/Faker/Faker.component';
import faker from 'faker/locale/en_IND';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: faker.image.avatar(),
      firstname: faker.name.firstName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.phoneNumber(),
    };
  }
  render() {
    let { ...fakerName } = this.state;
    // console.log(fakerName);
    return (
      <Fragment>
        <FakerComponent student={fakerName} />
      </Fragment>
    );
  }
}

export default App;
