import React from 'react';

interface LayoutBlockProps {
  title: string;
  className?: string;
}

const LayoutBlock: React.FC<LayoutBlockProps> = ({ title, className }) => {
  return (
    <div className={`border border-gray-400 bg-gray-100 p-2 text-center text-sm font-semibold shadow-sm ${className}`}>
      {title}
    </div>
  );
};

export default LayoutBlock;