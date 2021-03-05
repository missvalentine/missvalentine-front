import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, Button } from "reactstrap";
import { ic_done } from "react-icons-kit/md/";
import { setDefaultCard, deleteCard } from "../../redux/actions/cards";
import Icon from "react-icons-kit";
class SingleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCardForm: false,
    };
    this.toggleAddCardFrom = this.toggleAddCardFrom.bind(this);
  }
  toggleAddCardFrom() {
    const { addCardForm } = this.state;
    console.log(addCardForm);
    this.setState({
      addCardForm: !addCardForm,
    });
  }
  deleteCard = () => {
    const { user, card, cards } = this.props;
    this.props.deleteCard(user._id, card, cards, cards.cards);
  };
  setDefaultCard = () => {
    const { user, card, cards } = this.props;
    this.props.setDefaultCard(
      user._id,
      card.customerPaymentProfileId,
      cards,
      cards.cards
    );
  };
  onSubmitSuccess = () => {
    this.setState({
      addCardForm: false,
    });
  };
  convertCardNumber = (number = "") => {
    if (number)
      return number
        .split("")
        .map((el, ind) => (ind > number.length - 5 ? el : "X"))
        .join("");

    return "";
  };

  render() {
    // const { addCardForm } = this.state;
    const {
      // defaultCard,
      card,
    } = this.props;
    if (card.creditCard) {
      const { cardType, expirationDate, cardNumber } = card.creditCard;
      return (
        <div
          className="col-md-12 col-sm-12 col-xs-12"
          style={{ paddingLeft: "0px" }}
        >
          <Card className="panel-section border-0">
            <CardBody
              style={{
                borderBottom: "1px solid #e4e4e4",
                paddingBottom: "10px",
                paddingTop: "20px",
                width: "130%",
              }}
            >
              <div className="row align-items-md-center my-order__my-card">
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="my-order__card-detail">
                    {/* <h6 className="m-0">{cardType ? cardType : "No Name"}</h6> */}
                    {/*<p>Manas Tripathi</p>  not dynamic */}
                    <p className="ml-5 m-0">
                      {cardNumber}
                      {/* {this.convertCardNumber(card.cardnumber)} */}
                    </p>
                  </div> 
                </div>
                <div className="col-md-6 col-sm-6 col-12 d-md-flex justify-content-md-end">
                  <ul className="my-order__address-ul m-0">
                    {/* <li>
                    <Button
                      color="link"
                      className="simple-link"
                      onClick={() => this.toggleAddCardFrom()}
                    >
                      Edit
                    </Button>
                  </li> */}
                    {/* <li>
                      <Button
                       // onClick={() => this.toggleAddCardFrom()}
                       onClick={()=>this.props.editCard()}
                        color="link"
                        className="simple-link my-order__t-btn"
                      >
                        Edit
                      </Button>
                    </li> */}
                    <li style={{width:"145px"}}>
                    {card.isDefault ? <></> : <Button
                        onClick={this.deleteCard}
                        color="link"
                        className="simple-link my-order__t-btn"
                      >
                        Delete
                      </Button>}
                    </li>
                    {card.isDefault ? (
                      <li>
                        <Button
                          color="link"
                          className="simple-link my-order__t-btn"
                          disabled
                        >
                          <Icon
                            size="20"
                            style={{ color: "green" }}
                            icon={ic_done}
                          />
                        </Button>
                      </li>
                    ) : (
                      <li>
                        <Button
                          onClick={this.setDefaultCard}
                          color="link"
                          className="simple-link my-order__t-btn"
                        >
                          Set as Default
                        </Button>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </CardBody>

            {/* <Collapse isOpen={this.state.addCardForm}>
            <CardFooter>
              <CardForm
                onSubmitSuccess={this.onSubmitSuccess}
                id={card.id}
                card={card}
                cardDetail=""
              />
            </CardFooter>
          </Collapse> */}
          </Card>
        </div>
      );
    }

    return <div />;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  location: state.location,
  cards: state.cards,
});
export default connect(mapStateToProps, { setDefaultCard, deleteCard })(
  SingleCard
);
