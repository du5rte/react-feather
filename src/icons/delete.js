import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Line,
  Path,
} from 'svgs';

const Delete = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      <Line x1="18" y1="9" x2="12" y2="15" />
      <Line x1="12" y1="9" x2="18" y2="15" />
    </Svg>
  );
});

Delete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Delete.displayName = 'Delete';

export default Delete;
