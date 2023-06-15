import { ResponsiveLine } from '@nivo/line';
import { ResponsiveStream } from '@nivo/stream';
import React from 'react';


export const StreamChart = () => {
  return (
    // <div>index</div>

    // <ResponsiveStream
    //   data={data}
    //   keys={[
    //     'Raoul',
    //     'Josiane',
    //     'Marcel',
    //     'René',
    //     'Paul',
    //     'Jacques'
    //   ]}
    //   margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    //   axisTop={null}
    //   axisRight={null}
    //   axisBottom={{
    //     // orient: 'bottom',
    //     tickSize: 5,
    //     tickPadding: 5,
    //     tickRotation: 0,
    //     legend: '',
    //     legendOffset: 36
    // }}
    // />

    <ResponsiveLine
      curve="monotoneX"
      data={[
        {
          id: 'fake corp. A',
          data:
            [{
              x: 0,
              y: 7
            }, {
              x: 1,
              y: 5
            }, {
              x: 2,
              y: 11
            }, {
              x: 3,
              y: 9
            }, {
              x: 4,
              y: 13
            }, {
              x: 7,
              y: 16
            }, {
              x: 9,
              y: 12
            }]
        }
      ]}
      margin={{ top: 50, right: 30, bottom: 50, left: 30 }}
      xScale={{ type: 'linear' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
      }}
    />
  );
}
