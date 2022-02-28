import React from 'react';

import './footer.styles.scss';

export default function Footer() {
  return (
    <footer className="footer">
      {/*<div className="footer__main"/>*/}
      <p className="footer__copy">
        Copyright &copy; 2021 <span>The Nine</span>. Created by <span>Erambo</span>. All right reserved.
      </p>
    </footer>
  );
}
