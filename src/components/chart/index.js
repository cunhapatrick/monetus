import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Chart = ({ chartData }) => (
  <Container>
    <LineChart
      width={300}
      height={300}
      data={chartData}
      margin={{
        top: 5, right: 20, left: 5, bottom: 5,
      }}
    >
      <XAxis dataKey="label" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" stroke="#8884d8" dataKey="high" activeDot={{ r: 8 }} />
      <Line type="monotone" stroke="#82ca9d" dataKey="low" />
    </LineChart>
  </Container>
);

Chart.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.shape({
    high: PropTypes.number,
    low: PropTypes.number,
    label: PropTypes.string,
  })).isRequired,
};

export default Chart;
