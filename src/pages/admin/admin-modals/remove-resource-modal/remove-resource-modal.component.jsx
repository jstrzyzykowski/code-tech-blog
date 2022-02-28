import React from 'react';

import './remove-resource-modal.styles.scss';
import {closeModal} from "../../../../redux/modal/modal.actions";
import ModalWrapper from "../../../../modal/modal-wrapper.component";
import {useDispatch} from "react-redux";

export default function RemoveResourceModal({resourceType, resourceName, removeAction}) {
  const dispatch = useDispatch();

  function handleClick(event) {
    const {name} = event.target;

    if(name === "confirm") removeAction();
    dispatch(closeModal());
  }

  return (
    <ModalWrapper header={`Remove ${resourceType}`}>
      <div className="removeResourceModal__message">
        <p className="removeResourceModal__message-question">Do you really want to remove <span>{resourceType}</span>:</p>
        <p className="removeResourceModal__message-resource">{resourceName}</p>
        <p className="removeResourceModal__message-warning"><span className="label">Warning</span>This action is <span>irreversible</span>!</p>
      </div>
      <div className="removeResourceModal__buttons">
        <button onClick={handleClick} name="confirm">Yes</button>
        <button onClick={handleClick}>Cancel</button>
      </div>
    </ModalWrapper>
  );
}