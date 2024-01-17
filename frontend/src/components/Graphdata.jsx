import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

const data = [
  {
    name: 'Sep',
    patients: 125,
    target: 203,
    amt: 400,
  },
  {
    name: 'Oct',
    patients: 185,
    target: 152,
    amt: 221,
  },
  {
    name: 'Nov',
    patients: 140,
    target: 170,
    amt: 229,
  },
  {
    name: 'Dec',
    patients: 278,
    target: 390,
    amt: 200,
  },
  {
    name: 'Jan',
    patients: 189,
    target: 480,
    amt: 218,
  },
  {
    name: 'Feb',
    patients: 239,
    target: 380,
    amt: 250,
  },
  {
    name: 'March',
    patients: 349,
    target: 430,
    amt: 210,
  },
];

const cardinal = curveCardinal.tension(0.2);

export default class Example extends PureComponent {
  // static demoUrl = 'https://codesandbox.io/s/area-chart-different-shapes-z94k6';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="patients" stroke="#8884d8" fill="#7F00AC" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="target" stroke="#82ca9d" fill="#7F00AC" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
