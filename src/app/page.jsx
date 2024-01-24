"use client";
import CategoryButton from "@/components/CategoryButton";
import { UserDataProvider } from "@/utils/userData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const HomePage = () => {
  const [user, setUser] = useState({});
  const userId = localStorage.getItem("userId");

  async function getUser(userId) {
    const response = await fetch("http://localhost:8080/user/" + userId);
    const data = await response.json();
    setUser(data[0]);
  }

  useEffect(() => {
    if (userId) {
      getUser(userId);
    }
  }, [userId]);

  return (
    <UserDataProvider value={user}>
      <div>
        <div className="flex justify-between items-center mt-2 pl-3 pr-3">
          <Image width={140} height={56} src="/img/JOBO.png" alt="logo" />
          <Link href="/account">
            <FaUserCircle className="text-4xl" />
          </Link>
        </div>
        <h4 className="text-start text-2xl font-bold mt-20 mb-4">Categorias</h4>
        <div className="overflowy-auto h-full">
          <div className="grid gap-2 grid-cols-3">
            <CategoryButton
              key={1}
              profession={"Traductor"}
              href={"/profession"}
            />
            <CategoryButton
              key={2}
              profession={"Limpieza"}
              href={"/profession"}
            />
            <CategoryButton
              key={3}
              profession={"Plomero"}
              href={"/profession"}
            />
            <CategoryButton
              key={4}
              profession={"Cerrajero"}
              href={"/profession"}
            />
            <CategoryButton
              key={5}
              profession={"Electricista"}
              href={"/profession"}
            />
            <CategoryButton
              key={6}
              profession={"Pintor"}
              href={"/profession"}
            />
            <CategoryButton
              key={7}
              profession={"Jardinero"}
              href={"/profession"}
            />
            <CategoryButton
              key={8}
              profession={"Albañil"}
              href={"/profession"}
            />
          </div>
        </div>
      </div>
    </UserDataProvider>
  );
};

export default HomePage;