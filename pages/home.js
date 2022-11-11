import Image from 'next/Image'
import Link from 'next/link'
import styled from 'styled-components'

/*
Background color #141414
estilos geral

*/







export default function Home(){

    return(
        <Back>
            <Container>
                <Frase>Quem está assistindo?</Frase>
                <Listageral>
                    <Listafotos><Link href='./filme'><Image src="/perfil1.jfif" width={150} height={150}></Image></Link><Nomeperfis>Dev Sênior</Nomeperfis><br/></Listafotos>
                    <Listafotos><Link href='./filme'><Image src="/perfil2.jfif" width={150} height={150}></Image></Link><br/><Nomeperfis>Dev Junior</Nomeperfis></Listafotos>
                    <Listafotos><Link href='./filme'><Image src="/perfil3.jfif" width={150} height={150}></Image></Link><br/><Trainee> Trainee</Trainee></Listafotos>
                    <Listafotos><Link href='./filme'><Image src="/perfil4.jfif" width={150} height={150}></Image></Link><br/><Nomeperfis>Estagiário</Nomeperfis></Listafotos>
                    <Listafotos><Link href='./filme'><Image src="/perfil5.jfif" width={150} height={150}></Image></Link><br/><Nomeperfis>Dev Pleno</Nomeperfis></Listafotos>
                </Listageral>
                <Button>Gerencias perfis</Button>
            </Container>
        </Back>
    )
}

const Frase = styled.h1`
position:relative;
color:white;
font-size:60px;
padding-left:155px;
bottom: 30px;
font-family: Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif;
`

const Back = styled.div`
width: 100vw;
height: 100vh;
background: #141414;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

`

const Container = styled.div`
position: absolute;

`

const Listageral = styled.ul`
    display:flex;
    flex-direction: row;
`

const Listafotos = styled.li`
list-style: none;   
margin: 2em 0;
color: white;
padding: 0 15px 0 15px;
`
const Nomeperfis = styled.p`
font-size: 1.2vw;
color: grey;
position:relative;
left: 35px;
`
const Trainee = styled.p`
position:relative;
left: 45px;
font-size: 1.2vw;
color: grey;
`


const Button = styled.button`
background-color: transparent;
border: 1px solid grey;
color: grey;
cursor: pointer;
display: block;
font-size: 1.2vw;
letter-spacing: 2px;
margin: 2em 0 1em;
padding: 0.5em 1.5em;
left: 340px;
position:relative;
`;