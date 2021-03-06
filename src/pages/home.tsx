import React from 'react';
import {FcAbout} from 'react-icons/fc';
import '../styles/pages/home.css';
import Header from '../components/header';
import Certification from '../components/Home/Certification';
import Skills from '../components/Home/Skills';
import Footer from '../components/footer';

export default function Home() {
    return (
        <>
            <Header />

            <div className="title">
                <h1>- Sobre mim <FcAbout size={25} /></h1>
            </div>

            <main>
                <div className="container">
                    <img src="https://avatars0.githubusercontent.com/u/18745378?s=460&u=1ad1ae2a6a433d2d611cfdf097c4c0e1239c525f&v=4" alt="foto" className="photo-home"/>
            
                    <div className="description">
                        <p>Experiência de 9 anos relativos à redução de índice de Fraude, Prevenção de Perdas, Gerenciamento de Risco, análise e elaboração de planos de ação no controle preventivo e auditoria interna. Responsável por mapeamento de Processos de Negócios da Segurança Corporativa da AeC.</p>
                        <p>Certificado em Scrum, SFC e SFPC pela SCRUMStudy e CertiProf. Tenho conhecimentos em BPMN. Estudando LGPD, onde almejo obter as certificações da EXIN, desde Segurança da Informação até o de DPO. Atualmente sou membro público da Associação Nacional dos Profissionais de Privacidade de Dados, a ANPPD.</p>
                        <p>Conhecimento nas linguagens de programação Pascal, Visual Basic, Delphi, C++, C# e SQL. Estudando Sistemas de Informação pela PUC Minas. Busco sempre me atualizar quanto às novas tecnologias de desenvolvimento de softwares do mercado. Atualmente estou estudando JavaScript, HTML, CSS, Node.JS, React.JS, Git, entre outros.</p>
                        <p>Sou uma pessoa extrovertida e alegre, amo estar com minha família e amigos. Gosto de leitura, quadrinhos, animes, música, teatro, cinema, bike, cozinha e apaixonado por videogames, nerd rsrs. Sempre procuro um tempo para sair com minha família, também aprender e, principalmente ensinar ao meu filho de 13 anos os passos da programação.</p>
                    </div>
                </div>
                
                <Certification />

                <Skills />
            </main>

            <footer>
                <Footer />
            </footer>            
        </>        
    );
}