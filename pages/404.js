import { useEffect } from 'react'
export default function Custom404() {
    useEffect(()=>{
        const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML =  window.location.href = "/";
    document.body.appendChild(s);
    })

    return <script type="text/javascript"></script>;
  
  }

