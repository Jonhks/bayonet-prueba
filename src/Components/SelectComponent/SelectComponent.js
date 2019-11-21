import React from 'react';
import { Select } from 'antd';
import { Row, Col } from 'antd'


import './SelectComponent.sass'


export default () => {
  
  const { Option } = Select;

  const  onChange = (value) => {
    const daseleccionta = `hola desde selected ${value}`
  }
  
  const onBlur = () => {
    console.log('blur');
  }
  
  const onFocus = () => {
    console.log('focus');
  }
  
  const onSearch = (val) => {
    console.log('search:', val);
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
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="todos">Todos</Option>
          <Option value="javascript">JavaScript</Option>
          <Option value="go">Go</Option>
          <Option value="ruby">Ruby</Option>
          <Option value="python">Python</Option>

        </Select>
      </Col>
    </Row>
  )

}