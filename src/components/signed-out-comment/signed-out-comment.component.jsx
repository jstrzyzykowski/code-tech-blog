import React from 'react';

import './signed-out-comment.styles.scss';

export default function SignedOutComment() {
  return (
    <div className="signedOutComment">
      <p className="signedOutComment__text">
        Comments only for <span>logged in</span> users.
      </p>
    </div>
  );
}
