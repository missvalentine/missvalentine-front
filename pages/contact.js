import dynamic from "next/dynamic";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Layout = dynamic(() => import("../components/Layouts/Layout"), {
  ssr: false,
});
import { connect } from "react-redux";
import { getProducts } from "../redux/actions";
const Heading = dynamic(() => import("../components/Heading"), {
  ssr: false,
});
const ContactFrom = dynamic(() => import("../components/forms/ContactForm"), {
  ssr: false,
});
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: "Featured",
      allProducts: props.products.products || [],
      products: props.products.featured || [],
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.products.products !== prevState.allProducts) {
      console.log({
        allProducts: nextProps.products.products,
      });
      return {
        allProducts: nextProps.products.products,
      };
    } else return null;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.products.products !== this.props.products.products) {
      this.changeCategory({ title: this.state.activeCategory });
    }
  }

  componentDidMount() {
    this.props.getProducts();
  }
  changeCategory = (activeCategory) => {
    const { products } = this.props;
    console.log({
      activeCategory,
      products,
    });
    if (activeCategory.title === "Featured") {
      this.setState({
        products: products.featured,
        activeCategory: activeCategory.title,
      });
    } else if (activeCategory.title === "All") {
      this.setState({
        products: products.products,
        activeCategory: activeCategory.title,
      });
    } else {
      const activeCategoryArr =
        products.categories.find(
          (el) => el.category.categorytitle === activeCategory.title
        ) || {};
      this.setState({
        products: activeCategoryArr.products,
        activeCategory: activeCategory.title,
      });
    }
  };
  render() {
    const { activeCategory, products } = this.state;

    return (
      <Layout className="c-contact" headerVersions={["dark"]} title="Contact">
        <LazyLoadImage
          src="/images/contact-banner.webp"
          className="img-fluid contact-page-banner"
          style={{ padding: "5rem 7rem" }}
        />

        <div className="c-contact__container">
          <Heading>WHAT CAN WE HELP YOU WITH?</Heading>
          <p>Please select a topic below related to your enquiry.</p>
          <ContactFrom />
        </div>
        
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});
Contact.defaultProps = {
  products: {},
};
export default connect(mapStateToProps, { getProducts })(Contact);
