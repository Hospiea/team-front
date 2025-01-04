import Link from "next/link";
import Hamburger from "./hamburger";
import styles from "./style.module.css";

const HeaderComponent = () => {

  return(
    <header>
      <div className={styles.container}>
        <div className={styles.hamburger}>
          <Hamburger />
        </div>
        <Link href="/">
          Home
        </Link>
        
      </div>
    </header>
  )
}

export default HeaderComponent;