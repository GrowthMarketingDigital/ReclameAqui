import "./Button.css"

const Button2 = () => {

    const handleClick = () => {
        window.open('https://go.aff.7k-partners.com/vfihopkm?utm_campaign=reclameaqui', '_blank');
    };

    return (
        <div className="wpp">
            <button id='btn-react-RA' onClick={handleClick}><img src="/SIMBOLO 1 CP.png" alt="CassinoPix" />Faça seu cadastro</button>
        </div>
    )
}

export default Button2