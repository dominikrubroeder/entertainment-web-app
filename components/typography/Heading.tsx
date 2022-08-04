import React from 'react';

interface HeadingProps {
  /** h1 ... h6 or empty for rendering a div */
  as?: string;
  children: React.ReactNode;
  className?: string;
  /** should have margin bottom */
  mb?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  as,
  children,
  className,
  mb = true,
}) => {
  const classNames = `text-[2rem] ${
    mb ? 'mb-6' : ''
  } flex items-center gap-4 flex-wrap ${className ? className : ''}`;

  if (as === 'h1') return <h1 className={classNames}>{children}</h1>;
  if (as === 'h2') return <h2 className={classNames}>{children}</h2>;
  if (as === 'h3') return <h3 className={classNames}>{children}</h3>;
  if (as === 'h4') return <h4 className={classNames}>{children}</h4>;
  if (as === 'h5') return <h5 className={classNames}>{children}</h5>;
  if (as === 'h6') return <h6 className={classNames}>{children}</h6>;

  return <div>{children}</div>;
};

export default Heading;
