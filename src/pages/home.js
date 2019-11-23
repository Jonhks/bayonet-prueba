import React, {useState} from 'react';
import { Row, Col } from 'antd'
import Footer from '../Components/Footer'
import Principales from '../Components/Principales'
// import useFetch from '../hook/useFetch'
// import Grafica from '../Components/Grafica'
// import SelectComponent from '../Components/SelectComponent'
import { Select } from 'antd';




export default  () => {
  // const {seleccion } = props

  return (
    <>
      <Row>
        <Col span={24}>
         <SelectComponent />
        </Col>
      </Row>
      <Footer />
    </>
    )
    
  }


  const SelectComponent = () => {
  const { Option } = Select;

  const [value, setValue] = useState('Todos')
    
    return (
      <>
      <Row>
        <Col span={4} offset={20}>
          <Select
            showSearch
            style={{ width: 200 , left: 0}}
            placeholder="Select a language"
            optionFilterProp="children"
            onChange={(event) => {
              setValue(event)
            }}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Todos">Todos</Option>
            <Option value="Javascript">JavaScript</Option>
            <Option value="Go">Go</Option>
            <Option value="Ruby">Ruby</Option>
            <Option value="Python">Python</Option>
          </Select>
        </Col>
      </Row>
      <Row>
        <Principales value={value} />
      </Row>
      </>
    )
  }
