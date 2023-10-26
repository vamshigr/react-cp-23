// Write your JS code here
import {Link} from 'react-router-dom'
export default function BlogList({item}) {
  return (
    <>
      <Link to={`blogs/${item.id}`}>
        <article>
          <img src={item.image_url} />
          <div>
            <p>{item.topic}</p>
            <p>{item.title}</p>
            <figure>
              <img src={item.avatar_url} />
              <figcaption>{item.author}</figcaption>
            </figure>
          </div>
        </article>
      </Link>
    </>
  )
}
