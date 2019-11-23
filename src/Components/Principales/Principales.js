import React from 'react';
import { Col, Row } from 'antd'
import Cards from '../Cards'
import useFetch from '../../hook/useFetch'
import Loading from '../Loading'
import Grafica from '../Grafica'


import './Principales.sass'

export default (props) => {
  
  let data = 'Todos'
  
  const { value } = props

  if (value === 'Todos') {
    const bestRepos = useFetch('https://api.github.com/search/repositories?q=sort=stars&order=desc')
    data = bestRepos.result
    console.log(data)
  } else {
  const bestRepos = useFetch(`https://api.github.com/search/repositories?q=language:${value}&sort=stars&order=desc`)
  data = bestRepos.result
  }

return (
  <Row>
  <Col span={24} style={{ textAlign: "center", marginTop:25 }}>
    <h1 style={{fontZise: 35, fontWeigth: "bold"}} >
      Repositorios mas populares
    </h1>
  </Col>
  {data == null ? (
    <Row>
      <Col span={24}><Loading /></Col>
    </Row>
   ) : ( 
     <Row>
      <Row>
      <Col>
        <Grafica data ={data}/>
      </Col>
      </Row>
     {data.items.slice(0, 20).map(repo=>(
      <Col key={repo.id} span={8} className="card-repo">
        <Cards repo={repo} />
      </Col>
      ))}
    </Row>
  )}
</Row>
)

}