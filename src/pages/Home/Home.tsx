import "../../index.css"
import React from 'react'
import PropTypes from 'prop-types'
import Welocome from "./components/welocome"
import TitlebarBelowMasonryImageList from "../../components/Masonry/TitlebarImages"

function Home(props:any) {
  return (
    <div className="main">
      <Welocome></Welocome>
      <TitlebarBelowMasonryImageList></TitlebarBelowMasonryImageList>
    </div>
  )
}

Home.propTypes = {}

export default Home
