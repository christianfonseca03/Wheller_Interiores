"use client";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Interiores1 from "../assets/interiores1.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

interface IFeedItem {
  id: string;
  media_url: string;
  permalink: string;
  media_type: "IMAGE" | "VIDEO";
  caption: string;
}

export default function About() {
  const [feedList, setFeedList] = useState<IFeedItem[]>([]);

  async function getInstaFeed() {
    const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
    const fields = "media_url, media_type, permalink, caption";
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;
    const { data } = await axios.get(url);
    const returnedValues = data.data;
    const imagesList: IFeedItem[] = [];
    returnedValues.map((item: IFeedItem) => {
      if (item.media_type !== "VIDEO") {
        imagesList.push(item);
      }
    });

    setFeedList(imagesList);
  }

  useEffect(() => {
    getInstaFeed();
  }, []);

  return (
    <>
      <Header />
      <main className="bg-pageColor-50">
        <section className="flex flex-col items-center md:items-start md:grid md:grid-cols-2 pb-12 pt-12">
          <div className="mb-6 md:mb-0 flex flex-col">
            <h1 className="text-darkBlue-50 font-medium text-2xl mb-6 text-center">
              Sobre Nós
            </h1>
            <p className="px-12">
              Somos um escritório de Design de Interiores focados em projetos
              residenciais e comerciais, fundado em 2020 por Luana Wheller,
              desde então consolidando-se no mercado em Gravataí-RS, cidade base
              do escritório, e região metropolitana de Porto Alegre. Nos
              acompanhe em nossas redes sociais para conhecer um pouco mais
              sobre a gente!
            </p>
          </div>
          <div className="w-full flex justify-center">
            <img
              src={Interiores1.src}
              alt="Sobre"
              className="h-80 w-96 px-6 md:px-0"
            />
          </div>
        </section>
        <h2 className="text-center text-2xl font-medium text-darkBlue-50 mb-16 mt-8 ">
          Acompanhe nossos últimos posts do Instagram!
        </h2>
        <section className="flex flex-col md:flex-row justify-center gap-16 mb-8 items-center">
          {feedList.map((item, index) => {
            if (index < 3) {
              return (
                <a
                  href={item.permalink}
                  key={item.id}
                  target="_blank"
                  className="flex flex-col justify-center items-center"
                >
                  <img
                    src={item.media_url}
                    alt="instagram post"
                    className="h-96 w-80 md:w-96"
                  />
                  <p className="text-center w-80 max-h-5 font-medium mt-2">
                    {item.caption.split("\n", 1)[0]}
                  </p>
                </a>
              );
            }
          })}
        </section>
        <div className="flex justify-center py-12">
          <Link
            href={
              "https://www.instagram.com/whellerinteriores/?igshid=MzRlODBiNWFlZA%3D%3D"
            }
            target="_blank"
          >
            <button className="bg-buttonColor-50 hover:bg-darkBlue-50/90 transition-colors text-white w-48 h-12 text-sm rounded-full mb-4">
              Siga no Instagram
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
