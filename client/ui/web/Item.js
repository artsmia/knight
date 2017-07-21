import React, {Component} from 'react'
import styled from 'styled-components'
import ItemDrawer from './ItemDrawer'

class Item extends Component {
  render() {
    const {
      props,
      props: {
        groupTitle,
        item,
        item: {
          id
        }
      }
    } = this
    return (
      <Container>
        <ItemDrawer
          {...props}
        />
        <ImgContainer>
          <img
            src={`https://1.api.artsmia.org/${id}.jpg`}
          />
        </ImgContainer>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  height: 100%;
  width: 100%;
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  background-color: lightgrey;
`

export default Item
