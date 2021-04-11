import React, { useState, useEffect } from 'react';
import '../../../components/styles/app.scss';
import AdminLayout from '../../../components/admin/AdminLayout';

import { Input, Button, Checkbox, Tag, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import {
  createProduct,
  getAllCategories,
} from '../../../services/apis/admin.js';

const { Option } = Select;

//constants
const allSizes = ['28', '30', '32', '34', '36', '38', '40', '42', '44'];
const allColors = [
  'Wine',
  'Carrot',
  'Nude',
  'Skin',
  'Rani',

  'AliceBlue',
  'AntiqueWhite',
  'Aqua',
  'Aquamarine',
  'Azure',
  'Beige',
  'Bisque',
  'Black',
  'BlanchedAlmond',
  'Blue',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'CadetBlue',
  'Chartreuse',
  'Chocolate',
  'Coral',
  'CornflowerBlue',
  'Cornsilk',
  'Crimson',
  'Cyan',
  'DarkBlue',
  'DarkCyan',
  'DarkGoldenRod',
  'DarkGray',
  'DarkGrey',
  'DarkGreen',
  'DarkKhaki',
  'DarkMagenta',
  'DarkOliveGreen',
  'DarkOrange',
  'DarkOrchid',
  'DarkRed',
  'DarkSalmon',
  'DarkSeaGreen',
  'DarkSlateBlue',
  'DarkSlateGray',
  'DarkSlateGrey',
  'DarkTurquoise',
  'DarkViolet',
  'DeepPink',
  'DeepSkyBlue',
  'DimGray',
  'DimGrey',
  'DodgerBlue',
  'FireBrick',
  'FloralWhite',
  'ForestGreen',
  'Fuchsia',
  'Gainsboro',
  'GhostWhite',
  'Gold',
  'GoldenRod',
  'Gray',
  'Grey',
  'Green',
  'GreenYellow',
  'HoneyDew',
  'HotPink',
  'IndianRed',
  'Indigo',
  'Ivory',
  'Khaki',
  'Lavender',
  'LavenderBlush',
  'LawnGreen',
  'LemonChiffon',
  'LightBlue',
  'LightCoral',
  'LightCyan',
  'LightGoldenRodYellow',
  'LightGray',
  'LightGrey',
  'LightGreen',
  'LightPink',
  'LightSalmon',
  'LightSeaGreen',
  'LightSkyBlue',
  'LightSlateGray',
  'LightSlateGrey',
  'LightSteelBlue',
  'LightYellow',
  'Lime',
  'LimeGreen',
  'Linen',
  'Magenta',
  'Maroon',
  'MediumAquaMarine',
  'MediumBlue',
  'MediumOrchid',
  'MediumPurple',
  'MediumSeaGreen',
  'MediumSlateBlue',
  'MediumSpringGreen',
  'MediumTurquoise',
  'MediumVioletRed',
  'MidnightBlue',
  'MintCream',
  'MistyRose',
  'Moccasin',
  'NavajoWhite',
  'Navy',
  'OldLace',
  'Olive',
  'OliveDrab',
  'Orange',
  'OrangeRed',
  'Orchid',
  'PaleGoldenRod',
  'PaleGreen',
  'PaleTurquoise',
  'PaleVioletRed',
  'PapayaWhip',
  'PeachPuff',
  'Peru',
  'Pink',
  'Plum',
  'PowderBlue',
  'Purple',
  'RebeccaPurple',
  'Red',
  'RosyBrown',
  'RoyalBlue',
  'SaddleBrown',
  'Salmon',
  'SandyBrown',
  'SeaGreen',
  'SeaShell',
  'Sienna',
  'Silver',
  'SkyBlue',
  'SlateBlue',
  'SlateGray',
  'SlateGrey',
  'Snow',
  'SpringGreen',
  'SteelBlue',
  'Tan',
  'Teal',
  'Thistle',
  'Tomato',
  'Turquoise',
  'Violet',
  'Wheat',
  'White',
  'WhiteSmoke',
  'Yellow',
  'YellowGreen',
];
export default function create(props) {
  const { editData } = props;

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
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    if (editData) {
      let newInputData = { ...inputData };
      newInputData.sizes = editData.sizes;
      setInputData(newInputData);
    }
  }, []);

  useEffect(() => {
    getAllCategories().then(
      (res) => res && res.data && setCategories(res.data.data)
    );
  }, []);

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

    //for Images
    const fileListAsArray = Array.from(inputData.images);
    for (var i in fileListAsArray) {
      console.log(fileListAsArray[i]);
      formData.append('images', fileListAsArray[i]);
    }
    createProduct(formData).then((res) => {
      if (res.data && res.data.success) {
        setInputData({
          ...inputData,
          name: '',
          // shortDesc: '',
          // description: '',
          // category: '',
          // subCategories: [],
          // price: '',
          // sizes: [],
          // colors: [],
          // hidden: false,
          images: [],
          errors: '',
        });
      }
    });
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

  const handleImagesChange = (file, fileList) => {
    setInputData({
      ...inputData,
      images: fileList,
    });
  };
  const handleImagesRemove = (file) => {
    const index = inputData.images.indexOf(file);
    const newFileList = inputData.images.slice();
    newFileList.splice(index, 1);
    setInputData({
      ...inputData,
      images: newFileList,
    });
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
          <h3> {editData ? ' Edit ' : 'Enter '} Product Details</h3>
          <div className="c-admin-create-product__item">
            <Select
              style={{ width: '100%' }}
              placeholder="Please select category"
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
            <Select
              // value={inputData.subCategories || []}
              onChange={handleInputChange('subCategories')}
              mode="multiple"
              placeholder="Select subcategories"
              style={{ width: '100%' }}
            >
              {subCategories.map((subcategory, index) => (
                <Option key={index} value={subcategory._id}>
                  {subcategory.name}
                </Option>
              ))}
            </Select>
          </div>

          <div className="c-admin-create-product__item">
            <Input
              id="name"
              placeholder="Enter Product Name"
              label="Product Name"
              name="name"
              required
              onChange={handleInputChange('name')}
            />
          </div>

          <div className="c-admin-create-product__item">
            <Input.TextArea
              id="short-desc-input"
              label="Short Description"
              name="shortDesc"
              required
              rows={2}
              onChange={handleInputChange('shortDesc')}
              placeholder="write a short description about the product."
            />
          </div>

          <div className="c-admin-create-product__item">
            <Input.TextArea
              label="Description"
              name="description"
              rows={4}
              onChange={handleInputChange('description')}
              placeholder="write a full description about the product."
            />
          </div>

          <div className="c-admin-create-product__item">
            <Input
              label="Price ( ₹ )"
              name="price"
              placeholder="Please enter price"
              onChange={handleInputChange('price')}
            />
          </div>

          <div className="c-admin-create-product__item">
            <Select
              style={{ width: '100%' }}
              placeholder="Please select Sizes"
              onChange={handleInputChange('sizes')}
              mode="multiple"
              name="sizes"
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
            <Select
              style={{ width: '100%' }}
              placeholder="Please select Colors"
              onChange={handleInputChange('colors')}
              showArrow
              mode="multiple"
              name="colors"
              tagRender={tagRender}
            >
              {allColors.map((color, index) => (
                <Option key={index} value={color}>
                  {color}
                </Option>
              ))}
            </Select>
          </div>
          <div className="c-admin-create-product__item">
            <Checkbox
              checked={inputData.hidden}
              onChange={handleInputChange('hidden')}
            >
              Is Hidden?
            </Checkbox>
          </div>

          <Upload
            name="images"
            accept=".jpg, .jpeg, .png"
            multiple
            listType="picture"
            beforeUpload={handleImagesChange}
            onRemove={handleImagesRemove}
            fileList={inputData.images}
          >
            <Button icon={<UploadOutlined />}>Upload Images</Button>
          </Upload>

          <div className="c-admin-create-product__btn">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Create
            </Button>
          </div>
        </div>
      ) : (
        <div>Create a Category first</div>
      )}
    </AdminLayout>
  );
}
