//! This layout includes all the other components bundled into 1 layout, 
//! so that we could use this layout more often.

export default function Layout(props) {

    const { children } = props

    return (
        <div>

            header
            {children}
            footer
            
        </div>
    )
}