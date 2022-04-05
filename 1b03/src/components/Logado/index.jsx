export default function Logado({login, setLogin, user}){
    const loginDeslogin = () => login ? setLogin(false) : setLogin(true)
    const vericaLogin = () => login ? `Bem-vindo, ${user} !` : 'Você não pode acessar esta página'
    const buttonLogin = () => login ? 'Sair' : 'Entrar'
    return <div>
        <h1>{vericaLogin()}</h1>
        <button onClick={loginDeslogin}>{buttonLogin()}</button>
    </div>
}