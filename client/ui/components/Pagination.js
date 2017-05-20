import React, { Component } from 'react';

class Pagination extends Component {
  state = {
    pageOffset: this.props.offset,
    page: this.props.offset,
  };

  render() {
    const { page, pageOffset } = this.state;
    const { data, children } = this.props;
    return (
      <div className="pagination">
        {
          React.cloneElement(children, { products: data.slice(0, page) })
        }
        <button className="btn block" onClick={() => this.setState({ page: (page + pageOffset) })}>visa fler</button>
      </div>
    );
  }
}

export default Pagination;