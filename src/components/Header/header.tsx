import Hamburger from "./hamburger";
import styles from "./style.module.css";

const HeaderComponent = () => {

  return(
    <header>
      <div className={styles.container}>
        <div className={styles.hamburger}>
          <Hamburger />
        </div>
        <div>
          Home
        </div>
        
      </div>
    </header>
  )
}

export default HeaderComponent;