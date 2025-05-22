import { useState } from 'react'
import './App.css'

import Product from "./Product2"
import Product2 from './Product2';
import MyComponent from './MyComponent';
import ParentCardLayout from './ParentCardLayout'
import Counter from './Counter';
import InputSample from './InputSample';
import InputMultipleSample from './InputMultipleSample';
import CounterRef from './ref/CounterRef';
import InputRef from './ref/InputRef';
import UserProfile from './profile/UserProfile';
import Form from './form/Form';

function App() {
  return (
    <>
      {/* <Card></Card> */}
      {/* <Product2 /> */}
      {/* <MyComponent name="React" >리액트</MyComponent> */}
      {/* <ParentCardLayout></ParentCardLayout> */}
      {/* <InputSample /> */}
      {/* <InputMultipleSample /> */}
      {/* <CounterRef /> */}
      {/* <InputRef /> */}
      {/* <UserProfile /> */}
      <Form />
    </>

  );
}
export default App;
