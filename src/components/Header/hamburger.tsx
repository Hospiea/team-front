import { FRONT_URL } from "@/config/config";
import Link from "next/link";

const Hamburger = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="flex-none my-drawer ">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <ul className="text-black w-[40%] h-[100%] menu menu-vertical bg-base-200 rounded-box">
          <li className="mt-[5%]">
            <details open>
              <summary>여행</summary>
              <ul>
                <li>
                  <label htmlFor="my-drawer">
                    <Link href={`${FRONT_URL}/trip/tour`}>관광</Link>
                  </label>
                </li>
                <li>
                  <label htmlFor="my-drawer">
                    <Link href={`${FRONT_URL}/trip/transport`}>교통</Link>
                  </label>
                </li>
                <li>
                  <label htmlFor="my-drawer">
                    <Link href={`${FRONT_URL}/trip/accomodation`}>숙박</Link>
                  </label>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>고양이</summary>
              <ul>
                <li>
                  <a>item 1</a>
                </li>
                <li>
                  <a>item 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={`${FRONT_URL}/board`}>게시판</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
