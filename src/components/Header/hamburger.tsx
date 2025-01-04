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
          className="drawer-overlay"
        ></label>
        <ul className="text-black w-[40%] h-[100%] menu menu-vertical bg-base-200 rounded-box">
          {/* <li>
            <h1>Blog</h1>
          </li> */}
          <li>
            <details open>
              <summary>Rust</summary>
              <ul>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
                {/* <li>
                  <details open>
                    <summary>Parent</summary>
                    <ul>
                      <li>
                        <a>item 1</a>
                      </li>
                      <li>
                        <a>item 2</a>
                      </li>
                    </ul>
                  </details>
                </li> */}
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>C++</summary>
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
            <Link href="board">
            Board
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
