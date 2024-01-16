import NoResults from "@/components/NoResults";
import Title from "@/components/Title";

const CommentsPage = () => {
    return (
        <div>
            <Title size="2xl">Comentarios</Title>
            <NoResults msg="Todavía no hay comentarios" />
        </div>
    );
};

export default CommentsPage;