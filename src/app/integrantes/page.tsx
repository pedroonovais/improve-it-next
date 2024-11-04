"use client"
import { Card } from "../../components/Card/Card";
import { Hero } from "../../components/Hero/Hero";
import { Section } from "../../components/Section/Section";
import Image from 'next/image'

import fotoPedroNovais from "../../assets/pedroNovais.jpg";
import fotoViniciusBeda from "../../assets/viniciusBeda.jpg";
import fotoRodrigoRios from "../../assets/rodrigoBohac.jpg";
import { Footer } from "../../components/Footer/Footer";
import { ImageArea } from "../../components/ImageArea/ImageArea";
import { Wrapper } from "../../components/Wrapper/Wrapper";

export default function Members() {
  return (
    <>
      <Hero strImg="/bannerEquipe.jpg" btnAtendimento={false} height="95vh">
        <h2>
          Conheça nossa equipe, dê uma olhada nos rostos que tornam tudo
          possível na improve it!
        </h2>
      </Hero>
      <Section>
        <h1>Integrantes:</h1>
        <p>Link para o nosso repositório no github:</p>
        <p>
          <a
            href="https://github.com/pedroonovais/improve-it-next"
            target="_blank"
          >
            https://github.com/pedroonovais/web-improve-it
          </a>
        </p>
        <Wrapper>
          <Card>
            <ImageArea>
                <Image src={fotoPedroNovais} alt="Pedro Novais"/>
            </ImageArea>
            <h3>Pedro Novais</h3>
            <p>RM: 555276</p>
            <p>Turma: 1TDSPX</p>
            <p>
              <a href="https://github.com/pedroonovais" target="_blank">
                Link GitHub
              </a>
            </p>
          </Card>
          <Card>
            <ImageArea>
              <Image src={fotoRodrigoRios} alt="Rodrigo Rios"/>
            </ImageArea>
            <h3>Rodrigo Rios</h3>
            <p>RM: 554826</p>
            <p>Turma: 1TDSPX</p>
            <p>
              <a href="https://github.com/RoRios" target="_blank">
                Link GitHub
              </a>
            </p>
          </Card>
          <Card>
            <ImageArea>
                <Image src={fotoViniciusBeda} alt="Vinicius Beda"/>
            </ImageArea>
            <h3>Vinicius Beda</h3>
            <p>RM: 554914</p>
            <p>Turma: 1TDSPX</p>
            <p>
              <a href="https://github.com/viniciusbeda" target="_blank">
                Link GitHub
              </a>
            </p>
          </Card>
        </Wrapper>
      </Section>
      <Footer />
    </>
  );
}
