import React,{useState, useEffect} from 'react';
import { Row, Col } from 'antd'
import Footer from '../Components/Footer'
import Loading from '../Components/Loading'
import Principales from '../Components/Principales'
import useFetch from '../hook/useFetch'
import Grafica from '../Components/Grafica'



export default  () => {

  // const bestRepos = useFetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
  const bestRepos = useFetch('https://api.github.com/search/repositories?q=sort=stars&order=desc')
  const data = bestRepos.result
 
  return (
  data ? (
    <>
      <Row>
        <Col span={24}>
          <Grafica data={data} /> 
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Principales data={data} />
        </Col>
      </Row>
      <Footer />
    </>
  ) : (
    <Col span={24}><Loading /></Col>
    )
    )
    
  }
