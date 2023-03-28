export default function Nav(props) {
    return (
        <nav className={props.darkMode ? 'dark' : ''}>
            <img className='nav--logo'/>
            <h3 className='nav--logo-txt'>ReactFacts</h3>
            <div className='mode'>
                <h5 className='light-mode-txt'>Light</h5>
                <div className='toggle-bar' onClick={props.toggleDarkMode}>
                    <div className='elipse'></div>
                </div>
                <h5 className='dark-mode-txt'>Dark</h5>
            </div>
        </nav>
    )
}