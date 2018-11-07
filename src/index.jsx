import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import styled, { css } from 'react-emotion';
import { observable } from 'mobx';

import store from '$store';
import Button from '$components/Button';

const centered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  background-color: #ddd;
  height: 10vh;
`;

const Main = styled.main`
  background-color: #eee;
  height: 80vh;
  display: flex;
  flex-direction: column;
  pre {
    min-width: 100px;
    background: linear-gradient(135deg, #2c3e50, #34495e, #2c3e50);
    padding: 10px;
    color: #fff;
  }
`;

const Footer = styled.footer`
  background-color: #ccc;
  height: 10vh;
`;

const createRandomNumber = () => Math.round(Math.random() * 10);

@observer
class App extends React.Component {
  @observable number;

  addNumber() {
    this.number = createRandomNumber();
    store.addNumbers(this.number);
  }

  render() {
    return (
      <>
        <Header className={centered}>
          <h1>Hello!</h1>
        </Header>
        <Main className={centered}>
          <p>React + Mobx Boilerplate</p>
          <Button
            onClick={() => this.addNumber()}
          >
            Add numbers
          </Button>
          <p>{`Number added: ${this.number}`}</p>

          <hr />

          <p>Even numbers from store</p>
          <pre>
            {JSON.stringify(store.getEvenNumbers, null, 2)}
          </pre>
        </Main>
        <Footer className={centered}>
          <small>(c) Roman Kollatschny - 2018</small>
        </Footer>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
