import { Link, Router } from 'react-router-dom'

const AlternativePage = () => {
    return(
        <div>
            Estou em outra pagina!
            <Link to="/" >Volte para Home</Link>
        </div>
    )
}

export default AlternativePage