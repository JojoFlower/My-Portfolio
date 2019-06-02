import { Component } from 'react'
import { Layout, Icon, Row, Col, Typography } from 'antd'
import './style.less'

const { Footer } = Layout
const { Title } = Typography

export default class FooterComponent extends Component {
  render () {
    return (
      <Footer style={{ marginTop: 64 }}>
        <Row type='flex' justify='center'>
          <Col xs={16} sm={10} lg={6} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <a href='https://www.linkedin.com/in/jo%C3%ABl-nguesson-900512155/' target='_blank'>
              <Icon type='linkedin' theme='filled' style={{ color: '#fff', fontSize: 32, cursor: 'pointer' }} />
            </a>
            <a href='mailto: nguessonjoel@gmail.com' target='_blank'>
              <Icon type='mail' theme='filled' style={{ color: '#fff', fontSize: 32, cursor: 'pointer' }} />
            </a>
            <a href='https://github.com/JojoFlower' target='_blank'>
              <Icon type='github' theme='filled' style={{ color: '#fff', fontSize: 32, cursor: 'pointer' }} />
            </a>
          </Col>
        </Row>
        <Row type='flex' justify='center'>
          <Col xs={24}>
            <Title level={4} style={{ color: '#fff', textAlign: 'center', marginTop: 16, fontSize: 16 }}>Joël Nguesson ©2019</Title>
          </Col>
        </Row>
      </Footer>
    )
  }
}
