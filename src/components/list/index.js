/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

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
