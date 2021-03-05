import { useState, useEffect } from "react";
import dynamic from 'next/dynamic'
const CheckoutLayout = dynamic(() => import("../components/Layouts/CheckoutLayout"), {
  ssr: false,
});
const Layout = dynamic(() => import("../components/Layouts/Layout"), {
  ssr: false,
});
const Heading = dynamic(() => import("../components/Heading"), {
  ssr: false,
});
import { Steps } from "antd";
const CheckoutInfo = dynamic(() => import("../components/checkout-tabs/CheckoutInfo"), {
  ssr: false,
});
import { addAddress, setEditable } from "../redux/actions";
import { connect } from "react-redux";
import projectSettings, { projectName } from "../constants/projectSettings";
import checkAddressDuplicate from "../services/helpers/address";
const CheckoutShipping = dynamic(() => import("../components/checkout-tabs/CheckoutShipping"), {
  ssr: false,
});
const CheckoutPayment = dynamic(() => import("../components/checkout-tabs/CheckoutPayment"), {
  ssr: false,
});
const Loader = dynamic(() => import("../components/Loader"), {
  ssr: false,
});
import Link from "next/link";
import { FullModal } from "../components/modal";
import ReactIcon from "react-icons-kit";
import { ic_clear } from "react-icons-kit/md/";
import Icon from "react-icons-kit";
import { ic_error_outline } from "react-icons-kit/md/";
import { LazyLoadImage } from "react-lazy-load-image-component";

const { baseUrl } = projectSettings;
const Checkout = ({ addAddress, user, isLoading, ...props }) => {
  const [activeAddress, setActiveAddress] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [infoDetails, setInfoDetails] = useState({});
  const [mainAddress, setMainAddress] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);
  const [shippingDetail, setShippingDetail] = useState(null);
  const [shippingSendData, setShippingSendData] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [failedRes, setFailedRes] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  const [order, setOrder] = useState(null);
  useEffect(() => {
    if (currentStep === 2) {
      if (props.isEditable) {
        props.setEditable(false);
      }
    } else {
      if (!props.isEditable) {
        props.setEditable(true);
      }
    }
  });

  const onInfoSubmit = async (e, values, address, addressShip) => {
    console.log("reached here");
    console.log({
      e,
      values,
    });
    console.log(address);
    const {
      newAddress,
      sameShipping,
      saveaddress,
      saveaddress_ship,
      newAddress_ship,
    } = values;
    let addresses = {},
      addressA = {},
      addressB = {};
    if (!newAddress) {
      if (sameShipping) {
        addressA = addressB = { ...values.addressSelect ? {...values.addressSelect} : {...address} };
        // addressB = { ...values.addressSelect };
        console.log("checkA 1 ",addressA);
      } else {
        if (!newAddress_ship) {
          addressA = { ...values.addressSelect ? {...values.addressSelect} : {...address} };
          addressB = { ...values.addressSelect_ship ? {...values.addressSelect_ship} : {...addressShip} };
          console.log("checkA 2",addressA);
        } else {
          const { addressSelect, addressSelect_ship, ...rest } = values;
          addressA = { ...addressSelect };
          const shippingData = { ...rest };
          addressB = {
            addressStr: `${shippingData["city-ship"]}, ${shippingData["state-ship"]}, ${shippingData["country-ship"]}, ${shippingData["zip-ship"]}`.trim(),
            city: `${shippingData["city-ship"]}`,
            country: `${shippingData["country-ship"]}`,
            email: shippingData.email,
            firstname: shippingData["firstname_ship"],
            lastname: shippingData["lastname_ship"],
            phone: shippingData["phone_ship"],
            state: shippingData["state-ship"],
            zip: shippingData["zip-ship"],
            other: `${shippingData["city-ship"]}, ${shippingData["state-ship"]}, ${shippingData["country-ship"]}`.split(
              "," || ""
            )[0],
          };
          console.log("checkA 3",addressA);
        }
      }
    } else {
      if (sameShipping) {
        const { email, phone } = values;
        addressA = addressB = {
          ...address,
          //...values,
          email,
          phone,
        };
        console.log("checkA 4",addressA);
      } else {
        if (!newAddress_ship) {
          addressA = { ...address, phone: values.phone, email: values.email };
          addressB = { ...values.addressSelect_ship };
        } else {
          addressA = { ...address, phone: values.phone, email: values.email };
          const shippingData = { ...values };
          addressB = {
            addressStr: `${shippingData["city-ship"]}, ${shippingData["state-ship"]}, ${shippingData["country-ship"]}, ${shippingData["zip-ship"]}`.trim(),
            city: `${shippingData["city-ship"]}`,
            country: `${shippingData["country-ship"]}`,
            email: shippingData.email,
            firstname: shippingData["firstname_ship"],
            lastname: shippingData["lastname_ship"],
            phone: shippingData["phone_ship"],
            state: shippingData["state-ship"],
            zip: shippingData["zip-ship"],
            other: `${shippingData["city-ship"]}, ${shippingData["state-ship"]}, ${shippingData["country-ship"]}`.split(
              "," || ""
            )[0],
          };
        }
      }
    } 
    // const {
    //   email,
    //   email_ship,
    //   firstname,
    //   firstname_ship,
    //   lastname,
    //   lastname_ship,
    //   phone,
    //   phone_ship,
    //   sameShipping,
    //   saveaddress,
    //   saveaddress_ship,
    //   addressSelect,
    //   addressSelect_ship,
    // } = values;
    // const addressA = {
    //   ...address,
    //   email,
    //   firstname,
    //   lastname,
    //   phone,
    // };
    // const addressB = {
    //   ...addressShip,
    //   email: email_ship,
    //   firstname: firstname_ship,
    //   lastname: lastname_ship,
    //   phone: phone_ship,
    // };
    const allAddresses = props.address.address || [];
    const idTime = new Date().getTime();
    console.log({ user });
    const userId = user._id;
    const newAddressA = {
      ...addressA,
      id: idTime,
    };
    const newAddressB = {
      ...addressB,
      id: idTime + 10,
    };
    console.log(newAddressA);
    console.log(allAddresses);
    const isDuplicateA = await checkAddressDuplicate(newAddressA, allAddresses);
    const isDuplicateB = await checkAddressDuplicate(newAddressB, allAddresses);
    if (saveaddress && saveaddress_ship) {
      if (allAddresses.length < 1 || (!isDuplicateA && !isDuplicateB)) {
        addAddress(
          userId,
          [newAddressA, newAddressB],
          props.address,
          allAddresses
        );
      } else if (!isDuplicateA) {
        addAddress(userId, newAddressA, props.address, allAddresses);
      } else if (!isDuplicateB) {
        addAddress(userId, newAddressA, props.address, allAddresses);
      }
    } else if (saveaddress) {
      if (!isDuplicateA || allAddresses.length < 1) {
        addAddress(userId, newAddressA, props.address, allAddresses);
      }
    } else if (saveaddress_ship) {
      if (!isDuplicateB || allAddresses.length < 1) {
        addAddress(userId, newAddressB, props.address, allAddresses);
      }
    }
    // const mainAddressRaw = addressSelect
    //   ? {
    //       ...addressSelect,
    //       // phone,
    //       email,
    //     }
    //   : {
    //       ...address,
    //       email,
    //       phone,
    //     };
    setInfoDetails({ ...values });
    console.log("reached here");
    console.log("A",addressA);
    console.log("B",addressB);
    setMainAddress(addressA);
    setBillingAddress(
      //   addressSelect_ship || addressSelect || addressShip || address
      addressB
    );
    setCurrentStep(1);
  };
  const onShippingSubmit = (e, values, shippingSendData) => {
    setShippingDetail(values);
    setCurrentStep(2);
    console.log({
      shippingSendData,
    });
    setShippingSendData(shippingSendData);
  };
  const onPaymentSubmit = (order) => {
    if (order) {
      setOrder(order);
      setIsSuccess(true);
    }
  };
  const onPaymentFail = (res) => {
    console.log({
      res,
    });
    switch (res.config.url) {
      case baseUrl + "/ship/confirm/":
        setFailedRes("shipment failed");
        break;
      case baseUrl + "/authorize/create/subscription/":
      case baseUrl + "/authorize/create/subscription/profile/":
      case baseUrl + "/authorize/create/subscription/bank/":
        setFailedRes("subscription failed");
        break;
      case baseUrl + "/authorize/chargeprofile/":
      case baseUrl + "/authorize/charge/":
      case baseUrl + "/authorize/charge/bank/":
        setFailedRes("Transaction failed");
        break;
      default:
        setFailedRes("something went wrong");
    }
    setIsModal(true);
  };
  console.log({
    isLoading,
  });

  let checkoutClass = "";
  let loaderClass = "c-hidden";
  if (isLoading) {
    checkoutClass = "c-hidden";
    loaderClass = "";
  }

  console.log({ loaderClass });
  if (!props.isPersist) {
    return (
      <div>
     
        <Loader />
      </div>
    );
  } else if (props.cartItems && props.cartItems.length == 0 && !isSuccess) {
    return (
      <Layout headerTheme="black">
        <div className="o-success">
          <div className="o-success__main o-success__main--center">
            <Heading versions={["large", "upper"]} parentClass="c-privacy">
              0 Items
            </Heading>
            <div className="mt-3" />
            <Heading versions={["small"]} parentClass="c-privacy ">
              Your bag is empty.
            </Heading>
            {/* <p className="o-success__descp mt-3">The order information will be sent via e-mail to {order && order.userDetails && order.userDetails.email} </p> */}
          </div>

          <div className="o-success__btn-wrap w-30 m-auto ">
            <div className="row" style={{ justifyContent: "center" }}>
              <Link href="/shop">
                <a className="c-btn c-btn--dark">Continue shopping</a>
              </Link>
            </div>
          </div>
        </div>
        <br />
      </Layout>
    );
  }
  if (isSuccess) {
    return (
      <Layout headerTheme="black">
        <div className="o-success">
          <div className="o-success__banner">
            <h1 className="o-success__banner--text">
              thank you for your order
            </h1>
          </div>
          <div className="o-success__main o-success__main--center">
            {/* <Heading
							versions={["large", "upper", "order"]}
							parentClass="c-privacy"
						>
							Thank you <br /> for your order
						</Heading> */}
            <br />
            {/* <Heading
							versions={["small", "gold", "order-no"]}
							parentClass="mt-3 c-privacy"
						>
							Order Number: {order && order._id.slice(-8)}
						</Heading> */}
            <h1 className="o-success__main--orderno">
              Order Number: {order && order._id.slice(-8)}
            </h1>
            <br />
            <p className="o-success__descp mt-3">
              The order information will be sent via e-mail to{" "}
              {order && order.userDetails && order.userDetails.email}{" "}
            </p>
          </div>

          <div className="o-success__btn-wrap w-30 m-auto ">
            <div className="row" style={{ justifyContent: "center" }}>
              <Link href="/shop">
                <a className="c-btn c-btn--dark">Continue Shopping</a>
              </Link>
            </div>
          </div>
        </div>
        <br />
      </Layout>
    );
  }
  return (
    <div className="loaderClass">
      {isLoading && <Loader />}
      <div className={checkoutClass}>
        <CheckoutLayout>
          <div className="c-checkout">
           
            <Heading
              parentClass="d-none d-md-block c-checkout "
              versions={["default", "upper"]}
            >
              Checkout
            </Heading>
            <div className="c-checkout__nav-wrapper">
              <Steps current={currentStep}>
                <Steps.Step
                  onClick={() => {
                    currentStep > 0 && setCurrentStep(0);
                  }}
                  title="Information"
                />
                <Steps.Step
                  onClick={() => {
                    currentStep > 1 && setCurrentStep(1);
                  }}
                  title="Shipping"
                />
                <Steps.Step
                  onClick={() => {
                    currentStep > 2 && setCurrentStep(2);
                  }}
                  title="Payment"
                />
              </Steps>
            </div>
            <div className="c-checkout__main-wrapper">
              {currentStep === 0 && (
                <CheckoutInfo oldValues={infoDetails} onSubmit={onInfoSubmit} />
              )}
              {currentStep == 1 && (
                <CheckoutShipping
                  oldValues={shippingDetail}
                  email={infoDetails.email}
                  address={mainAddress}
                  onSubmit={onShippingSubmit}
                />
              )}
              {currentStep === 2 && (
                <CheckoutPayment
                  oldValues={null}
                  email={infoDetails.email}
                  onFailed={onPaymentFail}
                  shippingDetail={shippingDetail}
                  address={mainAddress}
                  billingAddress={billingAddress}
                  shippingSendData={shippingSendData}
                  onSubmit={onPaymentSubmit}
                />
              )}
            </div>
            {/* {address.length && <TitleList parentClass="c-checkout" versions={["sm-border"]} title="Shipping Information" >
                    {
                        address.map((el, i)=> <Radio key={i} checked={el.id === activeAddress} onChange={()=>setActiveAddress(el.id)} >{el.address}</Radio>)
                    }
                    
                </TitleList>} */}

            {/* <TitleList parentClass="c-checkout" versions={["sm-border"]} >
                    <div className="col-12">
                        <Button parentClass="c-checkout" theme="outline" versions={["block"]} >Continue to Shipping</Button>
                        </div>
                    </TitleList> */}
          </div>
          {/* <FullModal 
                maskClosable={true}
                footer={null}
                onOk={()=> {
                    setIsModal(false)
                    window.location.href = "/"
                }} 
                onCancel={()=> {
                    setIsModal(false)
                    window.location.href = "/"
                }} 
                isOpen={isModal}>
                    {failedRes}
                {/* Order is Successfully Places */}

          <FullModal isOpen={isModal} toggle={() => setIsModal(!isModal)}>
            <div className="c-submit-r__product-selector">
              <div className="modal__logo-wrapper">
                <a className="c-logo  modal-footer__logo" href="/">
                  <LazyLoadImage
                    src="/images/logo-new.png"
                    className="modal__logo-img"
                    alt={projectName}
                  />
                </a>
                <div className="modal__heading">
                  <h2 className="modal__heading-text">Order Failed :-</h2>
                </div>
              </div>
              <div
                className="modal-dismiss"
                onClick={() => setIsModal(!isModal)}
              >
                <ReactIcon icon={ic_clear} size={"32"} />
              </div>
              <div className="c-susbmit-r__wrapper justify-content-center">
                <Icon
                  icon={ic_error_outline}
                  className="text-center mr-4 clr-red"
                  size="64"
                />
                <h3>{failedRes}</h3>
              </div>
            </div>
          </FullModal>
        </CheckoutLayout>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  address: state.address,
  user: state.user,
  isLoading: state.loading.isLoading,
  isEditable: state.cart.isEditable,
  cartItems: state.cart.items,
});
const mapActionToProps = {
  addAddress,
  setEditable,
};

export default connect(mapStateToProps, mapActionToProps)(Checkout);
