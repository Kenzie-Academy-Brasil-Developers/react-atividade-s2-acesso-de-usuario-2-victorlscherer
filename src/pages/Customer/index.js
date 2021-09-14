import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { members } from "../../components/Members";
import './style.css'

const Customer = () => {
    const params = useParams();
    const member = members.find((member) => {
        return member.id === params.id;
    })
    return (
        <div className="containerData">
            <h1>Detalhes do cliente</h1>

            <p>
                Nome: {member && member.name}
            </p>
            <Link className="listClassData" to={"/"}>
                Voltar
            </Link>
        </div>
    )
}

export default Customer;