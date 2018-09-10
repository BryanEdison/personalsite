import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../components/Header';
import pic01 from '../assets/images/me.jpg'


class BlueCore extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
      <Header/>

      <header className="major">
                  <h2>Hi BlueCore!</h2>
                </header>
        <div id="main">
            <p>I'm sincerely interested in working for you. I missed the chance to formally meet you Fullstack's launch day but I hope that's not a deterrent in applying. It was great meeting you John and Andrew!</p>
            <p>I graduated from Fullstack 3 months ago am currently a Software Engineer at SploreGuide, a tourism marketplace startup. I'm currently working on building out their React/React-Native front-end and integrating it with their MongoDB/GraphQL backend. </p>
        </div>
        <span className="image"><img src={pic01} alt="" /></span>
      </div>
    )
  }
}

export default BlueCore

export const pageQuery = graphql`
  query BlueCoreQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
