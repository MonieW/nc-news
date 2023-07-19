import{ Link } from 'react-router-dom'

const Header = () => {
    return (
        <Link to={`/articles`}>
    <h1 className="header">NC News</h1>

    </Link>
    );
};

export default Header;