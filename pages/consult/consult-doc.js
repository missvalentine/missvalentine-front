import React, { Component } from 'react';import dynamic from 'next/dynamic'

const Button = dynamic(() => import("../../components/form-components/Button"), {
  ssr: false,
});
import {Rate} from 'antd';
import { getName, getAddress, getTaxonomy , getSlug } from "../../services/helpers/DoctorHelpers";
import doctorData from "../../public/api/beneGetDoctor.json";
import { LazyLoadImage } from 'react-lazy-load-image-component';

class ConsultDoc extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    };
  }
  
  render()
  {
    console.log(doctorData.data) 
    const {
      doctors
  } = this.props;
  console.log(this.props)
  const title     = getName(doctors).toLowerCase()
  const address   = getAddress(doctors).toLowerCase()
  const taxonomy  = getTaxonomy(doctors)
  // const slug = getSlug(doctors).toLowerCase()
  const review = parseFloat((Math.random() + 4).toFixed(1))
  const totalReview = parseInt((Math.random() * 100))
  console.log(title)
    return(
    
        <section className="consult-page-doc-banner-wrapper">
        <p className="heading">OUR DOCTORS</p>
        <p className="sub-heading">Your complete wellness is ensured by certified doctors who can be consulted from the comfort of your couch.<br/>
         You can ask them about all your CBD related queries and ensure a healthy dosage.</p>
           <div className="consult-doc-card"> 
           {doctors.map((doctor, key) => {
                  const { picture } = doctor;
                  const image = picture.length > 0 ? picture[0] : "";
                  return (
                    
                    <div className="consult-doc-img">
                    <div className="consult-doc-img--cont">
                     <LazyLoadImage src={picture}/>
                     <div className="rating1">
                       {/* <img src="https://static.thenounproject.com/png/1149720-200.png" alt="rating"/> */}
                       <Rate disabled={true} value={review} className="c-dr-card-long__rate" allowHalf={true} style={{ color: '#000' }} />
                       <span>{totalReview} reviews({review})</span>
                     </div>
                     <div className="doc-name">
                  <p className="doc-name--upper">{doctor.basic.name_prefix}{doctor.basic.name}</p>
                       <p className="doc-name--lower">{doctor.taxonomies[0].desc}</p>
                     </div>
                     <Button
                       type="link"
                       link="/consult/get-in-touch"
                       versions={["dark"]}
                       className="consult-button"
                     >Consult</Button>
                    </div>
                    </div>
                    
                  );
                })}
                </div> 
        
        
           
      </section>
    )}
}

ConsultDoc.defaultProps = {
  doctors: [...doctorData.data]
};

export default ConsultDoc