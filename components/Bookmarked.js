import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Slices/quoteSlice'
import Card from './Card'

const Bookmarked = () => {
    const list =  useSelector(state => state.counter)
    const quoteList = list.value
    const dispatch = useDispatch()

  return (
    <Fragment>
        {quoteList.map((item)=>{return <Card quote={item.content} author={item.author}/>})}
    </Fragment>
  )
}

export default Bookmarked