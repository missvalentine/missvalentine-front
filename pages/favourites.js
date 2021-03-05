import dynamic from 'next/dynamic'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Layout = dynamic(() => import('../components/Layouts/Layout'), {
    ssr: false,
  });
const Heading = dynamic(() => import("../components/Heading"), {
    ssr: false,
  });
const Button = dynamic(() => import('../components/form-components/Button'), {
    ssr: false,
  });

const Favourites = props => {
    return (
    <Layout headerVersions={["bg-light"]} headerTheme="dark">
        <div className="c-favourites-page">
            <div className="c-favourites-page__page-title">
                <Heading versions={["transform"]} parentclassName="c-favourites-page" >My favourites</Heading>
            </div>
        </div>

        <section className="c-favourites__item">
            <div className="container">
                <div className="row c-favourites__row">
                    <div className="c-favourites__item-row">
                        <div className="c-favourites__img-wrap">
                            <LazyLoadImage className="img-fluid" src="images/cbd-oil.png" alt="cbd-oil"/>
                        </div>
                        <div className="c-favourites__heading">
                            <h3 className="c-favourites__heading__title" >CBD ISOLATE 500MG</h3>
                        </div>
                        <div className="c-favourites__action">
                            <ul className="c-favourites__action-wrap">
                                <li className="c-favourites__action-wrap__list">
                                    <a className="c-favourites__action-wrap__list-link" href="#">View</a>
                                </li>
                                <li className="c-favourites__action-wrap__list">
                                    <a className="c-favourites__action-wrap__list-link" href="#">Delete</a>
                                </li>
                                <li className="c-favourites__action-wrap__list">
                                    <a className="c-favourites__action-wrap__list-link" href="#">Buy</a>
                                </li>
                            </ul>
                        </div>
                    </div>                     
                    <div className="c-favourites__button-wrapper">
                        <Button versions={["outline", "block"]}>
                            Go Shopping
                        </Button>
                    </div>                 
                </div>
            </div>
        </section>
    </Layout>)
}
export default Favourites