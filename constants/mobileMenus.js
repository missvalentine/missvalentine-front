import { AiOutlineUser } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import ReactSVG from 'react-svg';
const mobileMenus = [
  {
    icon: <ReactSVG src="" />,
    action: 'input',
    input: {
      type: 'text',
      action: 'seach',
    },
  },
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
    label: 'Catalogue',
    link: '/e-catalogue',
    action: 'link',
  },
];
export default mobileMenus;
