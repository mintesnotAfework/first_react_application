import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './styles.css'

function Image({ url, page = 1, limit = 10 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(url) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  function handleLeft(){
    if(currentSlide != 0){
        setCurrentSlide(currentSlide-1);
    }
  }

  function handleRight(){
    if(currentSlide != limit - 1){
        setCurrentSlide(currentSlide + 1);
    }
  }
 

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);  

 if (loading) {
    return <div>Loading data please wait</div>;
  }

  if (errorMessage) {
    return <div>error occured</div>;
  }
  
  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handleLeft} className="arrow arrow-left" />
      {images && images.length
        ? images.map((e, i) => (
            <img
              src={e.download_url}
              alt={e.download_url}
              className={
                currentSlide === i?
                "current-slide":"hide-slide"
              }
              key={e.id}
            />
        ))
        : null}
      <BsArrowRightCircleFill onClick={handleRight} className="arrow arrow-right" />
      <span className="circle-indicator">
        {
            images && images.length
            ? images.map((e, i) => (
                <button className={currentSlide === i?"current-indicator":"hide-indicator"} key={e.id}></button>
            ))
            : null
          }
      </span>
    </div>
  );
}

export default Image;
