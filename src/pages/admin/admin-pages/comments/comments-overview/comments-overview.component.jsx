import React, {useState} from 'react';

import './comments-overview.styles.scss';
import FormInput from "../../../../../components/form-input/form-input.component";
import {useSelector} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectArticles} from "../../../../../redux/article/article.selectors";

export default function CommentsOverview({history, match}) {
  const [articleIdInput, setArticleIdInput] = useState('');
  const {articles} = useSelector(createStructuredSelector({
    articles: selectArticles,
  }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const articleExists = articles.find((article) => article.id === articleIdInput);

    if(!articleExists) {
      alert("Identifier is not valid");
    } else {
      history.push(`${match.path}/${articleExists.id}`);
    }
  }

  const handleChange = (event) => {
    const {value} = event.target;
    setArticleIdInput(value);
  }

  return (
    <div className="commentsOverview">
      <form onSubmit={handleSubmit} className="commentsOverview__form">
        <FormInput
          name="articleid"
          value={articleIdInput}
          handleChange={handleChange}
          type="text"
          required
          label="Article ID"
          maxLength={20}
        />
        <button type="submit" className="commentsOverview__form-submitButton">Show Comments</button>
      </form>
    </div>
  );
}