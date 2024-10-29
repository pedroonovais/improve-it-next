"use client";
import { Card } from "../components/Card/Card";
import { Section } from "../components/Section/Section";
import Image from 'next/image'

import bannerImage from "/bannerHome.jpg"
import alinhamentoImage from "../../public/alinhamento.jpg"
import carrosImage from "../../public/carros.jpg"
import { Hero } from "../components/Hero/Hero";
import { Footer } from "../components/Footer/Footer";
import { ImageArea } from "../components/ImageArea/ImageArea";
import { Wrapper } from "../components/Wrapper/Wrapper";

export default function Home(){
    return(
        <>
            <Hero strImg="/bannerHome.jpg" btnAtendimento={true} height="95vh">
                <h2>Bem-vindo ao CAP – Centro de Assistência Porto Seguro 😊. Queremos te oferecer a melhor opção em qualidade e custo para a manutenção de seu veículo.🚗</h2>
                <br />
                <p>Respeitamos os seus Dados Pessoais. Ao prosseguir, você concordará com os
                    termos de serviço da Porto Seguro e compartilhará voluntariamente seus dados
                    pessoais, os quais serão utilizados exclusivamente para execução deste serviço.
                </p>
                <br />
                <br />
            </Hero>
            <Section>
                <Wrapper>
                    <Card>
                        <h1>Serviços Disponíveis:</h1>
                        <ImageArea>
                            <Image 
                              src={alinhamentoImage}
                              alt="Alinhamento" 
                            />
                        </ImageArea>
                        <p>Alinhamento de direção</p>
                    </Card>
                </Wrapper>
                <Wrapper>
                    <Card>
                        <h1>Por que escolher a CAP?</h1>
                        <ImageArea height="80%">
                            <Image 
                              src={carrosImage}
                              alt="Carros" 
                            />
                        </ImageArea>
                        <p>
                            Nos Centros Automotivos Porto você encontra profissionais especializados para realizar serviços de manutenção e revisão do seu carro. 
                            Com orçamentos assertivos e um processo cada vez mais digitalizado, oferecemos uma experiência rápida, segura e de ótima qualidade para segurados e não segurados.
                        </p>
                    </Card>
                </Wrapper>
            </Section>
            <Footer />
        </>
    )
}