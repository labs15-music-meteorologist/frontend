import React, { Component } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

class Chart extends Component {
  static displayName = 'RadarChartDemo';

  state = {
    data: [
      { subject: 'Acousticness', A: 0 },
      { subject: 'Danceability', A: 0 },
      { subject: 'Energy', A: 0 },
      { subject: 'Instrumentalness', A: 0 },
      { subject: 'Liveness', A: 0 },
      { subject: 'Valence', A: 0 },
    ],
  };

  componentDidUpdate(prevProps) {
    if (this.props.features.id !== prevProps.features.id) {
      this.setState({
        data: [
          {
            subject: 'Acousticness',
            A: this.props.features.acousticness * 100,
          },
          {
            subject: 'Danceability',
            A: this.props.features.danceability * 100,
          },
          { subject: 'Energy', A: this.props.features.energy * 100 },
          {
            subject: 'Instrumentalness',
            A: this.props.features.instrumentalness * 100,
          },
          { subject: 'Liveness', A: this.props.features.liveness * 100 },
          { subject: 'Valence', A: this.props.features.valence * 100 },
        ],
      });
    }
  }

  handleMouseEnter(props) {}

  render() {
    return (
      <div>
        {/* Specify chart elements from import list to use them ex. PolarAngleAxis are the subjects */}
        {/* <ResponsiveContainer width='99%' height='99%'> */}
        <RadarChart
          label={{ fill: 'white' }}
          value={{ color: 'white' }}
          cx={188}
          cy={120}
          outerRadius={100}
          width={377}
          height={240}
          data={this.state.data}>
          <PolarGrid />
          <PolarAngleAxis stroke='white' dataKey='subject' />
          {/* <Legend formatter={this.renderColorfulLegendText} /> */}
          <PolarRadiusAxis tick={{ fill: 'white' }} />
          <Radar
            tick={{ fill: 'white' }}
            // name='Audio Features'
            dataKey='A'
            stroke='#38b6ff'
            stroke-width='2%'
            fill='#5ce1e6'
            fillOpacity={0.7}
          />
        </RadarChart>
        {/* </ResponsiveContainer> */}
      </div>
    );
  }
}

export default Chart;
