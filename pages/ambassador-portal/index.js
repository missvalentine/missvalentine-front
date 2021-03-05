import dynamic from 'next/dynamic'
import React, { Component } from "react";
import { connect } from "react-redux";
const Dashboard = dynamic(() => import("../../components/Afilliated/dashboard"), {
  ssr: false,
});
import classNames from "classnames";
import onlyAmbassador from "../../components/hoc/onlyAmbassador";
const Layout = dynamic(() => import("../../components/Layouts/Layout"), {
  ssr: false,
});
import projectSettings from "../../constants/projectSettings"
class Affiliate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1"
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  componentDidMount() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  // <Dashboard countryCode={this.props.countryCode} {...props} />
  render() {
    const { className } = this.props;
    return (
      <Layout  headerTheme="black" fixed={true}>
      <Dashboard
        className={classNames("", {
          [className]: className
        })}
        history={this.props.history}
      /></Layout>
    );
  }
}
const mapStateToProps = state => ({
  location: state.location,
  ambassadoruser: state.ambassadoruser
});
export default connect(mapStateToProps)(onlyAmbassador(Affiliate));
