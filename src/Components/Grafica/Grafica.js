import React from 'react'
import { Line } from 'react-chartjs-2';

import './Grafica.sass'

export default (props) => {
  let mensaje = 'Populares'
  const { data, commits } = props

  let items = []
  let languages = ''

  if(!data) {
    console.log('aun no hay data')  
  } else {
     items = data.items.map( item  => item.score)
     languages = data.items.map( item  => item.language ).filter( element => element != null)
     if(items[0] === 1 ){
      items = data.items.map( item  => item.forks)
      languages = data.items.map( item  => item.owner.login )
     }
  }

  if(commits != null){
    mensaje = 'Commits a Github'
    items = commits.slice(0,10).map((item) => item[1])
    languages = commits.slice(0, 10).map((i, index) => `Semana ${index + 1}`)
    console.log(items)
  }
  
  const dataGrafic = {
    labels: languages,
    datasets: [
      {
        label: `${mensaje}`,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: items
      }
    ]
  };
  

  return (
    <>
      <div className="grafica">
        <Line
          data={dataGrafic}
          width={1}
          options={{ maintainAspectRatio: false }}
        /> 
     </div>
    </>
  )
}