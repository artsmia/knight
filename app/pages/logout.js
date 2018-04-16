import React, {Component} from 'react'
import Template from '../components/shared/Template'
import router from 'next/router'
import {Loading} from '../components/mia-ui/loading'
import withData from '../apollo'


class Logout extends Component {

  render() {
    return (
      <Template>
        <Loading/>
      </Template>

    )
  }

  componentDidMount(){
    try {
      localStorage.removeItem('userId')
      localStorage.removeItem('idToken')
      router.replace('/')


    } catch (ex) {
      console.error("localStorage error")
    }

  }

}


export default withData(Logout)
