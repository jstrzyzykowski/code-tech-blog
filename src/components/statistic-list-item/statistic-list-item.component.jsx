import React from 'react'

import './statistic-list-item.styles.scss';

export default function StatisticListItem({iconClass, description, currentValue, maxValue}) {
  return(
    <div className="statisticItem">
      <i className={iconClass}/>
      <p className="statisticItem__desc">{description}</p>
      <p className="statisticItem__number"><span>{currentValue}</span>/{maxValue}</p>
    </div>
  );
}