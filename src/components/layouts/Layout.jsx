//! This layout includes all the other components bundled into 1 layout, 
//! so that we could use this layout more often.

export default function Layout(props) {

    const { children } = props      //This line uses destructuring assignment to extract the children prop from the props object.  

    return (
        <>
            <header>
                <h1 className="text-gradient">Copacetic</h1>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <small>Created by</small>
                <a target="_blank" href="https://github.com/AsinOmal">
                    <img src="https://avatars.githubusercontent.com/u/127041794?v=4" alt="pfp" />
                    <p>@AsinOmal</p>
                    <i className="fa-brands fa-github"></i>
                </a>
                
            </footer>
        </>

    )
}