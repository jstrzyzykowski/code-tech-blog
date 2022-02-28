import React from 'react';
import { useSelector } from 'react-redux';

import Loader from '../../components/loader/loader.component';
import NewestArticle from '../../components/newest-article/newest-article.component';
import ArticleList from '../../components/article-list/article-list.component';
import StatisticList from '../../components/statistic-list/statistic-list.component';
import RecruitmentList from '../../components/recruitment-list/recruitment-list.component';
import StreamList from "../../components/stream-list/stream-list.component";
import PanelDiscord from "../../components/panel-discord/panel-discord.component";
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component";
import Fog from '../../components/fog/fog.component';

import './home.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectIsArticlesLoaded} from "../../redux/article/article.selectors";


export default function HomePage() {

  // TODO: Not necessary - for remove in the future
  // const { articles, isFetched, isFetching} = useSelector((state) => state.article);
  const { isLoaded } = useSelector(createStructuredSelector({
    isLoaded: selectIsArticlesLoaded
  }));

  if(!isLoaded) return <Loader/>
  return (
    <>
      <div className="heroText">
        <div className="heroText__wrapper">
          <p className="heroText__wrapper-title">Make the map</p>
          <p className="heroText__wrapper-color">Purple</p>
        </div>
        <p className="heroText__subtitle">With by far <span>the best companion</span> on his side!</p>
      </div>
      {/*<div className="welcome">*/}
      {/*  <Fog/>*/}
      {/*  <div className="welcome__text">*/}
      {/*    <div className="welcome__text-wrapper">*/}
      {/*      <p className="welcome__text-wrapper-title">Make the map</p>*/}
      {/*      <p className="welcome__text-wrapper-color">Purple</p>*/}
      {/*    </div>*/}
      {/*    <p className="welcome__text-subtitle">With by far <span>the best companion</span> on his side!</p>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="homepage">
        <div className="homepage__hero">
          <SectionWrapper sectionIcon="fas fa-exclamation" sectionTitle="Newest Info" padding={false}>
            <NewestArticle/>
          </SectionWrapper>
          <SectionWrapper sectionIcon="fas fa-chart-bar" sectionTitle="Statistics" >
            <StatisticList/>
          </SectionWrapper>
          <SectionWrapper sectionIcon="fas fa-search" sectionTitle="Currently looking for">
            <RecruitmentList/>
          </SectionWrapper>
        </div>
        <div className="homepage__wrapper">
          <SectionWrapper sectionIcon="fas fa-newspaper" sectionTitle="Guild news">
            <ArticleList />
          </SectionWrapper>
          <div className="homepage__wrapper-asideWrapper">
            <PanelDiscord />
            <SectionWrapper sectionIcon="fab fa-twitch" sectionTitle="Streamers">
              <StreamList />
            </SectionWrapper>
          </div>
        </div>
      </div>
    </>
  );
}
