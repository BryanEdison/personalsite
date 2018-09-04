import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class BlueCore extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
            <h1>About</h1>
            <p>hey</p>
          </section>
        </div>

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
