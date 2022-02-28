import React from 'react'
import StatisticListItem from '../statistic-list-item/statistic-list-item.component';

import './statistic-list.styles.scss';
import {useSelector} from "react-redux";
import {createStructuredSelector} from "reselect";
import { selectMembersLength } from "../../redux/member/member.selectors";

export default function StatisticList() {
  const { membersLength } = useSelector(createStructuredSelector({
    membersLength: selectMembersLength,
  }));

  return(
    <div className="statisticList">
      <StatisticListItem iconClass="fab fa-fort-awesome" description="Territories" currentValue={2} maxValue={12}/>
      <StatisticListItem iconClass="fas fa-users" description="Members" currentValue={membersLength} maxValue={100}/>
      <StatisticListItem iconClass="fas fa-handshake" description="Alliances" currentValue={0} maxValue={10}/>
    </div>
  );
}