import CategoryButton from "@/components/CategoryButton";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-2 pl-3 pr-3">
        <Image width={140} height={56} src="/img/JOBO.png" alt="logo" />
        <FaUserCircle className="text-4xl" />
      </div>
      <h4 className="text-start text-2xl font-bold mt-20 mb-4">Categorias</h4>
      <div className="grid gap-2 grid-cols-3">
        <CategoryButton
          key={1}
          profession={"Traductor"}
        />
        <CategoryButton
          key={1}
          profession={"Limpieza"}
        />
        <CategoryButton
          key={1}
          profession={"Plomero"}
        />
        <CategoryButton
          key={1}
          profession={"Cerrajero"}
        />
        <CategoryButton
          key={1}
          profession={"Electricista"}
        />
        <CategoryButton
          key={1}
          profession={"Pintor"}
        />
        <CategoryButton
          key={1}
          profession={"Jardinero"}
        />
        <CategoryButton
          key={1}
          profession={"Albañil"}
        />
      </div>
    </div>
  );
};

export default HomePage;