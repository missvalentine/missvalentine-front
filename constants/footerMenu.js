import socialLinks from './socialLinks';
const footerMenu = [
  {
    heading: 'Company',
    menus: [
      {
        slug: '/e-catalogue',
        title: 'E-Catalogue',
      },
      {
        slug: '/contact',
        title: 'Contact Us',
      },
      {
        slug: '/#about-us',
        title: 'About Us',
      },
    ],
  },
  // {
  //     heading: "Company",
  //     menus: [
  //         {
  //             slug: "/track-order",
  //             title: "Track My Order"
  //         },
  //         {
  //             slug: "/ambassador-portal",
  //             title: "Affiliate Program"
  //         },

  //     ]
  // },
  {
    heading: 'Social',
    menus: [
      {
        slug: socialLinks.facebook || '#',
        title: 'Facebook',
      },
      {
        slug: socialLinks.youtube || '#',
        title: 'Youtube',
      },
      {
        slug: socialLinks.instagram || '#',
        title: 'Instagram',
      },
      {
        slug: socialLinks.twitter || '#',
        title: 'Twitter',
      },
    ],
  },
  {
    heading: 'Terms',
    menus: [
      {
        slug: '/privacy',
        title: 'Privacy and Cookies',
      },
      {
        slug: '/accessibility',
        title: 'Accessibility',
      },
    ],
  },
];

export default footerMenu;
