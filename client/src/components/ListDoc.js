import React, { Component } from 'react';
import DocItem from './DocItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetch_actions } from '../actions';

class ListDoc extends Component {
  componentDidMount() {
    this.props.fetchActions();
  }
  render() {
    let { actions } = this.props.docs;
    return actions.map((act) => <DocItem key={act._id} id={act._id} text={act.action} />);
  }
}

const mapStateToProps = (state) => ({
    docs: state.docs,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchActions: fetch_actions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDoc);
