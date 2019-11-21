import React from 'react'
import { Doughnut, Bar } from 'react-chartjs-2';


export default (props) => {
  const { data } = props
  return (
    <>
      <Doughnut data={data} />
        {/* <Bar
          data={data}
          width={100}
          height={50}
          options={{ maintainAspectRatio: false }}
        /> */}
    </>
  )
}