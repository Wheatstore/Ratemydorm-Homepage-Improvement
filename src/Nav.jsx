import './index.css'

function Navigation() {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="/">
                    <img 
                        src="/logo.webp" 
                        alt="RateMyDorm Logo" 
                        className="logo-image"
                    />
                </a>
            </div>
            <div className="signup">
                <a href="#signup" className="signup-button">Sign Up</a>
            </div>
        </div>
    );
}

export default Navigation;