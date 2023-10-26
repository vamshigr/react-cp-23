import './index.css'
import UserInfo from '../../components/UserInfo'
import {useEffect, useState} from 'react'
import BlogList from '../../components/BlogList'

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://apis.ccbp.in/blogs')
      .then(res => res.json())
      .then(res => setPosts(res))
  }, [])

  const postsArray = posts.map(item => <BlogList key={item.id} item={item} />)

  return (
    <div className="home-container">
      <UserInfo />
      {postsArray}
    </div>
  )
}

export default Home
