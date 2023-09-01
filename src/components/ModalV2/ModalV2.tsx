import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
interface Props {
  modalKey?: string;
  type?: string | null;
  title?: string;
  children?: React.ReactNode;
  showCloseButton?: boolean;
  allowOutsideClick?: boolean;
  showModal: boolean;
  onClose: () => void;
}

const ModalV2 = React.memo(
  ({
    modalKey = "",
    showModal = false,
    showCloseButton = true,
    allowOutsideClick = true,
    title,
    children,
    onClose = () => {},
  }: Props) => {
    const closeButtonRef = useRef(null);

    return (
      <Transition.Root show={showModal} as="template" style={{ zIndex: 9999 }}>
        <Dialog
          as="div"
          key={modalKey}
          static
          style={{ zIndex: 9999 }}
          className="fixed  inset-0 overflow-y-auto"
          initialFocus={closeButtonRef}
          open={true}
          onClose={() => {
            if (allowOutsideClick) onClose();
          }}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div>
              {/* inset-0 -inset-x-2 md:-inset-x-0 */}
              <Dialog.Overlay className="fixed inset-0 -inset-x-2 bg-gray-500 bg-opacity-75 transition-opacity w-full" />
            </div>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div>
              <div className="inline-block  bg-white rounded-lg px-2 md:px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-auto max-w-lg md:max-w-2xl lg:max-w-3xl sm:p-6">
                <div className="w-full sm:flex sm:items-start">
                  <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="flex flex-row justify-between">
                      <Dialog.Title
                        as="div"
                        className="text-lg leading-6 font-semibold text-tc-blue-300 pt-2"
                      >
                        {title}
                      </Dialog.Title>

                      <button
                        type="button"
                        ref={closeButtonRef}
                        className="bg-transparent font-bold text-tc-gray-700 ring-transparent focus:ring-transparent focus:border-transparent rounded-none"
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <XIcon className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="w-full px-2 md:px-6">{children}</div>
                  </div>
                </div>
                <div
                  className={`${
                    !showCloseButton
                      ? "hidden"
                      : "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"
                  } `}
                >
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-tc-blue-300 text-base font-medium text-white hover:bg-tc-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tc-blue-300 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      onClose();
                    }}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
);

export default ModalV2;
