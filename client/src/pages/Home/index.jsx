import { useState } from 'react';
import ClassComponent from '../../components/ClassComponent';
import FuncComponent from '../../components/FuncComponent';
import Header from '../../components/Header';
import * as WS_API from '../../api/ws';

function HomePage() {
  return (
    <>
      <Header />
      <button onClick={() => WS_API.sendBtnClick()}>
        This will emit WS event
      </button>
    </>
  );
}

export default HomePage;
