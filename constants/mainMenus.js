const mainMenus = [
  {
    label: 'Explore',
    link: '/products',
    action: 'link',
    subMenus: [
      {
        label: 'MissValentine Bra',
        link: '/category/?cid=topicals',
        action: 'link',
        as: '/category/topicals',
      },
      {
        label: 'MissValentine Panty',
        link: '/category/?cid=pets',
        action: 'link',
        as: '/category/pets',
      },
    ],
  },
  {
    label: <div>New&nbsp;Arrivals</div>,
    link: '/products',
    action: 'link',
  },
  {
    label: 'catalogue',
    link: '/e-catalogue',
    action: 'link',
  },
];
export default mainMenus;
