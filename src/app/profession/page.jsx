import ProfesionalCard from "@/components/ProfesionalCard";

const ProfessionPage = () => {
    return (
        <div className="flex flex-col items-start">
            <h3 className="text-3xl font-bold pl-2 mt-5">Gasista</h3>
            <div className="flex flex-col w-full gap-5 mt-8">
                <ProfesionalCard
                    key={"1"}
                    name={"Juan Manuel Androetto"}
                    profession={"Gasista"}
                    lastname={"Androetto"}
                    photo={"/img/plomero-foto.jpg"}
                    rating={"5"}
                /> <ProfesionalCard
                    key={"1"}
                    name={"Juan Manuel Androetto"}
                    profession={"Gasista"}
                    lastname={"Androetto"}
                    photo={"/img/plomero-foto.jpg"}
                    rating={"5"}
                />
            </div>

        </div>
    );
};

export default ProfessionPage;