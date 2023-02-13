import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    const { history: { push } } = this.props;
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">Feedback</h1>
        <button
          data-testid="btn-ranking"
          onClick={ () => push('/ranking') }
        >
          {' '}
          Ranking
          {' '}

        </button>
        <button
          data-testid="btn-go-home"
          onClick={ () => push('/') }
        >
          {' '}
          Ínicio
          {' '}

        </button>
      </div>
    );
  }
}
Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Feedback;
