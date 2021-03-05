import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../../components/Layouts/Layout'), {
  ssr: false,
});
import Router from 'next/router';
import { connect } from 'react-redux';
const Heading = dynamic(() => import('../../components/Heading'), {
  ssr: false,
});
const TitleList = dynamic(() => import('../../components/TItleList'), {
  ssr: false,
});
const DrCardLong = dynamic(
  () => import('../../components/doctors/DrCardLong'),
  {
    ssr: false,
  }
);
import { getName } from '../../services/helpers/DoctorHelpers';
import doctorData from '../../public/api/beneGetDoctor.json';
import parser from 'html-react-parser';
import { setCurrentAppointment } from '../../redux/actions';
import { LazyLoadImage } from 'react-lazy-load-image-component';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // activeCategory: "Featured",
      // allProducts: props.products.products || [],
      // products: props.products.featured || []
    };
  }
  // static getInitialProps = async () => {
  //     const res = await fetch(apiList.getDoctors)
  //     const doctors = await res.json()
  //     return {
  //         doctors: doctors.data.filter((e, i )=> i < 2 )
  //     }
  // }
  componentDidMount() {
    console.log({
      props: this.props,
      doctorData,
    });
  }
  componentDidUpdate(prevProps) {
    // console.log({
    //   currentAppointment: this.props.currentAppointment
    // });
    if (prevProps.currentAppointment !== this.props.currentAppointment) {
      if (this.props.currentAppointment) {
        Router.push('/consult/details');
      }
    }
  }
  onAppointment = (appointment, evt, doctor) => {
    console.log({
      evt,
      Router,
      appointment,
      doctor,
    });
    const { appointments, ...rest } = doctor;
    if (appointment) {
      this.props.setCurrentAppointment({
        ...appointment,
        doctorName: getName(doctor),
        doctor: {
          ...rest,
        },
      });
    }
  };
  toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  render() {
    // const {
    //   activeCategory, products
    // } = this.state
    console.log(this.props);
    const { doctors } = this.props;
    return (
      <Layout
        className="c-consult-page"
        title="Consult"
        headerTheme="dark"
        fixed={true}
      >
        {/* <Banner
          //image="/images/consult.jpg"
          image="../"
          heading={
            <span>
              Consult a certified <br />
              doctor about CBD
            </span>
          }
          parentClass="c-consult-page"
          versions={[
            "hf-content",
            "align-left",
            "align-bottom",
            "heading-l-br",
            "btm-logo",
            "content",
            "no-overlay",
            "black-heading"
          ]}
          // extraButton={
          //   <Button versions={["outline", "block"]}>
          //     Get in touch
          //   </Button>
          // }
          content={
            <span>
              Get in touch with our doctors who have experience with CBD
            </span>
          }
        ></Banner> */}

        {
          <div className="get-in-touch-banner-wrapper">
            <div className="get-in-touch-banner-wrapper-content">
              <div className="get-in-touch-banner-wrapper-content-heading">
                get in touch with our doctors
              </div>
              <div className="get-in-touch-banner-wrapper-content-subHeading">
                who have experience with CBD
              </div>
            </div>
          </div>
        }
        {
          // <Banner
          //   image="/images/getintouch.png"
          //   mobileImage="/images/getintouch.png"
          //   versions={["black-heading"]}
          //   hide="lorem"
          //   heading={parser("get in touch with our doctors")}
          //   content={parser("who have experience with CBD")}
          // >
          // </Banner>
        }

        <div
          className="c-consult-page__container overflow-hidden "
          style={{ paddingBottom: '0px', paddingTop: '0px' }}
        >
          <div className="">
            <div className="c-consult-page__headWrapper">
              <div className="c-consult-page__headWrapper__upper">
                <Heading parentClass="c-consult-page__headWrapper__upper1">
                  SELECT A DOCTOR LICENSED TO PRACTICE IN YOUR STATE
                </Heading>
              </div>
              <div className="c-consult-page__headWrapper__lower">
                <Heading subHeading={true} parentClass="c-consult-page">
                  Schedule your appointment and pay for your visit.
                </Heading>
              </div>
            </div>
            <div className="">
              <div className="c-consult-page__dr-card-wrapper">
                {doctors.map((doctor, key) => {
                  const { picture } = doctor;
                  const image = picture.length > 0 ? picture[0] : '';
                  return (
                    <DrCardLong
                      onAppointment={(appointment, evt) =>
                        this.onAppointment(appointment, evt, doctor)
                      }
                      doctor={doctor}
                      image={image}
                      key={key}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="c-consult-page__container c-consult-page__container--white c-consult-page__container--not-full c-consult-page__container--doc-you-can-trust">
          <div className="col-12 d-flex flex-column ">
            <div className="mt-auto">
              <Heading
                parentClass="c-consult-page"
                versions={['center', 'large']}
              >
                Doctors you can trust
              </Heading>
              <br />
              <br />
            </div>
            <div className="c-consult-page__lists c-consult-page__lists--trust mt-auto mb-auto">
              <div className="doc-container">
                <div className="doc-row">
                  <div>
                    <LazyLoadImage
                      src="/images/briefcase.png"
                      // style={{ marginLeft: "90px", marginBottom: "20px" }}
                    />
                    <TitleList
                      versions={['title-underline']}
                      parentClass="c-consult-page"
                      title="Professional"
                    >
                      {/* Visit a doctor, counselor, psychiatrist or dermatologist
                      by mobile app, video or phone. */}
                    </TitleList>
                  </div>
                  <div className="">
                    <LazyLoadImage
                      src="/images/unlock.png"
                      // style={{ marginLeft: "90px", marginBottom: "20px" }}
                    />
                    <TitleList
                      versions={['title-underline']}
                      parentClass="c-consult-page"
                      title="Accessible"
                    >
                      {/* Speak to a medical professional easily via the web or
                      phone. */}
                    </TitleList>
                  </div>
                  <div className="">
                    <LazyLoadImage
                      src="/images/medal.png"
                      // style={{ marginLeft: "90px", marginBottom: "20px" }}
                    />
                    <TitleList
                      versions={['title-underline']}
                      parentClass="c-consult-page"
                      title="Experienced"
                    >
                      {/* Our doctors have an average of{" "}
                      <b>15 years of experience.</b> */}
                    </TitleList>
                  </div>
                  <div className="">
                    <LazyLoadImage
                      src="/images/dolla.png"
                      // style={{ marginLeft: "90px", marginBottom: "20px" }}
                    />
                    <TitleList
                      versions={['title-underline']}
                      parentClass="c-consult-page"
                      title="Affordable"
                    >
                      {/* Our consult costs only <b>$49.00.</b> */}
                    </TitleList>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-consult-page__container c-consult-page__container--black c-consult-page__container--not-full c-consult-page__container--medical-licensure">
          <div className="" style={{ maxWidth: '100%' }}>
            <div className="text-center">
              <Heading versions={['dark']} parentClass="c-consult-page">
                <div
                  className="c-consult-page__header"
                  style={{
                    letterSpacing: '2px',
                    fontFamily: 'futuraBT-book',
                    // fontSize: '34px',
                    marginLeft: '32px',
                  }}
                >
                  All OF OUR PROVIDERS ARE VERIFIED FOR
                </div>
                <div
                  className="c-consult-page-banner-lower"
                  style={{
                    borderBottom: 'solid 2.5px #e4e4e4',
                  }}
                >
                  medical licensure, work history and education.
                </div>
              </Heading>
            </div>
          </div>
        </div>

        <div
          className="consult-doc-banner-wrapper"
          style={{
            padding: '2rem 0 ',
          }}
        >
          <button className="top-btn" onClick={() => this.toTop()}>
            BACK TO TOP{' '}
            <LazyLoadImage
              className="top"
              style={{ height: '20px', marginBottom: '5px' }}
              src="/images/arrow-up.png"
              alt="to-top"
            />
          </button>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  currentAppointment: state.appointment.currentAppointment,
});
Contact.defaultProps = {
  doctors: [...doctorData.data],
};
export default connect(mapStateToProps, {
  setCurrentAppointment,
})(Contact);
