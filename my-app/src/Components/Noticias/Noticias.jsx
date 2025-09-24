import './Noticias.css'

function Noticias() {

  const newsList = [
    {
      id: 1,
      title: "Descoberta de Novo Planeta",
      summary: "Astrônomos encontram um planeta com condições que podem abrigar vida em um sistema solar distante."
    },
    {
      id: 2,
      title: "Tecnologia Blockchain Revoluciona Finanças",
      summary: "Nova tecnologia descentralizada promete mais segurança e transparência em transações financeiras globais."
    },
    {
      id: 3,
      title: "Inteligência Artificial na Medicina",
      summary: "Pesquisadores desenvolvem um algoritmo de IA que pode diagnosticar doenças com maior precisão."
    }
  ];

  return (
    <>
      <div>
      <h2>Últimas Notícias</h2>
      {newsList.map(news => (
        <div key={news.id} style={{
          borderBottom: '1px solid #ccc',
          padding: '15px 0',
          marginBottom: '10px'
        }}>
          <h3>{news.title}</h3>
          <p>{news.summary}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default Noticias
