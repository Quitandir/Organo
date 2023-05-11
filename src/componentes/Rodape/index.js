import './Rodape.css'

const Rodape = () => {
    return (
        <section className='rodape'>
            <div className='logos'>
                <a href='http://facebook.com'><img src='/img/fb.png' alt='Facebook logo'/></a>
                <a href='http://twitter.com'><img src='/img/tw.png' alt='Twitter logo'/></a>
                <a href='http://instagram.com/'><img src='/img/ig.png' alt='Instagram logo'/></a>
            </div>
            
            <img className='logo' src='/img/logo.png' alt='Logo organo' />
                      
            <p className='texto'>Desenvolvido por Alura.</p>
            
        </section>
    )
}

export default Rodape