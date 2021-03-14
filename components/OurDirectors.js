import React from 'react';
import VikasImage from '../assets/images/directors/Mr.VikasBabuJain.jpeg';
import PawanImage from '../assets/images/directors/Mr.PawanKumarJain.jpeg';
import SiddhartImage from '../assets/images/directors/Mr.Siddharthjain.jpeg';

export default function OurDirectors() {
  const directors = [
    {
      name: 'Mr. Vikas Babu Jain',
      desc: 'M.D, MissValentine',
      img: VikasImage,
    },
    {
      name: 'Mr. Pawan Kumar Jain',
      desc: 'Director, MissValentine',
      img: PawanImage,
    },
    {
      name: 'Mr. Siddharth jain',
      desc: 'Director, MissValentine',
      img: SiddhartImage,
    },
  ];

  return (
    <div className="c-directors">
      <div className="c-directors__title"> Board of Directors</div>
      <div className="c-directors__subtitle">
        Our Team has deep expertise in the textile industries, having more than
        14 years of experience in manufacturing & marketing, and a passion for
        fundamentally improving & producing quality products
      </div>
      <div className="c-directors__cards">
        {directors.map((d, i) => (
          <div key={i} className="c-directors__cards-card">
            <img
              alt={'director ' + d.name}
              className="c-directors__cards-card-img"
              src={d.img}
            />
            <div className="c-directors__cards-card-name">{d.name}</div>
            <div className="c-directors__cards-card-desc">{d.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
