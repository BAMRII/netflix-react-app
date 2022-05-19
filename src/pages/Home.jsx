import React from 'react';
import Main from '../components/Main';
import requests from '../Requests';
import Row from '../components/Row';

function Home() {
  return (
    <>
    <Main />
    <Row rowID='1' title="UpComing" fetchUrl={requests.requestUpcoming} />
    <Row rowID='2' title="Popular" fetchUrl={requests.requestPopular} />
    <Row rowID='3' title="Top Rated" fetchUrl={requests.requestTopRated} />
    <Row rowID='4' title="Trending" fetchUrl={requests.requestTrending} />
    <Row rowID='5' title="Horror" fetchUrl={requests.requestHorror} />
    </>
  )
}

export default Home