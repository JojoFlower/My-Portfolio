import { Component } from 'react'
import { Row, Col, Typography, Button } from 'antd'
import './style.less'

const { Title } = Typography
const Card = props =>
  <Col xs={22} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 * (props.nb % 2) }} style={
    { marginTop: 32, minHeight: 312, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <img src={props.src} alt={props.projectName} style={{ maxHeight: 400, width: '100%' }} />
    <Row style={{ position: 'absolute' }}>
      <Col xs={24}>
        <Title level={3} style={{ textAlign: 'center', color: '#262626' }}>{props.projectName}</Title>
      </Col>
      <Col xs={24} style={{ textAlign: 'center' }}>
        <Button type='primary' shape='round' size='small'>
          <a href={props.url} target='_blank'>Learn More</a>
        </Button>
      </Col>
    </Row>
  </Col>

export default class Projects extends Component {
  render () {
    return (
        <>
          <Row type='flex' align='middle' style={{ marginTop: 32 }}>
            <Col xs={24}>
              <Title level={2} style={{ textAlign: 'center', color: '#91d5ff' }}underline>
                Projects
              </Title>
            </Col>
          </Row>
          <Row type='flex' align='middle' justify='center' className='projects'>
            <Card
              nb={0}
              projectName='WiBot: A Tiny Voice-Controlled Robot'
              src='https://raw.githubusercontent.com/ProjetSolideP12/Projet-de-synthese-P12/master/img/transmitter_bb.png'
              url='https://github.com/JojoFlower/Projet-de-synthese-P12' />
            <Card
              nb={1}
              projectName='Image Colorization'
              src='https://camo.githubusercontent.com/9690a518cb5f9cd51d6bff579a50c879ac9d668c/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a4b5258784141786c427a31707352764231616b3034512e706e67'
              url='https://github.com/JojoFlower/Image-Colorization' />
            <Card
              nb={2}
              projectName='Django Rest API'
              src='https://camo.githubusercontent.com/49f66d9f0149cef29e8dd4ddb26bb15749d8f364/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732322f312a4d512d4c6638746d7466612d70756d4e3253683063772e706e67'
              url='https://github.com/JojoFlower/JB-Engine-Challenge' />
            <Card
              nb={3}
              projectName='Connected Keychain'
              src='https://www.elektor.fr/media/catalog/product/cache/5cf0cd67d985c5a2729a2007397294b6/e/s/esp32-devkitc.jpg'
              url='https://github.com/JojoFlower/ConnectedKeychain' />
          </Row>
        </>
    )
  }
}
