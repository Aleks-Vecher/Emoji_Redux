import React from 'react'
import EmojiRow from '../EmojiRow'
import PropTypes from 'prop-types'

const EmojiContainer = ({load, items}) => {
  if (load) {
    return <p>Loading...</p>
  }
    return (
        items.map((item, index) => <EmojiRow title={item.title} symbol={item.symbol} key={index}/>
        )
    )
}

EmojiContainer.propTypes = {
  items: PropTypes.array,
  isLoaded: PropTypes.bool,
}

export default EmojiContainer
