import React from 'react';

import MemberListItem from "../member-list-item/member-list-item.component";
import {useSelector} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectMembers} from "../../redux/member/member.selectors";

import './member-list.styles.scss';

export default function MemberList() {
  const { members } = useSelector(createStructuredSelector({
    members: selectMembers,
  }));

  return (
    <div className="memberList">
      {members.map((member, index) => <MemberListItem key={member.id} index={index + 1} {...member}/>)}
      {/*<MemberListItem hierarchy="governor" nickname="Isobelly Ironblade"/>*/}
    </div>
  );
}