import { Component } from 'react'
import MathSvg from '../../static/undraw_mathematics.svg'
import CodeSvg from '../../static/undraw_developer.svg'
import Particles from 'react-particles-js'
import { Row, Col, Typography } from 'antd'
import './style.less'

const { Title } = Typography

const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 4,
        color: '#bae7ff'
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#bae7ff',
      opacity: 0.4,
      width: 1
    }
  }
}

export default class Banner extends Component {
  render () {
    return (
      <Row className='banner' type='flex' align='middle' style={{ minHeight: '60vh', position: 'relative' }}>
        <Particles params={particleOpt} className='ant-col-xs-24 particles' />
        <Col xs={24} sm={12} lg={8} style={{ textAlign: 'center' }}>
          <img src={MathSvg} alt='maths-illustration' width='70%' />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Title style={{ color: '#096dd9', textAlign: 'center' }}>
            Hi, I'm Joël<br />
            I'm a French Engineer Student<br />
            &<br />
            a Full-Stack Developer
          </Title>
        </Col>
        <Col xs={0} lg={8} style={{ textAlign: 'center' }} >
          <img src={CodeSvg} alt='developer-illustration' width='80%' />
        </Col>
      </Row>
    )
  }
}
