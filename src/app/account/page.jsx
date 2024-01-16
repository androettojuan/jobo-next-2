"use client";
import Header from "@/components/Header";
import { useState } from "react";
import { FiCheck, FiEdit3 } from "react-icons/fi";

const AccountPage = () => {
    const [editar, setEditar] = useState(false);

    const iconSelect = () => {
        if (editar === false) {
            return FiEdit3;
        } else {
            return FiCheck;
        }
    };

    const action = async () => {
        if (editar === false) {
            setEditar(true);
        } else {
            await updateUser(name, lastname, phone, description, jobId, user.id);
            setEditar(false);
        }
    };

    const textSelect = () => {
        if (editar === false) {
            return "Editar";
        } else {
            return "Guardar";
        }
    };

    return (
        <div>
            <Header
                title="Mi cuenta"
                actions={[
                    {
                        icon: iconSelect(),
                        onClick: action,
                        name: "edit",
                        visible: true,
                        text: textSelect(),
                    },
                ]}
            ></Header>
            <h1>Account Page</h1>
        </div>
    );
};

export default AccountPage;