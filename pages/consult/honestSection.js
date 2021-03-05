import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'


function HonestSection() {
    return(
        <section className="honest-section-wrapper--consult">
        <p className="heading">HOW DOES CBD CONSULT WORK?</p>
          <div className="honest-container">
            <div className="img-wrapper">
               <LazyLoadImage src="/images/filter.svg" className="consult-svg"/>
               <p className="img-head-text">step 1</p>
               <p className="img-sub-text">Enter your medical history. We ensure your privacy and security.</p>
            </div>
            
             <LazyLoadImage className="arrow-svg" src="/images/arrow-right.svg" alt="right-arrow" /> 
            
            <div className="img-wrapper">
               <LazyLoadImage src="/images/photo.svg" className="consult-svg"/>
               <p className="img-head-text">step 2</p>
               <p className="img-sub-text">Confirm an appointment with Doctor</p>
            </div>

            <LazyLoadImage className="arrow-svg" src="/images/arrow-right.svg" alt="right-arrow" />
            
            <div className="img-wrapper">
               <LazyLoadImage src="/images/group.svg" className="consult-svg"/>
               <p className="img-head-text">step 3</p>
               <p className="img-sub-text">Get all your queries resolved by a professional medical practitioner.</p>
            </div>
          </div>
          </section>
        
    )
}

export default HonestSection