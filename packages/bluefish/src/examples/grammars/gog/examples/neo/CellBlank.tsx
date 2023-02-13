import { Rect, withBluefish } from '../../../../../main';

export type CellBlankProps = {
  x?: number;
  y?: number;
  cellSize?: number;
};

export const CellBlank = withBluefish((props: CellBlankProps) => {
  const { x = 0, y = 0, cellSize = 10 } = props;
  return <Rect x={x} y={y} width={cellSize} height={cellSize} fill="white" stroke="none" opacity="0.0" />;
});
