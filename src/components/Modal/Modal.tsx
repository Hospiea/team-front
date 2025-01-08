import { BACKEND_URL, FRONT_URL } from "@/config/config";
import { axiosInstance } from "@/utils/axiosInstance";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

type Props = {
  id: number | undefined;
}

const ModalComponent = ({id}: Props) => {
  const [link, setLink] = useState<string>("");
  const ref = useRef<HTMLDialogElement>(null);

  const handlePush = () => {
    ref.current?.showModal();
    init();
  }

  const init = async () => {
    try {
      const response = await axiosInstance.post(`${BACKEND_URL}/travel/share`, {
        id: id,
      });
      const frontLink = `${FRONT_URL}/${response.data}`;
      setLink(frontLink);
    } catch(e) {
      console.log(e);
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    alert("복사되었습니다.");
    ref.current?.close();
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
          {link}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button onClick={handleCopy} className="btn">복사</button>
              <button className="btn">닫기</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalComponent;