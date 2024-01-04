import ProfesionalCard from "@/components/ProfesionalCard";

const ProfessionPage = () => {
    return (
        <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold pl-2 mt-5">Gasista</h3>
            <ProfesionalCard
                key={"1"}
                name={"Juan Manuel Androetto"}
                profession={"Gasista"}
                lastname={"Androetto"}
                photo={"/img/plomero-foto.jpg"}
                rating={"5"}
              />
        </div>
    );
};

export default ProfessionPage;