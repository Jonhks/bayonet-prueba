import React from 'react';
import { Select } from 'antd';
import { Row, Col } from 'antd'
import Principales from '../Principales'


import './SelectComponent.sass'


export default () => {
  
  const { Option } = Select;

  const  onChange = (value) => {
    console.log(value)
  }
  
  return (
    <Row>
      <Col span={4} offset={20}>
        <Select
          showSearch
          style={{ width: 200 , left: 0}}
          placeholder="Select a language"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="todos">Todos</Option>
          <Option value="Javascript">JavaScript</Option>
          <Option value="Go">Go</Option>
          <Option value="Ruby">Ruby</Option>
          <Option value="Python">Python</Option>

        </Select>
      </Col>
    </Row>
  )

}