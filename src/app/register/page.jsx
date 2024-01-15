"use client"
import Breadcrumb from "@/components/Breadcrumb";
import InputSwitch from "@/components/InputSwitch";
import Select from "@/components/Select";
import TextInput from "@/components/TextInput";
import { useState } from "react";

const jobs = [
  {
    id: 1,
    icon: "/icons/plomero.png",
    title: "Plomero",
  },
  {
    id: 2,
    icon: "/icons/fuego.png",
    title: "Gasista",
  },
  {
    id: 3,
    icon: "/icons/cerrajero.png",
    title: "Cerrajero",
  },
  {
    id: 4,
    icon: "/icons/electricista.png",
    title: "Electricista",
  },
  {
    id: 5,
    icon: "/icons/pintor.png",
    title: "Pintor",
  },
  {
    id: 6,
    icon: "/icons/jardinero.png",
    title: "Jardinero",
  },
  {
    id: 7,
    icon: "/icons/enladrillado.png",
    title: "Albañil",
  },
  {
    id: 8,
    icon: "/icons/carpintero.png",
    title: "Carpintero",
  },
  {
    id: 9,
    icon: "/icons/mecanico.png",
    title: "Mecánico",
  },
  {
    id: 10,
    icon: "/icons/limpieza.png",
    title: "Limpieza",
  },
  {
    id: 11,
    icon: "/icons/cuidado-de-ninos.png",
    title: "Cuidado de niños",
  },
  {
    id: 12,
    icon: "/icons/adulto.png",
    title: "Cuidado de adultos",
  },
  {
    id: 13,
    icon: "/icons/ordenador-personal.png",
    title: "Reparación de PC",
  },
  {
    id: 14,
    icon: "/icons/diseno-grafico.png",
    title: "Diseñador gráfico",
  },
  {
    id: 15,
    icon: "/icons/traducir.png",
    title: "Traductor",
  },
  {
    id: 16,
    icon: "/icons/extractor-de-aire.png",
    title: "Refrigeración",
  },
];

const RegisterPage = () => {
  const [active, setActive] = useState(false);
  return (
        <div className="pt-4">
          <Breadcrumb
            pages={[
              { label: "Iniciar sesión", url: "/", name: "login" },
              { label: "Registro", url: "/register", name: "register" },
            ]}
          />
          <div className="mt-10">
            <TextInput
              label="Nombre"
              placeholder="Ingrese su nombre"
            />
            <TextInput
              label="Apellido"
              placeholder="Ingrese su apellido"
            />
            <TextInput
              label="Correo electrónico"
              placeholder="Ingrese su correo electrónico"
            />
            <TextInput
              label="Contraseña"
              placeholder="Ingrese su contraseña"
            />
            <InputSwitch label="¿Eres profesional?" active={active} onClick={() => setActive(!active)}></InputSwitch>
            {
              active ? <>
                <Select
                  name={"profession"}
                  value={jobs[0].name}
                  onChange={() => { }}
                  options={jobs}
                />
                <TextInput
                  label="Descripción"
                  placeholder="Escribe una descripción de ti mismo"
                />
                <TextInput
                  label="Teléfono"
                  placeholder="Escribe tu numero sin 0 y 15"
                />
              </> : null

            }
          </div>
        </div>
  );
};

export default RegisterPage;