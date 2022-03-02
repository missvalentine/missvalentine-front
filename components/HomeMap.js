import React from 'react';
import dynamic from 'next/dynamic';
// import { Image } from 'antd';
import office from '../assets/images/home/office1.jpeg';

export default function HomeMap() {
  return (
    <div className="c-homemap">
      <div className="c-homemap__title"> Locate Us</div>
      <div className="c-homemap__map">
        <iframe
          title="map"
          width="100%"
          height="350"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          className="c-homemap__map-map"
          src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=28.787710189819336,77.28255462646484+(MissValentine%20Innerwear)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        {/* <a href="https://www.mapsdirections.info/en/measure-map-radius/">
          Radius distance map
        </a> */}
        <div className="c-homemap__map-address">
          {/* <strong>Missvalentine Innerwear Pvt. Ltd</strong> */}
          <div className="c-homemap__map-address__paper">
            <strong>Office</strong>
            <br />G-238, Sector D-1 (P-3), Tronica city, Loni Ghaziabad,
            <br /> Uttar Pradesh 201102
            {/* Gst number 09AAOCM2032R1ZV */}
          </div>
          <div className="c-homemap__map-address__paper">
            <strong>Registered office</strong>
            <br /> E-6A/235 k.H no-1435 E- Block Gali no 6A Sangam Vihar,
            <br /> New Delhi 110080 INDIA.
          </div>
          <div>
            {/* <img className="c-homemap__map-address__img" src={office} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
