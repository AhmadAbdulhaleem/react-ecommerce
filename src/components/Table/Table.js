import React, { Component } from 'react';

import './Table.css';

class Table extends Component {
  state = {
    products: null,
  };

  componentWillMount() {
    this.setState({ products: this.props.products });
  }

  render() {
    return (
      <div className="table-responsive">
        <table className="table ">
          <thead className="thead-dark table-striped">
            <tr>
              <th scope="col">#</th>
              <th scope="col">PRODUCTS</th>
              <th scope="col">NAME OF PRODUCT</th>
              <th scope="col">PRICE</th>
              <th scope="col">QUANTITY</th>
              <th scope="col">REMOVE</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((p, index) => {
              let i = index + 1;
              return (
                <tr key={p.id} style={{ lineHeight: '55px' }}>
                  <th scope="row">{i++}</th>
                  <td>
                    <img style={{ width: '70px' }} src={p.img} alt={p.title} />
                  </td>
                  <td>{p.title}</td>
                  <td>${p.price}</td>
                  <td>
                    <button
                      disabled={p.count <= 1 ? true : false}
                      className="count btn btn-secondary"
                      onClick={() => this.props.decrement(p.id)}
                    >
                      -
                    </button>
                    <span>{p.count}</span>
                    <button
                      className="count btn btn-secondary"
                      onClick={() => this.props.increment(p.id)}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-warning btn-sm"
                      onClick={() => this.props.handleDelete(p.id)}
                    >
                      Remove
                    </button>
                  </td>
                  <td>{p.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
