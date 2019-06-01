import { Component } from 'react'
import { Layout, Avatar } from 'antd'
import './style.less'

const { Header } = Layout

export default class HeaderComponent extends Component {
  render () {
    return (
      <Header>
        <Avatar
          src='https://avatars0.githubusercontent.com/u/28368541?s=460&v=4'
          size='large'
          alt='my-github-avatar'
        />
      </Header>
    )
  }
}
