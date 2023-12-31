import Link from "next/link";
import Logo from "../assets/loguinho.png";

export function Footer() {
  return (
    <footer className="bg-darkBlue-50 h-72 md:h-36 flex flex-col md:flex-row items-center justify-center md:justify-between">
      <Link href={"/"}>
        <img
          src={Logo.src}
          alt="Wheller interiores"
          className="h-36 w-auto md:block hidden"
        />
      </Link>

      <div className="flex flex-col text-white justify-center items-center md:items-start md:mr-8 my-4 md:my-0">
        <h1 className="text-xl font-medium mb-1">Contato</h1>
        <p className="font-light">(55) 51 9514-0398</p>
        <p className="font-light">contatowhellerinteriores@gmail.com</p>
        <p className="font-light">@whellerinteriores</p>
      </div>
      <img
        src={Logo.src}
        alt="Wheller interiores"
        className="h-36 w-auto md:hidden"
      />
    </footer>
  );
}
