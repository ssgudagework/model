import "./NavbarStyle.css"
function Navbar() {
    return (
        <>
        <nav>
            <div>
                <ul id="navbar">
                    <li><a href="/Allproject">All Project</a></li>
                    
                    <li><a href="/Create">Create New Project</a></li>
                    <li><a href="/Users">users</a></li>
                    
                </ul>
            </div>
        </nav>
        </>
    );



} export {Navbar, SecNav};

function SecNav(){
    return (
        <>
        <nav>
            <div>
                <ul id="navbar">
                    <li><a href="/Allproject">All Project</a></li>
                    
                    <li><a href="/Create">Create New Project</a></li>

                    <li><a href="/Users">users</a></li>
                    
                </ul>
            </div>
        </nav>
        </>
    );
}