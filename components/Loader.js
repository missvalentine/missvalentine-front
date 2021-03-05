import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames';
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = (
    <LoadingOutlined style={{ fontSize: 50, color: "black" }} spin />
  );
class Loader extends Component {
    render() {
        return (
            <div className='c-loader' style={{backgroundColor:"white",height:"100vh"}}>
                <div style={{ textAlignLast: "center",marginTop: "40rem"}} 
                className={classNames("loader__bg",{
                    [this.props.hideThis] : this.props.hideThis
                })}>
                <Spin indicator={antIcon} />
                {/* <img src={logo} alt="loading..." /> */}
                </div>
                {/* <style jsx>{`
                    .c-loader{
                        display: flex;
                        position: fixed;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        align-items: center;
                        justify-content: center;
                        z-index: 999;
                        background: rgba(0,0,0,.3);
                    }
                    .c-loader__inner{
                        background: black;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                    }
                `}</style> */}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isLoading: state.loading.isLoading
})
export default connect(mapStateToProps)(Loader)