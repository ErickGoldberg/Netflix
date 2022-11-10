import Image from 'next/Image'
import Link from 'next/link'

/*
Background color #141414
estilos geral
*/

export default function filmes(){
    return(
        <div>
            <h1>Quem está assistindo?</h1>
            <ul>
                <li><Link href='./filme'><Image src="/perfil1.jfif" width={150} height={150}></Image></Link>Dev Sênior</li>
                <li><Link href='./filme'><Image src="/perfil2.jfif" width={150} height={150}></Image></Link>Dev Junior</li>
                <li><Link href='./filme'><Image src="/perfil3.jfif" width={150} height={150}></Image></Link>Trainee</li>
                <li><Link href='./filme'><Image src="/perfil4.jfif" width={150} height={150}></Image></Link>Estagiário</li>
                <li><Link href='./filme'><Image src="/perfil5.jfif" width={150} height={150}></Image></Link>Dev Pleno</li>
            </ul>
            <input type="submit" value="Gerenciar perfis"></input>
        </div>
    )
}
