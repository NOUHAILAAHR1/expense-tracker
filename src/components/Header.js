import React from 'react';

function Header({total,}) {
  return (
    <header>
      <h1>Expense Tracker</h1>
      <div className="total">${total}</div>
    </header>
  );
}

export default Header;