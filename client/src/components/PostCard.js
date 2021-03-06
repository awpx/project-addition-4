import React from 'react'
import { Card } from 'react-bootstrap' 
import { Link } from 'react-router-dom'

export const PostCard = ({ post }) => {
  return (
    <Card className='my-4 rounded'>
      <Link to={`/post/${post._id}`}>
        <Card.Img src={post.image} variant='top' style={{maxHeight: "400px"}} />
      </Link>

      <Card.Body>
      <Link to={`/post/${post._id}`}>
        <Card.Title as='div'>
          <h2 style={{color: '#343a40'}}>{post.title}</h2>
        </Card.Title>
      </Link>

      <Card.Text as='div'>
        <h5 className='text-muted'>{post.description}</h5>
      </Card.Text>
      <Card.Text as='div'>
        <h6 className='text-muted'><i className="fas fa-user"></i>{' '}{post.author}</h6>
      </Card.Text>
      <Card.Text as='div'>
        <h6 className='text-muted'><i className="fas fa-hashtag"></i>{' '}{post.tags}</h6>
      </Card.Text>
      <Card.Text as='div'>
        <h6 className='text-muted'><i className="far fa-calendar-alt"></i>{' '}{post.date.substring(0, 10)}</h6>
      </Card.Text>
      </Card.Body>
    </Card>
  )
}
