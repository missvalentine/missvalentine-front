import dynamic from "next/dynamic";
import React, { Component } from "react";
import { Card, Rate } from "antd";
import {
  getName,
  getAddress,
  getTaxonomy,
  getSlug,
} from "../../services/helpers/DoctorHelpers";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AppointmentCard = dynamic(() =>
  import("../../components/doctors/appointment/AppointmentCard/AppointmentCard")
);

class DrCardLong extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { doctor } = this.props;
    const title = getName(doctor).toLowerCase();
    const address = getAddress(doctor).toLowerCase();
    const taxonomy = getTaxonomy(doctor);
    const slug = getSlug(doctor).toLowerCase();
    if (address.trim() === "") return null;
    const review = parseFloat((Math.random() + 4).toFixed(1));
    const totalReview = parseInt(Math.random() * 100);
    return (
      <div className="c-dr-card-long">
        <Card className="c-dr-card-long__card" style={{ border: "none" }}>
          <div className="c-dr-card-long__card-inner">
            <div className="c-dr-card-long__left-col">
              <div className="c-dr-card-long__img-wrap">
                <LazyLoadImage
                  src={this.props.image}
                  className="c-dr-card-long__img img-fluid"
                  alt={title}
                />
              </div>
              <div className="c-dr-card-long__description">
                <div className="c-dr-card-long__rate-wrapper">
                  <Rate
                    disabled={true}
                    value={review}
                    className="c-dr-card-long__rate"
                    allowHalf={true}
                    style={{ color: "#000" }}
                  />
                  <p className="c-dr-card-long__rate-text">
                    {totalReview} reviews({review})
                  </p>
                </div>
                <div className="c-dr-card-long__detail">
                  <h3 className="c-dr-card-long__title">{title}</h3>
                  <p className="c-dr-card-long__designation">{taxonomy}</p>
                </div>
              </div>
            </div>
            <div
              className="c-dr-card-long__time-wrap"
              style={{ width: "100%" }}
            >
              {/* Dr. Andrew Fagelman is board certified with the American Board of Internal Medicine and current physician at SOHO Health NY. */}
              <AppointmentCard
                onAppointment={this.props.onAppointment}
                doctor={doctor}
              />
            </div>
            <hr />
            <p className="c-dr-card-long__address">{address}</p>
          </div>
        </Card>
      </div>
    );
  }
}

export default DrCardLong;
