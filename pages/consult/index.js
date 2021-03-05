import dynamic from 'next/dynamic'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Layout = dynamic(() => import("../../components/Layouts/Layout"), {
  ssr: false,
});
import { connect } from "react-redux";
import { getProducts } from "../../redux/actions";
const Button = dynamic(() => import("../../components/form-components/Button"), {
  ssr: false,
});
const TopBanner = dynamic(() => import("./topBanner"), {
  ssr: false,
});
const ConsultDoc = dynamic(() => import("./consult-doc"), {
  ssr: false,
});
const HonestSection = dynamic(() => import("./honestSection"), {
  ssr: false,
});
const DiscussionSection = dynamic(() => import("./DiscussTopic"), {
  ssr: false,
});
import { consult } from "../../site-content";
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
  toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  render() {
    const { activeCategory, products } = this.state;
    return (
      <Layout
        className="c-consult-page"
        title="Consult"
        headerTheme="black"
        fixed={true}
      >
        <div className="consult-banner">
          <TopBanner data={consult.banner} />
          <Button
            type="link"
            link="/consult/get-in-touch"
            versions={["dark"]}
            className="consult-button"
          >
            Get in touch
          </Button>
        </div>
        <ConsultDoc />
        <HonestSection />
        <DiscussionSection data={consult.discussion} />
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
