import { useParams } from "react-router";
import { members } from "../../components/Members";
import { Link } from "react-router-dom";
import './style.css'

const Company = () => {
    const params = useParams();
    const member = members.find((member) => {
        return member.id === params.id;
    })
    return (
        <div className="containerData">
            <h1>Detalhes da Empresa</h1>

            <p>
                Nome da empresa: {member && member.name}
            </p>

            <Link className="listClassData" to="/">
                Voltar
            </Link>
        </div>
    )
}

export default Company;