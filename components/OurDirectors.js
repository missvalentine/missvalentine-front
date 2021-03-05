import React from 'react';

export default function OurDirectors() {
  const directors = [
    {
      name: 'Vikas Jain',
      desc: 'Have 10year + experinece in same field',
      img:
        'https://lh3.googleusercontent.com/proxy/YMp4w6Y3nCxW6BzhO8CqEOqi-mY_Rhy9cGz6q5YdjmAxkvBL9C-ah1m8ICcV1y0pwgKzCElGiiEqKLxF13GOaQ-c7EgVWAHQZcYm1Bi6sn19L2OhuO6gaA',
    },
    {
      name: 'Sidhart Jain',
      desc: 'Have 10year + experinece in same field',
      img:
        'https://user-images.githubusercontent.com/5709133/50445980-88299a80-0912-11e9-962a-6fd92fd18027.png',
    },
    {
      name: 'Vikas Jain',
      desc: 'Have 10year + experinece in same field',
      img:
        'https://lh3.googleusercontent.com/proxy/YMp4w6Y3nCxW6BzhO8CqEOqi-mY_Rhy9cGz6q5YdjmAxkvBL9C-ah1m8ICcV1y0pwgKzCElGiiEqKLxF13GOaQ-c7EgVWAHQZcYm1Bi6sn19L2OhuO6gaA',
    },
  ];

  return (
    <div className="c-directors">
      <div className="c-directors__title"> Our Directors</div>
      <div className="c-directors__cards">
        {directors.map((d, i) => (
          <div key={i} className="c-directors__cards-card">
            <img
              alt={'director ' + d.img}
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
