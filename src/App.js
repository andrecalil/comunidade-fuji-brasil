import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToolbox, faStore, faBox, faLink, faWarning, faCog} from '@fortawesome/free-solid-svg-icons';
import './styles.css';  
import { Store } from './components/Store.tsx';
import { RepairShop } from './components/RepairShop.tsx';
import { Link } from './components/Link.tsx';
import { useState } from 'react';
import { ManufacturingDate } from './components/ManufacturingDate.tsx';
import useData from './data/useData.ts';

function App() {
    const [linksEnabled, setLinksEnabled] = useState(false);
    const { data, isFetching } = useData();

    const enableLinks = () => {
        window.grecaptcha.ready(function() {
            window.grecaptcha.execute(process.env.REACT_APP_SITE_KEY, {action: 'submit'}).then(function(token) {
                setLinksEnabled(true);
            });
          });
    };

  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top">Comunidade Fuji Brasil</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#repair">Assistências</a></li>
                        <li className="nav-item"><a className="nav-link" href="#stores">Lojas</a></li>
                        <li className="nav-item"><a className="nav-link" href="#manufacturing">Data de Fabricação</a></li>
                        <li className="nav-item"><a className="nav-link" href="#links">Links</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header className="masthead">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Comunidade Fuji Brasil</h1>
                    </div>
                </div>
            </div>
        </header>
        <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="text-white mb-4">De fotógrafo para fotógrafo</h2>
                        <p className="text-white-50 mb-3">A Comunidade Fuji Brasil é um grupo de fotógrafos, profissionais e entusiastas, que utilizam câmeras e demais equipamentos fotográficos Fujifilm.</p>
                        <p className="text-white-50 mb-3">Na nossa comunidade, nós nos apoiamos e fortalecemos a presença da marca no Brasil.</p>
                        <p className="text-white-50 mb-5">Nosso advogado mandou dizer: não temos qualquer filiação com a Fujifilm ou uma de suas subsidiárias. Não representamos a marca ou seus produtos.</p>
                        <a className={`btn btn-primary mb-5 ${linksEnabled ? "": "disabled"}`} href={linksEnabled ? "https://chat.whatsapp.com/FL1U8gZjHJS7ZnkFoKHypj" : ""}>Faça parte!</a>
                    </div>
                </div>
            </div>
        </section>
        {!linksEnabled && 
        <section className='text-center p-5' id="captcha">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <FontAwesomeIcon icon={faWarning} className="fa-2x mb-2" />
                        <h4 className="mb-4">Você é humano?</h4>
                        <p className="text-white-50 mb-3"><button className='btn btn-outline-danger' onClick={enableLinks}>Habilite os links de WhatsApp!</button></p>
                    </div>
                </div>
            </div>
        </section>
        }
        <section className="pt-5 pb-5 bg-light" id="repair">
        <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <FontAwesomeIcon icon={faToolbox} className="fa-2x mb-2" />
                        <h2 className="mb-5">Assistências Técnicas</h2>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5">
                    {isFetching && <p>Carregando <FontAwesomeIcon icon={faCog} className="fa-spin" /></p> }
                    {!isFetching && data.repairShops.map((s, ix) => <RepairShop shop={s} key={ix} linksEnabled={linksEnabled} />)}
                </div>  
            </div>
        </section>
        <section className="signup-section" id="stores">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <FontAwesomeIcon icon={faStore} className="fa-2x mb-2 text-white" />
                        <h2 className="text-white mb-5">Lojas e Locadoras</h2>      
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5">
                    {isFetching && <p>Carregando <FontAwesomeIcon icon={faCog} className="fa-spin" /></p> }
                    {!isFetching && data.stores.map((s, ix) => <Store store={s} key={ix} linksEnabled={linksEnabled} />)}
                </div>  
            </div>
        </section>
        <section className="pt-5 pb-5 bg-light projects-section">
            <div className="row gx-0" id="manufacturing">
                <div className="col-md-10 col-lg-8 mx-auto text-center">
                    <FontAwesomeIcon icon={faBox} className="fa-2x mb-2" />
                    <h2 className="mb-5">Data de Fabricação</h2>  
                </div>
            </div>
            <ManufacturingDate enabled={linksEnabled}></ManufacturingDate>
            <div className="row gx-0" id="links">
                <div className="col-md-10 col-lg-8 mx-auto text-center">
                    <FontAwesomeIcon icon={faLink} className="fa-2x mb-2" />
                    <h2 className="mb-5">Links</h2>  
                </div>
            </div>
            <div className="container px-4 px-lg-5">
                {isFetching && <p>Carregando <FontAwesomeIcon icon={faCog} className="fa-spin" /></p> }
                {!isFetching && data?.links.map((s, ix) => <Link link={s} key={ix} index={ix} />)}
            </div>
        </section>
        <footer className="footer bg-black small text-center text-white-50"><div className="container px-4 px-lg-5">
        <p className='p-3 mx-auto text-center'><small>A Comunidade Fuji Brasil não se responsabiliza por quaisquer negócios realizados com as lojas e assistências técnicas acima.</small></p></div></footer>
    </div>
  );
}

export default App;
