import React from 'react';

import './members.styles.scss';
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component";
import HierarchyList from "../../components/hierarchy-list/hierarchy-list.component";
import MemberList from "../../components/member-list/member-list.component";

export default function MembersPage() {
  return (
    <>
      {/*<div className="membersPage__hero"/>*/}
      <div className="membersPage__content">
        <SectionWrapper sectionIcon="fas fa-image" sectionTitle="Our Army">
          <MemberList/>
        </SectionWrapper>
        <SectionWrapper sectionIcon="fas fa-image" sectionTitle="Hierarchy">
          <HierarchyList/>
        </SectionWrapper>
      </div>
    </>
  );
}