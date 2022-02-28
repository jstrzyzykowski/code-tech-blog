import React from "react";

import './section-wrapper.styles.scss';

export default function SectionWrapper({children, sectionIcon, sectionTitle, padding=true}) {
  return (
    <div className="sectionWrapper">
      <div className="sectionWrapper__header">
        <i className={sectionIcon}/>
        <p className="sectionWrapper__header-title">{sectionTitle}</p>
      </div>
      <div className={`sectionWrapper__content ${padding ? '' : 'no-padding'}`}>
        {children}
      </div>
    </div>
  );
}