import _ from 'lodash';
import React, { forwardRef } from 'react';
import { Circle } from '../../../../components/Circle';
import { Group } from '../../../../components/Group';
import { Rect } from '../../../../components/Rect';
import { Row } from '../../../../components/Row';
import { Mark, PlotContext, plotMarkReified } from '../Plot';

export const dot = <T,>(data: T[], { x, y, color }: { x: string; y: string; color: string }): Mark => ({
  data,
  encodings: { x, y, color },
  scale: (
    channels: { X: number[]; Y: number[]; COLOR: string[] },
    scales: { xScale: any; yScale: (y: number) => number; colorScale: (color: string) => string },
    _dimensions: any,
  ) => {
    const { X, Y, COLOR } = channels;

    const { xScale, yScale, colorScale } = scales;

    const indices = _.range(X.length);
    return {
      // TODO: fix this!
      stroke: colorScale(COLOR[0]),
      r: 3,
      points: indices.map((i) => ({
        x: xScale(X[i]),
        y: yScale(Y[i]),
      })),
    };
  },
  render: (data: { stroke: string; points: { x: number; y: number }[]; r: number }) => {
    return (
      <Group>
        {data.points.map(({ x, y }) => (
          <Circle cx={x} cy={y} r={data.r} stroke={data.stroke} fill={'white'} strokeWidth={1} />
        ))}
      </Group>
    );
  },
});

export const Dot: React.FC<{ data?: any[]; encodings: { x: string; y: string; color: string } }> = forwardRef(
  (props, ref) => {
    const context = React.useContext(PlotContext);

    const { encodings } = props;
    const data = props.data ?? context.data;
    const { x, y, color } = encodings;
    const mark = dot(data, { x, y, color });
    return <Group ref={ref}>{plotMarkReified(mark, context.scales, context.dimensions)}</Group>;
  },
);
