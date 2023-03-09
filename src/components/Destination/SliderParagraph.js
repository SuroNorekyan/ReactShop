import React from 'react';
import './sliderParagraph.css';

const SliderParagraph = (props) => {
  return (
    <>
     <div className='sliderParagraph'>
        
        <div className='spChild'>
            <p><b>{props.title}</b></p>
            <p>{props.description}</p>
        </div>
      
    </div>
    </>
   
  )
}

export default SliderParagraph
