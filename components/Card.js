import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
    const quote = props.quote
    const author = props.author
    const bookmark = props.bookmark

  return (
    <React.Fragment>
        <div className={classes.box}>
            <div className={classes.quote}> {quote} </div>
            <div className={classes.author}> -{author} </div>
            {bookmark && bookmark}
        </div>
    </React.Fragment>
  )
}

export default Card