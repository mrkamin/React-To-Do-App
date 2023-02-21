const Header = () => {
    return (
        <header style={{
            padding: '20px 0',
            lineHeight: '1.5em',
            color: '#aeadad',
            textAlign: 'center',
        }}>
            <h1>todos</h1>
            <p>Items will peersist in the browser local storage </p>
        </header>
    );
};
export default Header;