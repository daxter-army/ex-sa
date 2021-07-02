import React from "react";

import contributors from "../../contributors";

import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes.Modal}>
      <div className={classes.ModalContent}>
        <h2>
          Kudos 🎉 to all the contributors, who helped me in gathering resources
          for this portal.
        </h2>
        <br />
        {contributors.map((contributor) => (
          <p key={contributor.id_} className={classes.CreditsList}>
            {contributor.name}
          </p>
        ))}
        <button className={classes.CloseBtn} onClick={props.closeHandler}>
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
