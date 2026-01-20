import styles from './Header.module.css'

import rocket from '../rocket.png'



export function Header() {
  return (
    <>
     <header className={styles.header}>
        <img src={rocket}  className={styles.iconSpaceCraft} alt="nave espacial" />
        <p className={styles.textLogoBlue}> to </p>
        <p className={styles.textLogoPurple}>do </p>
        </header>
    </>
  )
}