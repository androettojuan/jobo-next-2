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
      <h4 className="text-start text-2xl font-bold mt-20">Categorias</h4>
      <div className="grid gap-2 grid-cols-3">
        <CategoryButton
          key={1}
          profession={"Traductor"}
          color="#004346"
        />
        <CategoryButton
          key={1}
          profession={"Limpieza"}
          color="#508991"
        />
        <CategoryButton
          key={1}
          profession={"Plomero"}
          color="#004346"
        />
        <CategoryButton
          key={1}
          profession={"Cerrajero"}
          color="#508991"
        />
        <CategoryButton
          key={1}
          profession={"Electricista"}
          color="#004346"
        />
        <CategoryButton
          key={1}
          profession={"Pintor"}
          color="#508991"
        />
        <CategoryButton
          key={1}
          profession={"Jardinero"}
          color="#004346"
        />
        <CategoryButton
          key={1}
          profession={"Albañil"}
          color="#508991"
        />
      </div>
    </div>
  );
};

export default HomePage;