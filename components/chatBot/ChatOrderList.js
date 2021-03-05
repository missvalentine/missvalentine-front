import React, { Component } from "react";
import dynamic from 'next/dynamic'
import { connect } from "react-redux";
import classNames from "classnames";
import moment from "moment";
import { getOrders } from "../../services/api";
import { makeCancelable } from "../../services/makeCancelable";
import  ChatMsgList from "./ChatMsgList";
const chatMsgList = new ChatMsgList();
class ChatOrderList extends Component {
  constructor() {
    super();
    this.state = {
      orderList: [],
      isLoading: true,
      selected: null
    };
  }
  componentDidMount() {
    this.getOrderList();
  }
  componentWillUnmount() {
    if (this.cancelableOrders) this.cancelableOrders();
  }
  getOrderList = () => {
    this.cancelableOrders = makeCancelable(
      getOrders(this.props.user.userMetaId),
      res => {
        const resJson = res.data
        if (resJson.status) {
          const orderList = resJson.orders.sort(function(a, b) {
            return new Date(b.createdOn) - new Date(a.createdOn);
          });
          if (!orderList || (orderList && orderList.length < 1)) {
            this.props.triggerNextStep({
              trigger: "repeat"
            });
          }
          this.setState({
            orderList: orderList,
            isLoading: false
          });
        }
      },
      err => {
        console.log({ err });
      }
    );
  };
  render() {
    const { orderList, isLoading, selected } = this.state;
    return (
      <div>
        {isLoading && <div>...</div>}
        {isLoading && (!orderList || (orderList && orderList.length < 1)) && (
          <div>{chatMsgList.noOrdersMsg()}</div>
        )}
        {!isLoading &&
          orderList &&
          orderList.length > 0 &&
          orderList.map((el, index) => {
            const product = el.products && el.products[0].title;
            return (
              <p
                className={classNames("chat-custom-option", {
                  selected: selected === el._id
                })}
                onClick={() => {
                  if (!selected) {
                    this.setState(
                      {
                        orderList: orderList.filter(elx => elx._id === el._id),
                        selected: el._id
                      },
                      () => {
                        this.props.triggerNextStep({
                          value: el
                        });
                      }
                    );
                  }
                }}
                key={index}
              >
                {el.createdOn
                  ? moment(el.createdOn).format("MMM DD, YYYY") +
                    ` (${product})`
                  : product}
              </p>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps)(ChatOrderList);
