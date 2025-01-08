import { useEffect, useRef } from "react";

const ModalComponent = () => {
  
  const ref = useRef<HTMLDialogElement>(null);

  const handlePush = () => {
    ref.current?.showModal();
  }
  
  return (
    <div>
      <button
        className="bg-black text-white pl-4 pr-4 pt-2 pb-2 mt-4 rounded-xl"
        onClick={handlePush}
      >
        초대하기
      </button>
      <dialog ref={ref} id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">초대링크</h3>
          
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalComponent;