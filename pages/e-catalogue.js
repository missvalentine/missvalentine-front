import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import '../components/styles/pages/_catalogue.scss';
const Layout = dynamic(() => import('../components/Layouts/Layout'), {
  ssr: false,
});
const Heading = dynamic(() => import('../components/Heading'), {
  ssr: false,
});
import { getCategories, getProducts } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

import { Select, Input, Button, Modal, notification } from 'antd';
import { createContactUs } from '../services/apis/contact';
import { getSubcategory } from '../services/apis/admin';
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

  const handleInputChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

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
      getSubcategory(value.subCategory._id)
        .then((res) => {
          setSelectableProducts(res.data.products);
        })
        .catch((err) => setSelectableProducts(value.category.products));
    } else {
      setSelectableProducts(value.category.products);
    }
  };

  const handleSelectClick = (data) => {
    let tempSelectedProducts = [...selectedProducts];
    const isSelected =
      selectedProducts.filter((prd) => prd._id === data._id).length > 0;
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

  const handleSendEnquiry = () => {
    if (value.phoneNumber === '')
      notification.error({ message: 'Please provide phone' });
    else if (value.name === '')
      notification.error({ message: 'Please provide name' });
    else if (selectedProducts.length === 0)
      notification.error({ message: 'Please select Products for enquiry' });
    else {
      const contactData = {
        name: value.name,
        storeName: value.storeName,
        phone: value.phoneNumber,
        address: value.address,
        city: value.city,
        state: value.state,
        products: selectedProducts,
        callScreen: 'enquiry',
      };
      createContactUs(contactData)
        .then(
          (res) =>
            res.data &&
            Modal.success({
              title: 'Enquiry Request Registered Successfully!',
              content: (
                <div>Please note down Contact ID #{res.data.data._id}</div>
              ),
              okText: 'Explore Products',
              onOk() {
                Router.push('/');
              },
            })
        )
        .catch((err) =>
          Modal.error({
            title: 'Request Failed!',
            okText: 'Explore Products',
            onOk() {
              Router.push('/');
            },
          })
        );
    }
  };

  return (
    <Layout headerVersions={['bg-dark']} headerTheme="black">
      <div className="c-catalogue">
        <Heading versions={['shop-all']}>{'Enquiry Form'}</Heading>
        <center>
          <h3>
            Get a call from our team, to enquire on products based on selected
            form.
          </h3>
        </center>
        <div className="c-catalogue__options">
          <div className="row">
            <div className="col-12 col-lg-4 ">
              <p>Name (required)</p>
              <Input
                required
                placeholder="Enter your name"
                name="name"
                value={value.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 col-lg-4 ">
              <p>Store Name</p>
              <Input
                placeholder="Enter your store name"
                name="storeName"
                value={value.storeName}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 col-lg-4 ">
              <p>Phone Number (required)</p>
              <Input
                required
                placeholder="Enter your phone no"
                name="phoneNumber"
                value={value.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className=" row">
            <div className="col-12 col-lg-4 ">
              <p>Address</p>
              <Input
                placeholder="Enter your address"
                name="address"
                value={value.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 col-lg-4 ">
              <p>City</p>
              <Input
                placeholder="Enter your city"
                name="city"
                value={value.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 col-lg-4 ">
              <p>State</p>
              <Input
                placeholder="Enter your state"
                name="state"
                value={value.state}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className=" row">
            <div className="col-12 col-lg-4 ">
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
                <div className="col-12 col-lg-4 ">
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
            <Button
              className="load-btn"
              onClick={handleLoadProducts}
              disabled={!value.category.products}
            >
              Load Products
            </Button>
          </div>
        </div>
        {selectedProducts.length !== 0 && (
          <>
            <div className="c-catalogue__products c-catalogue__products-selected row">
              <Heading className="col-12 my-2" versions={['shop-all']}>
                {'Selected Products'}
              </Heading>

              {selectedProducts.map((el, i) => (
                <div
                  key={el._id}
                  className="col-lg-4 col-md-6 my-3"
                  style={{ padding: '0 40px' }}
                >
                  <Product
                    data={el}
                    isSelectable
                    isViewable={false}
                    isSelected={
                      selectedProducts.filter((prd) => prd._id === el._id)
                        .length > 0
                    }
                    handleSelectClick={handleSelectClick}
                  />
                </div>
              ))}
              <div className="col-12 text-center">
                <Button className="" onClick={handleSendEnquiry}>
                  Send Enquiry
                </Button>
              </div>
            </div>
          </>
        )}
        <div className="c-catalogue__products row">
          {selectableProducts.length !== 0 &&
            selectableProducts.map((el, i) => (
              <div
                key={el._id}
                className="col-lg-4 col-md-6 my-3"
                style={{ padding: '0 40px' }}
              >
                <Product
                  data={el}
                  isViewable={false}
                  isSelectable
                  isSelected={
                    selectedProducts.filter((prd) => prd._id === el._id)
                      .length > 0
                  }
                  handleSelectClick={handleSelectClick}
                />
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
