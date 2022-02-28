import React, {useEffect, useMemo, useState} from 'react';

import { firestore } from '../../../../firebase/firebase.utils';

import User from "./users-item/users-item.component";

import './users.styles.scss';
import AdminLoader from "../../admin-loader/loader.component";
import {usePaginate} from "../../../../hooks/usePaginate/usePaginate.component";
import Pagination from "../../../../components/pagination/pagination.component";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [totalPageNumber, itemsToDisplay, handlePageChange] = usePaginate(users, 10);
  const userList = useMemo(
    () => itemsToDisplay.map(
      (item, index) => <User key={item.id} {...item} index={index + 1} removeUserAsync={removeUserAsync}/>
    ),
    [itemsToDisplay]
  );

  async function removeUserAsync(userDocumentId) {
    try {
      const userRef = firestore.doc(`users/${userDocumentId}`);
      await userRef.delete();
      console.log("Document successfully deleted!");
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    const fetchUsersAsync = async () => {
      try {
        const collectionRef = firestore.collection("users");
        const collectionSnapshot = await collectionRef.get();
        const fetchedUsers = (await collectionSnapshot).docs.map((doc) => {
          const { createdAt, email, photoURL, username, group, hierarchy } = doc.data();

          return {
            id: doc.id,
            createdAt: createdAt.toDate().toLocaleDateString(),
            email,
            photoURL,
            username,
            group,
            hierarchy
          }
        });

        setUsers(fetchedUsers);
      } catch(error) {
        console.log('Error! ', error.message);
      }
    }
    fetchUsersAsync();
  }, []);


  if(users.length === 0) return <AdminLoader/>
  return (
    <>
      <div className="usersPage__info"/>
      <div className="usersPage__list">
        {userList}
      </div>
      {users.length > 10 && <Pagination totalPageNumber={totalPageNumber} handlePageChange={handlePageChange}/>}
    </>
  );
}