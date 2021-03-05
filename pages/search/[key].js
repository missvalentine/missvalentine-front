import dynamic from 'next/dynamic'
import {useState} from 'react'
import { connect } from "react-redux";
import classNames from "classnames";
const Layout = dynamic(() => import("../../components/Layouts/Layout"), {
    ssr: false,
  });
const Heading = dynamic(() => import("../../components/Heading"), {
    ssr: false,
  });
import apiList from "../../services/apis/apiList";
const ProductCard = dynamic(() => import("../../components/ProductCard"), {
    ssr: false,
  });
import { getProductTitle, getProductShortDesc, getBasicPrice, addSlugToProduct, getVisibleProducts } from "../../services/helpers/product";
import projectSettings from "../../constants/projectSettings";
const SearchBox = dynamic(() => import("../../components/form-components/SearchBox"), {
    ssr: false,
  });
import fetch from "isomorphic-unfetch";
import { shopData } from "../../redux/actions";

import parse from "html-react-parser"
const Search = ({ productList, combos,shopdata,Search, ...props }) => {
    console.log(Search);
    const [searchValue, setSearchValue] = useState(Search)
    const [isFilter, setIsFilter] = useState(false)
    const [selectedFilters, setSelectedFilters] = useState("");
    const productsRow = productList.map(el => {
        console.log({
            price:getBasicPrice(el),
            el
        })
        return {
            ...el,
            image: el.productImage? projectSettings.serverUrl + el.productImage : "//via.placeholder.com/300x500",
            title: getProductTitle(el),
            subTitle: getProductShortDesc(el),
            price: getBasicPrice(el),
        }
    })
    const applySearch = products => products.filter(el => {
        if(searchValue === "") return true
        return el.title.toLowerCase().includes(searchValue.toLowerCase())
    })
    const [products, setProducts] = useState([...productsRow]);
    const onSearchChange = e => {
        const {
            value
        } = e.target
        setSearchValue(value)
    }
    const filterProducts = key => {
        setSelectedFilters(key)
        switch(key){
            case "featured":
                const featuredProducts  = products.filter(product => product.featured)
                const restProducts      = products.filter(product => !product.featured)
                setProducts([...featuredProducts, ...restProducts])
            break;
            case "l2h":
                setProducts(products.sort((a,b)=> parseFloat(a.price.sale_price) - parseFloat(b.price.sale_price)))
            break;
            case "h2l":
                setProducts(products.sort((a,b)=> parseFloat(b.price.sale_price) - parseFloat(a.price.sale_price)))
            break;
            default: 
                // setProducts(products)
            break;

        }
    }
    return (
        <Layout headerVersions={["bg-dark"]} headerTheme="black">
            <div className="c-search-page">
                <div className="container-fluid">
                    <div className="c-search-page__row c-search-page__row--light-bg row justify-content-center">
                        <div className="col-md-6">
                            <Heading versions={["lft-br"]} parentClass="c-search-page" >{
                             <SearchBox onChange={onSearchChange} value={searchValue} parentClass="c-search-page" />
                            }</Heading>
                            <Heading subHeading={true} parentClass="c-search-page" versions={["default","lft-br"]} >
                     {parse(`${applySearch(products).length} PRODUCT RESULT FOR <span class="search-text">"${searchValue}"</span>`)}
                            </Heading>
                        </div>
                        {/* <div className="col-md-6 mt-5 mt-md-0">
                            <div className="c-shop-page__filter-box">
                                <SearchBox onChange={onSearchChange} value={searchValue} parentClass="c-shop-page" />
                                <div className="c-shop-page__filter">
                                    <div className="c-shop-page__filter-heading" onClick={()=> {setIsFilter(!isFilter)}}>
                                        sort by <Icon type={isFilter ? "minus" : "plus"} />
                                    </div>
                                    <Collapse isOpen={isFilter}>
                                        <div className="c-shop-page__filter-container">
                                            <FilterItem 
                                                isActive={selectedFilters === "featured"}
                                                onClick={()=> {filterProducts("featured")}}
                                            >
                                                featured
                                            </FilterItem>
                                            <FilterItem 
                                                isActive={selectedFilters === "l2h"}
                                                onClick={()=> {filterProducts("l2h")}}
                                            >
                                                price low to high
                                            </FilterItem>
                                            <FilterItem 
                                                isActive={selectedFilters === "h2l"}
                                                onClick={()=> {filterProducts("h2l")}}
                                            >
                                                price high to low
                                            </FilterItem>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </div>*/}
                    </div> 
                </div>
                <div className="c-shop-page__products-wrapper">
                    <div className="c-shop-page__row row">
                        {
                            applySearch(products).map(el => (
                                <div key={el._id} className="col-lg-4 col-md-6">
                                    <ProductCard product={el} versions={["show-price", "full-height"]} title={el.title} subTitle={el.subTitle} image={el.image} price={el.price && el.price.sale_price} mg={el.totalcbdmg} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                
               
            </div>
        </Layout>
    )
}
const FilterItem = ({isActive, onClick, children}) => <div className={classNames("c-shop-page__filter-item", {
    "c-shop-page__filter-item--active": isActive
})}
onClick={onClick}
>
    {children}
</div>
Search.getInitialProps = async ({ query }) => {
    console.log(query.key);
    const res = await fetch(apiList.getAllProducts)
    const productList = await res.json()
    const visibleProducts = getVisibleProducts(productList.products)
    const Searchdata = await shopData();
    
    const comboRes      = await fetch(apiList.getAllCombos)
    const comboList     = await comboRes.json()
    const visibleCombo  = getVisibleProducts(comboList.combos)
    
    return {
        Search: query.key,
        productList: visibleProducts.map(el => addSlugToProduct(el)),
        combos: visibleCombo.map(el => addSlugToProduct(el)),
        shopdata:Searchdata.shop
    }
}
export default connect(null)(Search) 