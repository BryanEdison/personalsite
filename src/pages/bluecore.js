import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../components/Header';


class BlueCore extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
      <Header/>
        <div id="main">

            <h1>About</h1>
            <p>hey</p>
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
