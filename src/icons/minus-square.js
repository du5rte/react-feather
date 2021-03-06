import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Line,
  Rect,
} from 'svgs';

const MinusSquare = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <Svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Line x1="8" y1="12" x2="16" y2="12" />
    </Svg>
  );
});

MinusSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MinusSquare.displayName = 'MinusSquare';

export default MinusSquare;
