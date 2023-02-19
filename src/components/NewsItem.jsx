import React from 'react'

function NewsItem ({item}) {
    
    const websiteUrl = item.url
    const website  = websiteUrl.split('https://').pop().split('/')[0]

    const date = item.publishedAt
    const formatDate = date.replace('T',' ')
    const formatTime = formatDate.replace('Z',' ')

  return (
    <a  href='' className='article'>
        <div className='article-image'>
            <img src={item.urlToImage} alt={item.title} />
        </div>
        <div className="artile-content">
          <div className="article-source">
            <img src={`https://png.pngitem.com/pimgs/s/555-5553390_cnn-icon-clipart-svg-freeuse-stock-cnn-international.png${website}`} alt={item.source.id} />
            <span>{item.source.name}</span>
          </div>
          <div className="article-title">
            <h2></h2>
          </div>
          <p className="article-description">
            {item.description}
          </p>
          <div className="article-details">
            <small><b>Published At: </b>{formatTime}</small>
          </div>
        </div>
    </a>
  )
}

export default NewsItem
