/* eslint-disable react/jsx-one-expression-per-line */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Container, Company } from './styles';
import Chart from '../chart';

const List = ({ companies }) => (
  <Container>
    {companies.data.map(company => (
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
          {company.news.map(New => (
            <Fragment>
              <p>Titulo: {New.headline}</p>
              <p>Data/Hora: {moment(New.datetime).format('DD/MM/YYYY hh:mm:ss')}</p>
              <p>Fonte: {New.source}</p>
            </Fragment>
          )) }
        </div>

      </Company>
    ))}

  </Container>
);

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

export default List;
