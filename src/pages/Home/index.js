import { Link } from "react-router-dom";
import './style.css'

const Home = ({ members }) => {
    return (
        <div className="container">
            <h1>Users</h1>
            <nav>
                <ul className="listClass">
                    {members.map((member) => {
                        return member.type === "pj" ? <li key={member.id}><Link className="listClassLink" to={`/company/${member.id}`}>{member.name}</Link></li> : <li><Link className="listClassLink" to={`/customer/${member.id}`}>{member.name}</Link></li>
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default Home;