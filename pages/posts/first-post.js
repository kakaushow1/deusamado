import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
    <>
    <body>
    <Head>
        <title>First Post</title>
      </Head>
      
      <header>
      <img src="/images/logo2.jpg" alt="Your Name" />
        <h1>Zumbi dos Palmares</h1>
    </header>

    <section className='tudo'>
        <section className="timeline">
            <div className="event">
                <h2>1. Nascimento e captura</h2>
                <p>Zumbi nasceu livre em Palmares, uma comunidade quilombola que se tornou um refúgio para escravizados fugitivos e outros marginaliza
                  dos. No entanto, em uma expedição militar portuguesa em 1694, Zumbi foi capturado quando ainda era criança e entregue a um padre por
                  tuguês, Antonio Melo, que o batizou com o nome de Francisco.</p>
            </div>

            <div className="event">
                <h2>2. Retorno a Palmares</h2>
                <p>Anos depois, Zumbi escapou da casa do padre e retornou a Palmares. Ele se tornou um líder militar e, 
                  eventualmente, o líder do quilombo...</p>
            </div>

            <div className="event">
                <h2>3. Luta contra a escravidão</h2>
                <p>Zumbi desempenhou um papel crucial na resistência contra a escravidão e na defesa da liberdade do povo quilombola. Palmares cresceu
                   e se tornou uma sociedade organizada, resistindo a vários ataques militares.</p>
            </div>

            <div className="event">
                <h2>4. Conflitos com as autoridades</h2>
                <p>As autoridades coloniais portuguesas estavam determinadas a destruir Palmares, pois viam a comunidade como uma ameaça à ordem escra
                  vista. Houve vários conflitos entre as forças coloniais e os quilombolas.</p>
            </div>

            <div className="event">
                <h2>5. Morte de Zumbi</h2>
                <p>Em 1695, após um cerco militar, Palmares foi invadido e Zumbi foi morto em combate. Sua morte é marcada em 20 de novembro de 1695. 
                  Apesar da morte de Zumbi e da destruição de Palmares, a resistência quilombola continuou em outras regiões do Brasil.</p>
            </div>

            <div className="event">
                <h2>6. Legado</h2>
                <p>Zumbi dos Palmares tornou-se um símbolo de resistência e luta pela liberdade. Em 20 de novembro, é celebrado o Dia da Consciência 
                  Negra no Brasil, uma data que honra a resistência do povo negro e a importância de figuras como Zumbi na história do país. O legado
                   de Zumbi destaca a luta contra a opressão e a busca pela igualdade.</p>
            </div>
        </section>
    

       <button ><Link  href="/">Volte a Pagina inicial</Link></button>
    </section>
   
    <footer>
        <p>&copy; 2023 Zumbi dos Palmares. Todos os direitos reservados.</p>
    </footer>
      
      </body>
     
    </>
    </Layout>
  );
}