import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Interiores1 from "../assets/interiores1.jpg";

export default function About() {
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              vel laboriosam tenetur incidunt, reiciendis autem, quae
              consequatur ipsa dolore cum sed nisi fugit quo, exercitationem
              repellat maiores veritatis magni esse Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Minus cumque earum sunt at ullam
              soluta quis asperiores vero. Laudantium repellendus eius ad optio
              quisquam sit necessitatibus enim incidunt explicabo veritatis.
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
        <section className="flex flex-col md:grid md:grid-cols-2 items-center justify-center py-16">
          <h2 className="text-center text-2xl font-medium text-darkBlue-50 mb-8 md:mb-0">
            "Lorem ipsum dolor, sit amet consectetur adipisicing"
          </h2>
          <div className="flex justify-center">
            <button className="bg-buttonColor-50 text-white w-48 h-12 text-sm rounded-full">
              Siga no Instagram
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
