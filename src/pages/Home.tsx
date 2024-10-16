import React, { useState } from 'react'; // Removido 'useEffect'
import stopWordsData from '../api/ignore.json'; // Importando o JSON diretamente
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const [text, setText] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const stopWords = stopWordsData.stopWords; // Pegando as stop words diretamente

  // Função para processar o texto e encontrar palavras-chave
  const extractKeywords = (text: string) => {
    const words = text
      .toLowerCase()
      .replace(/[.,?!;()"'-]/g, "")
      .split(/\s+/);

    const wordFrequency: { [key: string]: number } = {};
    words.forEach(word => {
      if (!stopWords.includes(word) && word.length > 1) {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
      }
    });

    const sortedWords = Object.entries(wordFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    return sortedWords.map(word => word[0]);
  };

  const handleKeywordExtraction = () => {
    const extractedKeywords = extractKeywords(text);
    setKeywords(extractedKeywords);
  };

  const copyToClipboard = (keyword: string) => {
    navigator.clipboard.writeText(keyword)
      .then(() => {
        setAlertMessage(`Você copiou a palavra: "${keyword}"`);
        setAlertVisible(true);
        setTimeout(() => {
          setAlertVisible(false); // Inicia a animação de saída
        }, 3000); // Mostra por 3 segundos
      })
      .catch(err => console.error('Erro ao copiar: ', err));
  };

  return (
    <div className='home-container'>
      <section id='home'>
        <Navbar /> <br></br><br></br><br></br><br></br><br></br>
        <h1>KeyPeg</h1>
        <h2>
          Quer mais tráfego? O KeyPeg te ensina a vencer o jogo do <strong>SEO.</strong> <br></br>
          Digite seu texto e veja a mágica acontecer!
        </h2>
        <br /><br />
        <input
          type='text'
          className='texto'
          id='text'
          placeholder='Digite seu texto aqui'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button className='btn' onClick={handleKeywordExtraction}>
          Encontrar palavras-chave <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <br /><br />

        {keywords.length > 0 && (
          <div className="keywords-container">
            <h3>Palavras-Chave Encontradas:</h3>
            <center>
              <ul className="uuu">
                {keywords.map((keyword, index) => (
                  <li key={index} onClick={() => copyToClipboard(keyword)}>
                    <code>{keyword}</code>
                  </li>
                ))}
              </ul>
            </center>
          </div>
        )}

        {/* Alerta com animações */}
        {alertVisible && (
          <div className={`alert ${alertVisible ? 'show' : 'hide'}`}>
            <i className="fa-solid fa-bell fa-shake"></i> {alertMessage}
          </div>
        )}
      </section>

      <br></br><br></br><br></br>
      <section id='features'>
        <h1>O que oferecemos</h1>
        <div className='cards'>

          <div className='cards-container'>
            <div className='card'>
              <i className="fa-solid fa-magnifying-glass"></i> {/* Ícone */}
              <h3>Extração de Palavras-Chave</h3> {/* Título */}
              <p>Identifique rapidamente as palavras-chave mais relevantes do seu texto.</p> {/* Subtítulo */}
            </div>
            <div className='card'>
              <i className="fa-solid fa-chart-line"></i> {/* Ícone */}
              <h3>Análise de SEO</h3> {/* Título */}
              <p>Avalie o desempenho do seu conteúdo e melhore sua estratégia de SEO.</p> {/* Subtítulo */}
            </div>
            <div className='card'>
              <i className="fa-solid fa-share-nodes"></i> {/* Ícone */}
              <h3>Compartilhamento Rápido</h3> {/* Título */}
              <p>Copie palavras-chave para a área de transferência com um clique.</p> {/* Subtítulo */}
            </div>
            {/* Adicione mais cards conforme necessário */}
          </div>
        </div>
      </section>
      <br></br><br></br>

      <section id='stats'>
        <h1>Números</h1>
        <div className='stats'>
          <div className='stat'>
            <i className="fa-solid fa-users"></i>
            <h2>100%</h2>
            <p>Chance de vencer o SEO</p>
          </div>
          <div className='stat'>
            <i className="fa-solid fa-chart-line"></i>
            <h2>250%</h2>
            <p>Aumento médio de tráfego</p>
          </div>
          <div className='stat'>
            <i className="fa-solid fa-check-circle"></i>
            <h2>98%</h2>
            <p>Taxa de satisfação do usuário</p>
          </div>
          <div className='stat'>
            <i className="fa-solid fa-thumbs-up"></i>
            <h2>431+</h2>
            <p>Feedbacks positivos</p>
          </div>
        </div><br></br><br></br>
      </section>

      <h1>Abertos a Sugestões</h1>

      <section id='suggestions'>
        <div className='sugestões'>
          <div className='sugt'>
            <p>Estamos sempre em busca de maneiras de melhorar! Se você tiver alguma ideia, crítica ou até mesmo uma piada, não hesite em nos enviar!</p>
            <p><strong>Envie-nos sua melhor sugestão, ou apenas um meme! Estamos aqui para ouvir!</strong></p></div>
          <div className='buttons'>
            <br></br>
            <a href="https://x.com/davvzin" className='btn d'>
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://github.com/DaviJoseMach/KeyPeg" className='btn d'>
              <i className="fa-brands fa-github"></i>
            </a>
            <br></br><br></br>
          </div>
        </div>
      </section>

      <section id='apoie'>
        <div className="donate-section">
          <h2 className='apoietxt'>Ajude-nos a continuar!</h2>
          <div className='ajudat'>
            <p>
              Gostou do nosso site? Estamos buscando <strong className='doze'>12 reais</strong> para renovar nosso domínio!
              Qualquer contribuição, por menor que seja, faz uma grande diferença!
            </p>
            <p>
              Escaneie o QR code abaixo e ajude-nos a manter este projeto no ar!
            </p>
          </div>
          <img src="/qrcodefordoaciont.jpg" alt="QR Code para doações" className="qr-code" />
          <p>Obrigado pelo seu apoio!</p>
        </div>
      </section>

      < Footer />
    </div>
  );
};

export default Home;
