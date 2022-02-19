import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    const { source, alternativeText } = this.props;
    return (
      <div className="logo">
        <img src={ source } alt={ alternativeText } />
      </div>
    );
  }
}

Footer.propTypes = {
  source: PropTypes.string.isRequired,
  alternativeText: PropTypes.string.isRequired,
};

export default Footer;
