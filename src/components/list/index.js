/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Container, Company } from './styles';
import Chart from '../chart';

export default class List extends Component{

  errorHandle = companies => {
    if (companies.data.length > 0 && companies.data[0].status!==404){
      return (
        <Container>
          { companies.data.map((company) => (
            <Company key={company.symbol}>
              <header>
                <strong>{company.name}</strong>
                <small>{company.ceo}</small>
              </header>
            <ul>
              <li>
                {company.latestPrice} <small>Último valor de ação</small>
              </li>
              <li>
                <a href={company.website}>Acessar Website</a>
              </li>
            </ul>
          <Chart chartData={company.chartData} />
        <br />

        <div>
          {company.news.map((New,index) => (
            <Fragment key={index}>
              <p>Titulo: {New.headline}</p>
              <p>Data/Hora: {moment(New.datetime).format('DD/MM/YYYY hh:mm:ss')}</p>
              <p>Fonte: {New.source}</p>
            </Fragment>
          )) }
        </div>

      </Company>
    ))
  }

  </Container>
      )
    } else{
      return "";
    }
  }

  render(){

    return this.errorHandle(this.props.companies);
  }

}

List.propTypes = {
  companies: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape({
      latestPrice: PropTypes.number,
      companyData: PropTypes.shape({
        companyName: PropTypes.string,
        website: PropTypes.string,
        CEO: PropTypes.string,
        symbol: PropTypes.string,
      }),
    })),
  }).isRequired,
};
