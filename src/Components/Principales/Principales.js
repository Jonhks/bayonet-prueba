import React from 'react'
import { Col, Row } from 'antd'
import Cards from '../Cards'

import './Principales.sass'

export default (props) => {
  const { data: { items } }  = props
  return items.map(repo=>(
      <Col key={repo.id} span={8} className="card-repo">
        <Cards repo={repo} />
      </Col>
  ))

}