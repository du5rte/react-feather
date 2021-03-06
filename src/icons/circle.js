import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Circle as SvgCircle,
} from 'svgs';

const Circle = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <SvgCircle cx="12" cy="12" r="10" />
    </Svg>
  );
});

Circle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Circle.displayName = 'Circle';

export default Circle;
