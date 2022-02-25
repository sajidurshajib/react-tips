import { Link } from 'react-router-dom'
import classes from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={classes.Sidebar}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/multiple-input">Multiple Input</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
