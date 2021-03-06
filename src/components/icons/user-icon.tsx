import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface UserIconProps {
  width?: number;
  height?: number;
}

export const UserIcon = ({width, height}: UserIconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 21 24" fill="none">
      <Path
        d="M10.188 12.0006C13.088 12.0006 15.4383 9.64987 15.4383 6.75031C15.4383 3.85074 13.088 1.5 10.188 1.5C7.28806 1.5 4.93773 3.85074 4.93773 6.75031C4.93773 9.64987 7.28806 12.0006 10.188 12.0006ZM12.2677 13.9695H8.10842C4.18341 13.9695 1 17.1525 1 21.0779C1 21.863 1.6366 22.5 2.42168 22.5H17.9552C18.7403 22.5012 19.3761 21.8654 19.3761 21.0779C19.3761 17.1525 16.1931 13.9695 12.2677 13.9695Z"
        stroke="black"
        strokeWidth="1.8"
      />
    </Svg>
  );
};
