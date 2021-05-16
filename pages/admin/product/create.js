import React, { useState, useEffect } from 'react';
import '../../../components/styles/app.scss';
import AdminLayout from '../../../components/admin/AdminLayout';
import {
  allColours,
  allSizes,
  colours,
} from '../../../utilis/customFunctions.js';
import {
  Input,
  Button,
  Checkbox,
  Tag,
  Select,
  Upload,
  notification,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import {
  createProduct,
  getAllCategories,
  getProduct,
  deleteProduct,
} from '../../../services/apis/admin.js';
import Router from 'next/router';

const { Option } = Select;

//constants

export default function create(props) {
  const { pid } = Router.router.query;

  const [inputData, setInputData] = useState({
    name: '',
    shortDesc: '',
    description: '',
    category: '',
    subCategories: [],
    price: '',
    sizes: [],
    colors: [],
    hidden: false,
    images: [],
    errors: '',
  });
  const [fileList, setFileList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const initialSetup = async () => {
    const res = await getAllCategories();
    setCategories(res.data.data);

    if (pid && res) {
      getProduct(pid).then(({ data }) => {
        let editData = data.data;
        let cate = res.data.data.filter((c) => c._id === editData.category._id);
        console.log(cate, res.data.data, editData.category._id);
        setSubCategories(cate.length > 0 ? cate[0].subcategories : []);

        editData.subCategories = editData.subCategories.map((sc) => sc._id);
        editData.category = editData.category._id;
        editData.price = editData.price || '';
        setInputData(editData);
      });
      //
    }
  };

  useEffect(() => {
    initialSetup();
  }, [pid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputData, 'input');
    let formData = new FormData();
    formData.append('name', inputData.name);
    formData.append('shortDesc', inputData.shortDesc);
    formData.append('description', inputData.description);
    formData.append('category', inputData.category);
    formData.append('price', inputData.price);
    formData.append('hidden', inputData.hidden);
    formData.append('sizes', JSON.stringify(inputData.sizes));
    formData.append('colors', JSON.stringify(inputData.colors));
    formData.append('subCategories', JSON.stringify(inputData.subCategories));

    if (pid) {
      formData.append('isEdit', true);
      for (var i in inputData.images) {
        formData.append('oldImages', JSON.stringify(inputData.images[i]));
      }
    }

    //for Images
    const fileListAsArray = Array.from(fileList);
    for (var i in fileListAsArray) {
      console.log(fileListAsArray[i]);
      formData.append('images', fileListAsArray[i].originFileObj);
    }

    createProduct(formData)
      .then(({ data }) => {
        if (data && data.success) {
          setInputData({
            ...inputData,
            name: '',
            shortDesc: '',
            description: '',
            category: '',
            subCategories: [],
            price: '',
            sizes: [],
            colors: [],
            hidden: false,
            images: [],
            errors: '',
          });
          if (pid) {
            deleteProduct(pid).then(({ data }) => {
              notification.success({ message: 'Product Updated Successfully' });
              Router.push('/admin/product');
            });
          } else notification.success({ message: data.message });
        } else {
          notification.error({ message: data.message });
        }
      })
      .catch((err) => notification.error({ message: 'something went wrong' }));
  };

  const handleInputChange = (selector) => (event) => {
    if (selector === 'hidden') {
      setInputData({ ...inputData, hidden: event.target.checked });
    } else if (
      selector === 'sizes' ||
      selector === 'colors' ||
      selector === 'subCategories'
    ) {
      setInputData({ ...inputData, [selector]: event });
    } else {
      setInputData({ ...inputData, [selector]: event.target.value });
    }
  };

  const handleCategoryChange = (cate) => {
    setInputData({ ...inputData, category: cate._id, subCategories: [] });
    setSubCategories(cate.subcategories);
  };

  const handleImagesChange = ({ file, fileList }) => {
    setFileList(fileList);
  };
  const handleImagesRemove = (id) => {
    const newImages = inputData.images.filter((img) => img._id !== id);
    setInputData({ ...inputData, images: newImages });
  };

  function tagRender(props) {
    const { label, value, closable, onClose } = props;

    return (
      <Tag
        color={value}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  }

  return (
    <AdminLayout>
      {categories && categories.length > 0 ? (
        <div>
          <center>
            <h2> {pid ? ' Edit ' : 'Enter '} Product Details</h2>
          </center>
          <div className="c-admin-create-product__item">
            <div>Choose Category</div>
            <Select
              style={{ width: '100%' }}
              placeholder="Please select category"
              value={inputData.category}
            >
              {categories.map((cate, index) => (
                <Option
                  key={index}
                  value={cate._id}
                  name={cate.name}
                  onClick={() => handleCategoryChange(cate)}
                >
                  {cate.name}
                </Option>
              ))}
            </Select>
          </div>

          <div className="c-admin-create-product__item">
            <div>Choose SubCategory (optional)</div>
            <Select
              value={inputData.subCategories}
              onChange={handleInputChange('subCategories')}
              mode="multiple"
              placeholder="Select subcategories"
              style={{ width: '100%' }}
            >
              {subCategories.map((subcategory, index) => (
                <Option
                  key={index}
                  name={subcategory.name}
                  value={subcategory._id}
                >
                  {subcategory.name}
                </Option>
              ))}
            </Select>
          </div>

          <div className="c-admin-create-product__item">
            <div>Enter Name (optional)</div>
            <Input
              id="name"
              placeholder="Enter Product Name"
              label="Product Name"
              name="name"
              required
              onChange={handleInputChange('name')}
              value={inputData.name}
            />
          </div>

          <div className="c-admin-create-product__item">
            <div>Enter short description (optional)</div>
            <Input.TextArea
              id="short-desc-input"
              label="Short Description"
              name="shortDesc"
              required
              rows={2}
              onChange={handleInputChange('shortDesc')}
              placeholder="write a short description about the product."
              value={inputData.shortDesc}
            />
          </div>

          <div className="c-admin-create-product__item">
            <div>Enter full description (optional)</div>
            <Input.TextArea
              label="Description"
              name="description"
              rows={4}
              onChange={handleInputChange('description')}
              placeholder="write a full description about the product."
              value={inputData.description}
            />
          </div>

          <div className="c-admin-create-product__item">
            <div>Enter price (optional)</div>

            <Input
              prefix="₹"
              label="Price ( ₹ )"
              name="price"
              type="number"
              placeholder="Please enter price"
              onChange={handleInputChange('price')}
              value={inputData.price}
            />
          </div>

          <div className="c-admin-create-product__item">
            <div>Choose available sizes (optional)</div>
            <Select
              style={{ width: '100%' }}
              placeholder="Please select Sizes"
              onChange={handleInputChange('sizes')}
              mode="multiple"
              name="sizes"
              value={inputData.sizes}
            >
              {allSizes.map((size, index) => (
                <Option key={index} value={size}>
                  {size}
                </Option>
              ))}
            </Select>
          </div>

          {/* //colors */}
          <div className="c-admin-create-product__item">
            <div>Choose available colors (optional)</div>
            <Select
              style={{ width: '100%' }}
              placeholder="Please select Colors"
              onChange={handleInputChange('colors')}
              showArrow
              mode="multiple"
              name="colors"
              tagRender={tagRender}
              value={inputData.colors}
            >
              {allColours.map((color, index) => (
                <Option key={index} value={color}>
                  {color}
                </Option>
              ))}
            </Select>
          </div>
          <div className="c-admin-create-product__item">
            <div>Enter is Hidden (optional)</div>
            <Checkbox
              checked={inputData.hidden}
              onChange={handleInputChange('hidden')}
            >
              Is Hidden?
            </Checkbox>
          </div>
          <div className="mt-3 mb-2">Already Images</div>
          <div className="d-flex">
            {inputData.images.map((im) => (
              <div>
                <img
                  src={im.data}
                  className="mx-2"
                  alt={im._id}
                  width={100}
                  height={100}
                />
                <div
                  className="text-center text-danger"
                  onClick={() => handleImagesRemove(im._id)}
                >
                  Delete
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3">Upload Images (Total Max: 8)</div>
          <Upload
            name="images"
            accept=".jpg, .jpeg, .png"
            multiple
            // listType="picture"
            fileList={fileList}
            listType="picture-card"
            onChange={handleImagesChange}
            beforeUpload={() => false}
            maxCount={8 - inputData.images.length}
          >
            {fileList.length + inputData.images.length <= 8 && (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload Images</div>
              </div>
            )}
          </Upload>

          <center className="c-admin-create-product__btn">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Create
            </Button>
          </center>
        </div>
      ) : (
        <div>Create a Category first</div>
      )}
    </AdminLayout>
  );
}
