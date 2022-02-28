import React from 'react';

import SectionWrapper from "../../components/section-wrapper/section-wrapper.component";

import WhoWeAreBanner from '../../assets/who-we-are-2.png';

import './about.styles.scss';
import RuleList from "../../components/rule-list/rule-list.component";
import FocusList from "../../components/focus-list/focus-list.component";

export default function AboutPage() {
  return (
    <>
      {/*<div className="aboutPage__hero"/>*/}
      <div className="aboutPage__content">
        {/*<div className="aboutPage__content-wrapper">*/}
        <SectionWrapper sectionIcon="fas fa-image" sectionTitle="Who we are">
          <div className="aboutPage__content-imageWrapper">
            <img src={WhoWeAreBanner} alt=""/>
          </div>
          <p className="aboutPage__content-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto at culpa cupiditate, debitis
            delectus deleniti eaque, error esse inventore libero magnam maxime minima modi neque nesciunt nostrum
            obcaecati odio officia officiis optio placeat porro quaerat quas quisquam reiciendis rem repudiandae sed
            similique sit tenetur veritatis vitae voluptates? Amet dolorem dolores doloribus inventore nisi nostrum!
            Amet
            animi architecto atque consequatur culpa delectus deleniti dignissimos dolorum eligendi eos error ex
            explicabo
            facere fugiat fugit id illo impedit in mollitia necessitatibus nemo nostrum odio officia officiis quas
            quasi
            quidem quos reiciendis rem, saepe tempora veniam vero voluptatem. Ab alias aliquid architecto delectus
            dolores, dolorum error esse fugit illo maiores minima praesentium quae quisquam quos, tenetur ut veniam?
            Ad
            adipisci mollitia tempora voluptatibus?
          </p>
        </SectionWrapper>
        <SectionWrapper sectionIcon="fas fa-image" sectionTitle="InGame Focus">
          <FocusList/>
        </SectionWrapper>
        <SectionWrapper sectionIcon="fas fa-image" sectionTitle="Golden Rules">
          <RuleList/>
        </SectionWrapper>
        {/*</div>*/}

      </div>
    </>
  );
}