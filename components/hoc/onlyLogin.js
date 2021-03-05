import dynamic from 'next/dynamic'
import Router from 'next/router'
const Loader = dynamic(() => import("../Loader"));
const onlyLogin = (PassedComponent) => ({children, ...props }) => {
    if(!props.isPersist){
        return (
            <>
                <Loader />
                <PassedComponent {...props} >children</PassedComponent>
            </>
        )
    }else if(props.user && props.user._id){
        return <PassedComponent {...props} >children</PassedComponent>
    }
    Router.push("/")
    return <div />
}

export default onlyLogin