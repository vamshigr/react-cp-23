import React, {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {useParams} from 'react-router-dom'

export default function BlogItem() {
  const {id} = useParams()
  const [singlePost, setSinglePost] = useState({})

  useEffect(() => {
    fetch(`https://apis.ccbp.in/blogs/${id}`)
      .then(res => res.json())
      .then(res => setSinglePost(res))
      .catch(error => console.error('Error fetching data:', error))
  }, [id])

  return (
    <div>
      {singlePost.title ? (
        <>
          <h1>{singlePost.title}</h1>
          <figure>
            <img src={singlePost.avatar_url} alt={singlePost.author} />
            <figcaption>{singlePost.author}</figcaption>
          </figure>
          <img src={singlePost.image_url} alt={singlePost.title} />
          <p>{singlePost.content}</p>
        </>
      ) : (
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      )}
    </div>
  )
}
