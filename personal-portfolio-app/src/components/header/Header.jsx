import './header.css';
function Header(){
    return (
        <div className = "header">
            <div className="header-container">
                <div className="header-menu">
                    <ul className="header-menu-list">
                        <li className="header-menu-item">Home</li>
                        <li className="header-menu-item">About</li>
                        <li className="header-menu-item">Projects</li>
                        <li className="header-menu-item">Contact</li>
                    </ul>
                </div>
            </div>
            <div className ="header-line" />
        </div>
    );
}

export default Header