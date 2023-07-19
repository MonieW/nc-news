import { useParams } from 'react-router-dom'
import {getArticleByid} from '../Utils/api'
import { useState, useEffect } from 'react'

const ArticleById = () => {
  const {article_id} = useParams();
  const [article, setSingleArticle] = useState({});
  const[loading, setloading] = useState(true)

  useEffect(() => {
    setloading(true)
    getArticleByid(article_id)
    .then((articleData) => {
       setSingleArticle(articleData)
       setloading(false)
    })
    
  },[article_id])
  
  if(loading) {
    return <h3 className='loading'> Hang in there, just coming! </h3>
  }
  return (
    <>
  <section className="singlearticle">
    <h1 className='articletitle'>{article.title}</h1>
    Topic: {article.topic}
    <br/>
    <br/>
    <img src={article.article_img_url} alt="picture relating to article" />
    <br/>
    <br/>
    {article.body}
    <br/>
    <br/>
    Author: {article.author} 
    <br/>
    Comments: {article.comments}
    <br/>
    Votes: {article.votes}

    
   
 
  
  

  </section>
  </>
  )
};

export default ArticleById;
