import React from 'react'
import { Row, Col } from 'antd'
import useFetch from '../hook/useFetch'
import Footer from '../Components/Footer'
import Grafica from '../Components/Grafica'
import Loading from '../Components/Loading'
import { isAbsolute } from 'path'


export default  () => {
  const results =  useFetch('https://api.github.com/repos/facebook/react/stats/code_frequency')

  return (
    <>
      <Row> 
        {results == null ?  (
         <Row>
         <Col span={24}><Loading /></Col>
       </Row>
          ) : (
        <Col span={24} style={{ height: "78vh"}} >
          <Grafica commits ={results.result}/> 
        </Col>
        )}
      </Row>
      <Footer  />
    </>
  )
}
