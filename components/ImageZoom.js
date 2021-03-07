import dynamic from 'next/dynamic';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import projectSettings from '../constants/projectSettings.js';
const ProductViewSlider = dynamic(() => import('./ProductViewSlider'), {
  ssr: false,
});

const { filePath } = projectSettings;
class ImageZoom extends Component {
  render() {
    const { images } = this.props;
    return <div className="display-product-wrapper"></div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products,
});
export default connect(mapStateToProps)(ImageZoom);
