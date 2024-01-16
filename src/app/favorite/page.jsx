import NoResults from "@/components/NoResults";
import Title from "@/components/Title";

const FavoritePage = () => {
    return (
        <div>
            <Title size="lg">Favoritos</Title>
            <NoResults msg="No tienes ningun profesional agregado a favoritos." />
        </div>
    );
};

export default FavoritePage;