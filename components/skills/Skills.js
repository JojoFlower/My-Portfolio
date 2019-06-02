import { Component } from 'react'
import { Row, Col, Typography } from 'antd'
import ReactSvg from '../../static/react.svg'
import ReduxSvg from '../../static/redux.svg'
import JavaScriptSvg from '../../static/javascript.svg'
import DjangoSvg from '../../static/django.svg'
import TensorFlowSvg from '../../static/tensorflow.svg'
import PythonSvg from '../../static/python.svg'
import UbuntuSvg from '../../static/ubuntu.svg'
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
        <Row type='flex' align='middle' justify='center' className='skills-content' style={{ marginTop: 24 }}>
          <Col xs={22} md={10} xxl={8} style={{ padding: 40, borderRadius: 16, marginBottom: 16 }}>
            <Paragraph style={{ fontSize: 18 }}>
            As an engineering student from a top-tier French "Grandes Écoles",<br /><br />
            I followed a high-level training in fundamental and applied sciences, as well as more transversal disciplines such as project management, economics or corporate law.<br /><br />
            These multidisciplinary skills allow me to solve complex problems.<br /><br />
            My final year specialization is in Machine Learning, Mathematics & Robotics.
            </Paragraph>
          </Col>
          <Col xs={22} md={{ span: 10, offset: 1 }} xxl={{ span: 8, offset: 2 }} style={{ padding: 10, borderRadius: 16 }}>
            <img src='../../static/mathematics-illustration.jpg' className='img-science' style={{ width: '100%' }} alt='science-illustration' />
          </Col>
        </Row>
        <Row type='flex' align='middle' justify='center' className='skills-content' style={{ marginTop: 32 }}>
          <Col xs={{ span: 22, order: 2 }} md={{ span: 10, order: 1 }} xxl={8} style={{ padding: 10, borderRadius: 16, marginBottom: 16 }}>
            <Row type='flex' align='middle' style={{ minHeight: 400 }}>
              <Col span={24} type='flex' align='middle' justify='center' className='illustrations'>
                <Row>
                  <Col xs={24}>
                    <img src={ReactSvg} alt='react-illustration' style={{ width: 70 }} />
                  </Col>
                </Row>
                <Row type='flex' justify='space-around'>
                  <Col xs={12}>
                    <img src={DjangoSvg} alt='django-illustration' style={{ width: 50 }} />
                  </Col>
                  <Col xs={12}>
                    <img src={JavaScriptSvg} alt='javascript-illustration' style={{ width: 60 }} />
                  </Col>
                </Row>
                <Row>
                  <Col xs={24}>
                    <img src={UbuntuSvg} alt='ubuntu-illustration' style={{ width: 60 }} />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <img src={ReduxSvg} alt='redux-illustration' style={{ width: 60 }} />
                  </Col>
                  <Col xs={12}>
                    <img src={PythonSvg} alt='python-illustration' style={{ width: 60 }} />
                  </Col>
                </Row>
                <Row>
                  <Col xs={24}>
                    <img src={TensorFlowSvg} alt='tensorflow-illustration' style={{ width: 60 }} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={{ span: 22, order: 1 }} md={{ span: 10, order: 2, offset: 1 }} xxl={{ span: 8, offset: 2 }} style={{ padding: 40, borderRadius: 16, marginBottom: 16 }}>
            <Paragraph style={{ fontSize: 18 }}>
              As a computer enthusiast a little geeky on the edges,
              I sometimes code stuff just for fun, alone in my cave XD<br /><br />
              But I also know how to work as a team to contribute to the success of project with major challenges.
            </Paragraph>
          </Col>
        </Row>
      </>
    )
  }
}
