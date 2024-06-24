import React , {useEffect , useState} from 'react'

function News() {

  const [news , setNews] = useState([]);

  useEffect(
    ()=>{
      fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f1a743c2c22742599126378694ef5da0`)
      .then(response => response.json())
      .then(data => {
        // console.log('Api Response :' ,data);
             setNews(data.articles);
    })
      .catch(error => {
        console.error('No news Found with this name', error);
      })
    } , [news]
  );




  return (
    <>
      <div className="mainDiv">
    {
      news.map(item => {

        return(
        <>
          <div className='newsDiv'>
            <img src={item.urlToImage} alt="image" />
            <h3 className='newsTitle'>{item.title}</h3>
            <p className='newsDetail'>{item.description}</p>
            <a className='newsURL' href={item.url} target='_blank'>Read More</a>
          </div>
        </>
        )
        })
        }
      </div>
    
    </>
  )
}

export default News;