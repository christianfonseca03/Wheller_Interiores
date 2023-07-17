import { Header } from "./components/Header";
import { Carrossel } from "./components/Carrossel";
import { Procedimento } from "./components/Procedimento";
import { Depoimentos } from "./components/Depoimentos";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="bg-pageColor-50">
       <Carrossel/>
       <Procedimento/>
       <Depoimentos/>
      </main>
      <Footer/>
    </>
  )
}
