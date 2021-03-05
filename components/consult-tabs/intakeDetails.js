import React, { Component } from "react";
import { Button } from "antd";

export default class IntakeDetails extends Component {
  next = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;

    return (
      <form className="c-address-form">
        <div className="container-fluid">
          <div className="consult-form">
            <h5 className="c-intakeDetails__center c-intakeDetails__margin ">
              {" "}
              Allergies , Medications & Dietary Supplements
            </h5>
            <p className="c-intakeDetails__center">
              Please list the things you are allergic to here . For example:
              Pollen: Nasal congestion , Peanuts : Anaphylaxis, Strawberries:
              Hives, Etc. Please list your medications here. If possible ,
              please provide the dose , and when you take them . Example: Valium
              , 2 mg at night , 5 mg twice daily Please list your dietary
              supplements here . If possible , Please provide the dose , and
              when you take them . Example : Vitamin D , 400 IU daily, Magnesium
              300 mg twice daily
            </p>
            <br />
            <textarea
              className="c-input__input"
              value={values.allergies}
              placeholder="Allergies"
              onChange={this.props.handleChange("allergies")}
            ></textarea>
            {values.allergies_err && (
              <span className="error">{values.allergies_err}</span>
            )}
            <br />
            <h5 className="c-intakeDetails__center c-intakeDetails__margin">
              {" "}
              Current Condition and Medical History{" "}
            </h5>
            <p className="c-intakeDetails__center">
              Please list all the medical conditions, including surgeries and
              diagnoses, that you have experienced in the past or are currently
              experiencing.
            </p>

            <br />
            <textarea
              className="c-input__input"
              value={values.currentCondition}
              placeholder="Current Condition"
              onChange={this.props.handleChange("currentCondition")}
            ></textarea>
            {values.currentCondition_err && (
              <span className="error">{values.currentCondition_err}</span>
            )}
            <br />
            <div className="c-personalDetails__btn-wrap">
              <Button
                className="c-btn c-btn--dark"
                onClick={this.back}
                // versions={["outline", "block"]}
              >
                Back
              </Button>
              <Button className="c-btn c-btn--dark" onClick={this.next}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
