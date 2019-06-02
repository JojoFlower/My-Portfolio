import { Component } from 'react'
import { Layout } from 'antd'
import './style.less'

const { Footer } = Layout

export default class FooterComponent extends Component {
  render () {
    return (
      <Footer style={{ marginTop: 64 }} />
    )
  }
}
