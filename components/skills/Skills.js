import { Component } from 'react'
import { Row, Col, Typography } from 'antd'
import './style.less'

const { Title, Paragraph } = Typography

export default class Skills extends Component {
  render () {
    return (
      <>
        <Row type='flex' align='middle' style={{ marginTop: 32 }}>
          <Col xs={24}>
            <Title level={2} style={{ textAlign: 'center', color: '#91d5ff' }}underline>
            Skills
            </Title>
          </Col>
        </Row>
        <Row type='flex' align='middle' justify='center' className='skills-content' style={{ marginTop: 25 }}>
          <Col xs={22} md={10} xxl={8} style={{ padding: 40, borderRadius: 16, marginBottom: 16 }}>
            <Paragraph style={{ fontSize: 18 }}>
            As an engineering student from a top-tier French "Grandes Écoles",<br /><br />
            I followed a high-level training in fundamental and applied sciences, as well as more transversal disciplines such as project management, economics or corporate law.<br /><br />
            These multidisciplinary skills allow me to solve complex problems.<br /><br />
            My final year specialization is in Machine Learning, Mathematics & Robotics.
            </Paragraph>
          </Col>
          <Col xs={22} md={{ span: 10, offset: 1 }} xxl={{ span: 8, offset: 2 }} style={{ padding: 0, borderRadius: 16, marginBottom: 16 }}>
            <img src='../../static/mathematics-illustration.jpg' alt='science-illustration' style={{ width: '100%' }} />
          </Col>
        </Row>
      </>
    )
  }
}
