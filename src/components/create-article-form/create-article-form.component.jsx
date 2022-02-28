import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {addArticleStart, addArticleStartAsync} from '../../redux/article/article.actions';
import { storage } from '../../firebase/firebase.utils';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import FormTextarea from '../form-textarea/form-textarea.component';

import DefaultImage from '../../assets/image-custom-2.webp';

import './create-article-form.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectIsArticleAdding} from "../../redux/article/article.selectors";
import {closeModal} from "../../redux/modal/modal.actions";

export default function CreateArticleForm() {
  const { currentUser, isArticleAdding } = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
    isArticleAdding: selectIsArticleAdding,
  }));
  const [articleData, setArticleData] = useState({
    articleTitle: '',
    articleImage: null,
    articleText: '',
    src: DefaultImage,
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setArticleData({
      ...articleData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formatedTitle = articleData.articleTitle.toLowerCase().replace(/\s+/g, '-');

      const storageRef = storage.ref();
      const fileRef = storageRef.child(`articles/${formatedTitle}`);
      //TODO: Check for what is the task object returned bellow
      await fileRef.put(articleData.articleImage);
      const fileURL = await fileRef.getDownloadURL();

      const article = {
        publishedBy: currentUser.username,
        publishedDate: new Date().toJSON(),
        imageURL: fileURL,
        title: articleData.articleTitle,
        text: articleData.articleText,
        uniqueName: formatedTitle,
        comments: [],
      };

      dispatch(addArticleStart(article));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleFileChange = (event) => {
    const { name } = event.target;
    const file = event.target.files[0];

    if(file) {
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        setArticleData(prevValue => ({
          ...prevValue,
          src: event.target.result,
          [name]: file,
        }));
      });

      reader.readAsDataURL(file);
    } else {
      setArticleData(prevValue => ({
        ...prevValue,
        articleImage: null,
        src: DefaultImage,
      }))
    }
  }

  return (
    <form className="createArticleForm" onSubmit={handleSubmit}>
      <FormInput
        name="articleTitle"
        value={articleData.articleTitle}
        handleChange={handleChange}
        type="text"
        required
        label="Title"
      />
      <label className="createArticleForm__input">
        <div className={`createArticleForm__input-imageWrapper ${articleData.src !== DefaultImage ? 'loaded' : ''}`}>
          <img src={articleData.src} alt=""/>
        </div>
        <input type="file" onChange={handleFileChange} name="articleImage"/>
      </label>
      <FormTextarea
        rows={12}
        name="articleText"
        value={articleData.articleText}
        handleChange={handleChange}
        required
        label="Description"
      />
      <CustomButton type="submit" fluid disabled={isArticleAdding}>Create</CustomButton>
    </form>
  );
}
