/* eslint-disable no-underscore-dangle */

import { Link } from 'react-router-dom';

import React, { Component } from 'react';

import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    this.setState({ products: docs, productInfo, page });
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);
  };

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  };

  render() {
    const { products, page, productInfo } = this.state;
    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <Link to={`/products/${product._id}`}>More...</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={page < 2} type="button" onClick={this.prevPage}>
            Anterior
          </button>
          <span>
            Página {page} de {productInfo.pages}
          </span>
          <button
            disabled={page === productInfo.pages}
            type="button"
            onClick={this.nextPage}
          >
            Próxima
          </button>
        </div>
      </div>
    );
  }
}
