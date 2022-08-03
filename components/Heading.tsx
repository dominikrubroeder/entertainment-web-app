import React from 'react';

interface HeadingProps {
  /** h1 ... h6 or empty for rendering a div */
  as?: string;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ as, children }) => {
  const className = 'text-[2rem] mb-6 flex items-center gap-4';

  if (as === 'h1') return <h1 className={className}>{children}</h1>;
  if (as === 'h2') return <h2 className={className}>{children}</h2>;
  if (as === 'h3') return <h3 className={className}>{children}</h3>;
  if (as === 'h4') return <h4 className={className}>{children}</h4>;
  if (as === 'h5') return <h5 className={className}>{children}</h5>;
  if (as === 'h6') return <h6 className={className}>{children}</h6>;

  return <div>{children}</div>;
};

export default Heading;
