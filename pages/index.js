import { Component } from 'react'
import { Layout } from 'antd'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'

const { Content } = Layout

export default class Homepage extends Component {
  render () {
    return (
      <Layout>
        <Header />
        <Content>
          <Banner />
        </Content>
      </Layout>
    )
  }
}
