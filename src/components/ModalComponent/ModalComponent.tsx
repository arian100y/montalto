import React, { useEffect } from "react";
import "./ModalComponent.css";
import { XCircleIcon } from "@heroicons/react/outline";

interface Props {
  showModal: boolean;
  onClose: any;
  children?: any;
  showCloseButton?: boolean;
}

function ModalComponent(props: Props) {
  useEffect(() => {
    const modals = document.querySelectorAll(".modal-window");
    modals.forEach((modal) => {
      if (props.showModal) {
        modal?.classList.add("open");
      } else {
        modal?.classList.remove("open");
      }
    });
  }, [props.showModal]);

  return (
    <>
      {props.showModal === true ? (
        <div id="open-modal" className="modal-window">
          <div style={{ maxWidth: "98%" }}>
            {props.showCloseButton ? (
              <div
                onClick={props.onClose}
                title="Close"
                className="modal-close"
              >
                <XCircleIcon className="h-8 w-8" />
              </div>
            ) : null}

            {props.children}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ModalComponent;
