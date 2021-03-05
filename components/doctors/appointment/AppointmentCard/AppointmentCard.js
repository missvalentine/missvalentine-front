import dynamic from 'next/dynamic'
import React, { Component } from 'react'
import classNames from 'classnames'
import { Row, Col, Spin, Icon, Card } from 'antd';
const AppointmentSlider = dynamic(() => import("../AppointmentSlider"));
import getDatesFromArray from '../../../../services/scheduler/getDatesFromArray';
import CustomScroll from 'react-custom-scroll';
import 'react-custom-scroll/dist/customScroll.css'
export default class AppointmentCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dates: [],
            appointments: props.doctor.appointments,
            isLoading: false,
            visible: false,
            isPopup: false
        }
        this.tap = this.tap.bind(this)
    }
    componentDidMount() {
        document.removeEventListener('drag', () => {
            this.isDraging = true

            setTimeout(() => {

            }, 100);
        })
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    onDateChange = dates => {
        const doctorObj = this.props.doctor || {}// JSON.parse(localStorage.getItem("user"))
        
        const {
            _id: doctor
        } = doctorObj
        const limit = 3 // 5 
        const date = new Date(dates[0])
        this.setState({
            // isLoading: true,
            dates
        }, () => {
            // getAppointments({ doctor, limit, date })
            //     .then(res => {
            //         if (res.data && res.data.data) {
            //             const {
            //                 data
            //             } = res.data
            //             this.setState({
            //                 appointments: data,
            //                 isLoading: false
            //             })
            //         } else {
            //             this.setState({
            //                 isLoading: false
            //             })
            //         }
            //     })
            //     .catch(err => {
            //         this.setState({
            //             isLoading: false
            //         })
            //         console.log({ err })
            //     })
        })
    }
    tap() {
        console.log('something')
    }
    render() {
        const {
            title,
            className,
            parentClass,
            type,
            doctor
        } = this.props

        const { dates, appointments, isLoading } = this.state



        // const typeClass = getVersions(type, "c-appointment-card")
        const parent = `${parentClass}__appointment-card`
        return (
            <div className={classNames("c-appointment-card", {
                [className]: className,
                // [typeClass]: typeClass,
                [parent]: parentClass
            })}>
                <Card title={title}>
                    {doctor && <AppointmentSlider onDateChange={this.onDateChange} />}
                    <div className="c-appointment-card__scroll-wrapper">
                        <CustomScroll heightRelativeToParent="100%">
                            <Row type="flex" justify="center" className={classNames("c-appointment-card__scroll-row", {
                                "c-appointment-card__scroll-row--loading": isLoading
                            })}>
                                {!isLoading && <Dates appointments={appointments} onClick={(e, a) => {
                                    console.log('datedataher', {
                                        e, a
                                    })
                                    console.log('aid',a._id)
                                    if(typeof this.props.onAppointment === "function"){
                                        this.props.onAppointment(a, e)
                                    }
                                    // localStorage.setItem('timeslotid',a._id)
                                    this.setState({ isPopup: true })
                                    console.log('a obj', { e })
                                }} dates={dates} />}
                                {(isLoading || !doctor) && <Spin indicator={<Icon type="loading" style={{ fontSize: 50 }} spin />} />}
                            </Row>
                        </CustomScroll>
                    </div>
                    {/* <RoundedPopup width={900} onCancel={() => this.setState({ isPopup: false })} visible={this.state.isPopup} >
                        <AppointmentForm />
                    </RoundedPopup> */}
                </Card>
            </div>
        )
    }
}
const Dates = ({ appointments, dates, onClick }) =>{
    const customDates = [
        new Date("02-04-2020"),
        new Date("02-05-2020"),
        new Date("02-06-2020"),
    ]
    // remove customDates and use dates for real data
    return (customDates || dates).map((el, i) => {
        console.log({
            dates
        })
        if(typeof localStorage !== "undefined")
            localStorage.setItem('manualdate', el)

        const datesArr = getDatesFromArray(appointments, el);
        
        return (<Col className="c-appointment-card__date-col"  key={i} span={8} sm={6} >
            {datesArr.map((elx, i) =>
                <span key={i}
                    className={classNames("c-appointment-card__date-btn", {
                        "c-appointment-card__date-btn--disabled": !elx
                    })}
                    onClick={(e) => {
                        onClick(e, elx)
                        console.log('something', elx.date)
                        console.log(elx.bookedFor)
                        const moonLanding = new Date(elx.bookedFor);

                        console.log(moonLanding.getDate());
                        localStorage.setItem('timeslotid',elx._id)
                        localStorage.setItem('manualbookedfor',moonLanding)
                        localStorage.setItem('manualtime', elx.date)


                        //    this.showModal()
                        //    this.tap.bind(this)
                    }}
                >
                    {elx ? elx.date : ""}
                </span>
            )}
        </Col>)
    })
}
