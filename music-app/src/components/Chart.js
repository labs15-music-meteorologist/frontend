import React, { Component } from 'react';
import {
  Surface,
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  Tooltip,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  LabelList,
  Label
} from 'recharts';
import { getCurrentSong, getTrackInfo } from '../actions';
import { connect } from 'react-redux';

const data = [
  { subject: 'Acousticness', A: this.props.features.data.acousticness},
  { subject: 'Danceability', A: 98, B: 130 },
  { subject: 'Energy', A: 86, B: 130 },
  { subject: 'Instrumentalness', A: 99, B: 100 },
  { subject: 'Liveness', A: 85, B: 90 },
  { subject: 'Valence', A: 65, B: 85 }
];

const initialState = { data };

class Chart extends Component {
  static displayName = 'RadarChartDemo';

  constructor() {
    super();

    this.state = initialState;
    this.handleChangeData = this.handleChangeData.bind(this);
  }

  handleChangeData() {
    // this.setState(() => _.mapValues(initialState, changeNumberOfData));
    this.setState(data);
  }

  handleMouseEnter(props) {
    console.log(props);
  }

  render() {
<<<<<<< HEAD
    console.log('Current Song', this.props);
=======
>>>>>>> d27811e0e125b482c1a3fe747208aeb13e1e2ce0
    const { data } = this.state;
    console.log('props.player', this.props);

    return (
      <div>
        <a
          href='javascript: void(0);'
          className='btn update'
          onClick={this.handleChangeData}>
          change data
        </a>
        <br />
        <p>A simple RadarChart</p>

        {/* Specify chart elements from import list to use them ex. PolarAngleAxis are the subjects */}

        <RadarChart
          label={{ fill: 'white' }}
          value={{ color: 'white' }}
          cx={300}
          cy={250}
          outerRadius={150}
          width={600}
          height={500}
          data={data}>
          <PolarGrid />
          <PolarAngleAxis stroke='white' dataKey='subject' />
          <Legend formatter={this.renderColorfulLegendText} />
          <PolarRadiusAxis tick={{ fill: 'white' }} />
          <Radar
            tick={{ fill: 'white' }}
            name='Mike'
            dataKey='A'
            stroke='red'
            fill='white'
            fillOpacity={0.6}
          />
          {/* <Label fill="white" /> */}
        </RadarChart>

        {/* <p>A RadarChart of two students' score</p>
        <RadarChart
          cx={300}
          cy={250}
          outerRadius={150}
          width={600}
          height={500}
          data={data}
        >
          <PolarGrid />
          <Tooltip />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
            onMouseEnter={this.handleMouseEnter}
          />
          <Radar
            name="Lily"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
            animationBegin={180}
          />
          <Legend />
          <PolarRadiusAxis domain={[0, 150]} label="score"/>
        </RadarChart> */}
        {/* <p>RadarChart wrapped by ResponsiveContainer</p> */}
        {/* <div style={{ width: '100%', height: '100%' }}>
          <ResponsiveContainer>
            <RadarChart data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Tooltip />
              <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}>
                <LabelList />
              </Radar>
            </RadarChart>
          </ResponsiveContainer>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // id: state.getCurrentSong,
  trackInfo: state.getTrackInfo,
});

export default connect(
  mapStateToProps,
<<<<<<< HEAD
  { getTrackInfo, getCurrentSong }
=======
  { getTrackInfo },
>>>>>>> d27811e0e125b482c1a3fe747208aeb13e1e2ce0
)(Chart);
