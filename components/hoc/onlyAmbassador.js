import dynamic from 'next/dynamic'
import Router from 'next/router'
const Loader = dynamic(() => import("../Loader"));
import projectSettings from "../../constants/projectSettings"
const onlyAmbassador = (PassedComponent) => ({children, ...props }) => {
    if(!props.isPersist){
        return (
            <>
          
                <Loader />
            </>
        )
    }else if(props.ambassadoruser && props.ambassadoruser._id){
        return <PassedComponent {...props} >
           
            children
            </PassedComponent>
    }
    Router.push("/ambassador-portal/login")
    return <div />
}

export default onlyAmbassador