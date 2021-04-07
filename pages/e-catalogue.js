import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import '../components/styles/pages/_catalogue.scss';
const Layout = dynamic(() => import('../components/Layouts/Layout'), {
  ssr: false,
});
const Heading = dynamic(() => import('../components/Heading'), {
  ssr: false,
});
import { getCategories, getProducts } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

import { Select, Input, Button } from 'antd';
import { getSubcategory } from '../services/apis/admin.js';
import { Fade } from 'reactstrap';
import Product from '../components/Product.js';

const { Option } = Select;

export default function ECatalogue() {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    name: '',
    storeName: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    category: {},
    subCategory: {},
  });
  const [selectableProducts, setSelectableProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [showSubCate, setShowSubCate] = useState(false);

  function handleCategoryChange(v) {
    setValue({ ...value, category: v, subCategory: {} });
    const isSubCateExist = Object.keys(v.subcategories).length !== 0;
    if (isSubCateExist) {
      const isSubCateWithProductExist =
        v.subcategories.filter((sCate) => sCate.products.length > 0).length > 0;
      if (isSubCateWithProductExist) setShowSubCate(true);
      else setShowSubCate(false);
    } else setShowSubCate(false);
  }

  function handleSubCategoryChange(v) {
    setValue({ ...value, subCategory: v });
  }

  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleLoadProducts = () => {
    if (value.subCategory._id) {
      console.log('subcate');
      getSubcategory(value.subCategory._id)
        .then((res) => {
          setSelectableProducts(res.data.products);
        })
        .catch((err) => setSelectableProducts(value.category.products));
    } else {
      console.log('cate', value.category.products);
      setSelectableProducts(value.category.products);
    }
  };

  const handleSelectClick = (data) => {
    let tempSelectedProducts = [...selectedProducts];
    const isSelected =
      selectedProducts.filter((prd) => prd._id === data._id).length > 0;
    console.log('isSelected', isSelected);
    if (isSelected) {
      tempSelectedProducts = tempSelectedProducts.filter(
        (prd) => prd._id !== data._id
      );
    } else {
      tempSelectedProducts.push(data);
    }
    console.log('tempSelectedProducts', tempSelectedProducts);

    setSelectedProducts(tempSelectedProducts);
  };

  return (
    <Layout headerVersions={['bg-dark']} headerTheme="black">
      <div className="c-catalogue">
        <Heading versions={['shop-all']}>{'Enquiry Form'}</Heading>
        <div className="c-catalogue__options">
          <div className=" row">
            <div className="col-4">
              <p>Name</p>
              <Input placeholder="Enter your name" />
            </div>
            <div className="col-4">
              <p>Store Name</p>
              <Input placeholder="Enter your store name" />
            </div>
            <div className="col-4">
              <p>Phone Number</p>

              <Input placeholder="Enter your phone no" />
            </div>
          </div>
          <div className=" row">
            <div className="col-4">
              <p>Address</p>
              <Input placeholder="Enter your address" />
            </div>
            <div className="col-4">
              <p>City</p>
              <Input placeholder="Enter your city" />
            </div>
            <div className="col-4">
              <p>State</p>
              <Input placeholder="Enter your state" />
            </div>
          </div>
          <div className=" row">
            <div className="col-4">
              <p>Category</p>
              <Select
                value={value.category.name}
                onChange={handleCategoryChange}
              >
                {products.categories.map((cate) => (
                  <Option key={cate._id} value={cate}>
                    {cate.name}
                  </Option>
                ))}
              </Select>
            </div>
            {value.category !== {} &&
              showSubCate &&
              value.category.subcategories && (
                <div className="col-4">
                  <p>Sub Category (Optional)</p>
                  <Select
                    value={value.subCategory.name}
                    onChange={handleSubCategoryChange}
                  >
                    {value.category.subcategories
                      .filter((sCate) => sCate.products.length > 0)
                      .map((sCate) => (
                        <Option key={sCate._id} value={sCate}>
                          {sCate.name}
                        </Option>
                      ))}
                  </Select>
                </div>
              )}
          </div>
          <div className="row load-btn-wrapper">
            <Button className="load-btn" onClick={handleLoadProducts}>
              Load Products
            </Button>
          </div>
        </div>
        <div className="c-catalogue__products row">
          {selectableProducts &&
            selectableProducts.map((el, i) => (
              <div
                key={el._id}
                className="col-lg-4 col-md-6"
                style={{ padding: '0 40px' }}
              >
                <Fade key={el._id}>
                  <Product
                    data={el}
                    isSelectable
                    isSelected={
                      selectedProducts.filter((prd) => prd._id === el._id)
                        .length > 0
                    }
                    handleSelectClick={handleSelectClick}
                  />
                </Fade>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}

ECatalogue.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const json = await res.json();
  return { stars: json.stargazers_count };
};
