import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
        <div className={styles.container}>
        <h1 id={styles.titulo}>Entrarr</h1>
            <input type="email" placeholder='Email' id={styles.input1} className={styles.box}></input>
            <br></br>
            <input type="password" placeholder='Senha' id={styles.input2} className={styles.box}></input>
            <br></br>

            <Link href="./home"><input type="submit" value="Entrar" id={styles.entrar} className={styles.box}></input></Link>
            <br></br>
            <input type="checkbox" id={styles.check}></input>
            <label for="lembrar" id={styles.lembrar}>Lembre-se de mim</label>
            <p id={styles.robo}>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô <a id={styles.link_robo}>Saiba mais.</a></p>
        </div>
  )
}


