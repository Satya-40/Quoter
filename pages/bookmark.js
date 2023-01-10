import React, { Fragment } from 'react'
import Bookmarked from '../components/Bookmarked'
import Navbar from '../components/Navbar'

const bookmark = () => {
  return (
    <Fragment>
      <Navbar />
      <Bookmarked />
    </Fragment>
  );
}

export default bookmark