import React from 'react'
import RecruitmentListItem from '../recruitment-list-item/recruitment-list-item.component';

import './recruitment-list.styles.scss';

export default function RecruitmentList() {
  return(
    <div className="recruitmentList">
      <RecruitmentListItem/>
      <RecruitmentListItem/>
      <RecruitmentListItem/>
    </div>
  );
}