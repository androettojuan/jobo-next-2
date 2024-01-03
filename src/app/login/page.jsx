import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Image from "next/image";


const LoginPage = () => {

    return (
        <div className="flex flex-col mt-20">
            <Image className="mr-auto ml-auto mb-16" width={160} height={157} src="/img/logo.png" alt="logo" />
            <TextInput
                value={"email"}
                label={"Email"}
                disabled={false}
                placeholder="Escriba su correo..."
            ></TextInput>
            <TextInput
                type="password"
                value={"password"}
                label={"Contraseña"}
                disabled={false}
                placeholder="Escriba su contraseña..."
            ></TextInput>
            <div className="flex flex-col items-center gap-6 mt-20">
                <Button>Ingresar</Button>
                <Button>Registrarse</Button>
            </div>
        </div>
    );
};

export default LoginPage;