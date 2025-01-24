import React from 'react';

interface HeaderProps {
  pages: { [id: string]: string };
  onPageSelect: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ pages, onPageSelect }) => {
  return (
    <div className="header">
      {Object.entries(pages).map(([id, displayName]) => (
        <div key={id} className="page" onClick={() => onPageSelect(id)}>
          {displayName}
        </div>
      ))}
    </div>
  );
};

export default Header;
