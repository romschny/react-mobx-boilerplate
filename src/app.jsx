import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import store from '$store';
import Button from '$components/Button';

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }
`;

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
        <Global styles={globalStyles} />

        <Header css={centered}>
          <h1>Hello!</h1>
        </Header>
        <Main css={centered}>
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
        <Footer css={centered}>
          <small>(c) Roman Kollatschny - 2018</small>
        </Footer>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
