import { Component } from 'react'
import { Layout } from 'antd'
import Header from '../components/header/Header'
import Skills from '../components/skills/Skills'
import Banner from '../components/banner/Banner'
import Footer from '../components/footer/Footer'
import Projects from '../components/projects/Projects'

const { Content } = Layout

export default class Homepage extends Component {
  render () {
    return (
      <Layout>
        <Header />
        <Content>
          <Banner />
          <Skills />
          <Projects />
        </Content>
        <Footer />
      </Layout>
    )
  }
}
