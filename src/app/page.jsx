import CategoryButton from "@/components/CategoryButton";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-2 pl-3 pr-3">
        <Image width={140} height={56} src="/img/JOBO.png" alt="logo" />
        <Link href="/account">
          <FaUserCircle className="text-4xl" />
        </Link>
      </div>
      <h4 className="text-start text-2xl font-bold mt-20 mb-4">Categorias</h4>
      <div className="grid gap-2 grid-cols-3">
        <CategoryButton
          key={1}
          profession={"Traductor"}
          href={"/profession"}
        />
        <CategoryButton
          key={1}
          profession={"Limpieza"}
          href={"/profession"}
        />
        <CategoryButton
          key={1}
          profession={"Plomero"}
          href={"/profession"}
        />
        <CategoryButton
          key={1}
          profession={"Cerrajero"}
          href={"/profession"}
        />
        <CategoryButton
          key={1}
          profession={"Electricista"}
          href={"/profession"}
        />
        <CategoryButton
          key={1}
          profession={"Pintor"}
          href={"/profession"}
        />
        <CategoryButton
          key={1}
          profession={"Jardinero"}
          href={"/profession"}
        />
        <CategoryButton
          key={1}
          profession={"Albañil"}
          href={"/profession"}
        />
      </div>
    </div>
  );
};

export default HomePage;