import ReactSVG from 'react-svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const rightMenus = [
    
    {
        icon:<ReactSVG src="" />,
        action:"input",
        input:{
            type:"text",
            action:"seach"
        }
    },
    {
        icon: <LazyLoadImage src="/images/user-icon.png" width="18"/>,
        // link: "/user",
        action: "dropdown",
        onlyLogin: true,
        dropdownMenu: [
            {
                label: "My Account",
                link: "/account",
            },
            {
                label: "Logout",
                action: "logout"
            }
        ]
    },
    {
        icon: <LazyLoadImage src="/images/user-icon.png" width="18"/>,
        action: "reg",
        onlyLogin: false
    },
    {
        // icon: <ReactSVG src="/images/cart-icon-1.svg" />,
        // activeIcon: <ReactSVG src="/images/cart-icon-active.svg" />,
        isCart: true,
        action: "cart"
    },
]
export default rightMenus