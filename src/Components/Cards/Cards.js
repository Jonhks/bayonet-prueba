import React from 'react'
import { Card } from 'antd';



export default (props) => {
  const { repo } = props
  const lenguaje = repo.language || "Sin lenguaje"
  return (
    <div style={{ background: '#ECECEC', padding: '20px' }}>
      <Card title={repo.full_name} bordered={false} style={{ width: 300 }}>
        <p>Usuario: {repo.owner.login}</p>
        <p>Lenguaje: {lenguaje}</p>
        <p>Forks: {repo.forks}</p>
        <p>Score: {repo.score}</p>
      </Card>
    </div>
  )
}