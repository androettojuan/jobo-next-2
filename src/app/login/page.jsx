"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const router = useRouter();

    async function getLoggedUserid(token) {
        const response = await fetch("http://localhost:8080/check-login", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        });
        const data = await response.json();
        return data;
    }

    async function login(emailL, passwordL) {
        await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: emailL,
                password: passwordL,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("userId", data.userId);
                    getLoggedUserid(data.token).then((data) => {
                        if (data) {
                            localStorage.setItem("userId", data.userId);
                        }
                    });
                    router.push('/')
                } else {
                    setShowAlert(true);
                }
            });
    }

    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    }, [showAlert]);

    return (
        <div className="flex flex-col mt-20">
            <Image className="mr-auto ml-auto mb-16" width={160} height={157} src="/img/logo.png" alt="logo" />
            <TextInput
                value={email}
                label={"Email"}
                disabled={false}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Escriba su correo..."
            ></TextInput>
            <TextInput
                type="password"
                value={password}
                label={"Contraseña"}
                disabled={false}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Escriba su contraseña..."
            ></TextInput>
            <div className="flex flex-col items-center gap-6 mt-20">
                <Button onClick={() => {
                    login(email, password);
                }}>Ingresar</Button>
                <Link href={"/register"}>Registrarse</Link>
            </div>
        </div>
    );
};

export default LoginPage;