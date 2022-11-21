import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Background from 'next/image'

export default function Login() {
  return (
    <div>
      <Background src="/background.webp" fill></Background>
        <div className={styles.container}>
          <Menu></Menu>
        </div>
    </div>
  )
}

function Menu(){
  return(
    <div>
      <h1 id={styles.titulo}>Entrar</h1>
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
