/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CompanyActions from '../../store/actions/companies';

import Global from '../../styles/global';
import {
  Container,
  Form,
} from './styles';

import List from '../../components/list';

class Main extends Component {
  static propTypes = {
    addCompanyRequest: PropTypes.func.isRequired,
  };

  state = {
    companyInput: ''
  }


  handleAddCompanyData = e => {
    e.preventDefault();
    this.props.addCompanyRequest(this.state.companyInput);
  };

  render() {
    return (
      <Container>
        <Global/>
        <Form onSubmit={this.handleAddCompanyData}>
          <input
            placeholder="simbolo da companhia"
            value={this.companyInput}
            onChange={e => this.setState({ companyInput: e.target.value })}
          />
          <button type="submit">{this.props.companies.loading ? <i className="fa fa-spinner fa-pulse"></i> : "Submit"}</button>
        </Form>

        <List companies={this.props.companies} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  companies: state.companies,
});

const mapDispatchToProps = dispatch => bindActionCreators(CompanyActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
