function App() {

  let semestres = {
    "semestres": [
      {
        "periodo": 1,
        "disciplinas": [
          {
            "nome": "Algoritmos e Lógica de programação",
            "componente": "SUP.08027",
            "carga_horaria": 80
          },
          {
            "nome": "Inglês Instrumental",
            "componente": "SUP.08029",
            "carga_horaria": 40
          },
          {
            "nome": "Introdução a Administração",
            "componente": "SUP.08023",
            "carga_horaria": 40
          },
          {
            "nome": "Introdução à Computação",
            "componente": "SUP.08026",
            "carga_horaria": 60
          },
          {
            "nome": "Linguagens de Programação",
            "componente": "SUP.08028",
            "carga_horaria": 80
          },
          {
            "nome": "Metodologia Científica",
            "componente": "SUP.08025",
            "carga_horaria": 40
          },
          {
            "nome": "Sistemas Operacionais",
            "componente": "SUP.08030",
            "carga_horaria": 80
          }
        ]
      },
      {
        "periodo": 2,
        "disciplinas": [
          {
            "nome": "Atividade Específica de Extensão I",
            "componente": "SUP.08031",
            "carga_horaria": 80
          },
          {
            "nome": "Empreendedorismo",
            "componente": "SUP.08042",
            "carga_horaria": 40
          },
          {
            "nome": "Engenharia de Software",
            "componente": "SUP.08037",
            "carga_horaria": 80
          },
          {
            "nome": "Estrutura de Dados",
            "componente": "SUP.08032",
            "carga_horaria": 80
          },
          {
            "nome": "Programação Orientada a Objetos",
            "componente": "SUP.08043",
            "carga_horaria": 80
          },
          {
            "nome": "Programação Web I",
            "componente": "SUP.08040",
            "carga_horaria": 80
          },
          {
            "nome": "Sociedade, Ciência e Tecnologia",
            "componente": "SUP.08046",
            "carga_horaria": 40
          }
        ]
      }
    ]
  }

  return (
    <div className="body-c">
      <header>
        <h1>Análise e Desenvolvimento de Sistemas</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header> 
      <main className="container">

        <div className="content">
          <section className="matriz-curricular">
            <h1>Matriz Curricular</h1>
            <ul>
              {semestres.semestres.map((semestre) => (
                <li key={semestre.periodo}>
                  <h1>Semestre {semestre.periodo}</h1>
                  <table className="tabelas">
                    <tr>
                      <th>Disciplina</th>
                      <th>Carga Horária</th>
                      <th>Componente</th>
                    </tr>
                    {semestre.disciplinas.map((disc) => (
                      <tr key={disc.componente}>
                        <td>{disc.nome}</td>
                        <td>{disc.carga_horaria}h</td>
                        <td>{disc.componente}</td>
                      </tr>
                    ))}
                  </table>
                </li>
              ))}
            </ul>
          </section>
          <aside className="sidebar">
            <h2>Perfil do Profissional de ADS</h2>
            <div className="description">
              <span>O tecnólogo em ADS analisa as necessidades do cliente, modela dados, define a arquitetura, programa o software (codificação), realiza testes e faz a manutenção dos sistemas.</span>
              <div className="image">
                <img src="/imgs/prog.jpg" alt="Um cara programando" />
              </div>
            </div>
            <div>

              <div className="skills">
                <div>
                  <h3>Soft Skills</h3>
                  <ul>
                    <li>Comunicação</li>
                    <li>Trabalho em equipe</li>
                    <li>Resolução de problemas</li>
                  </ul>
                </div>
                <div>
                  <h3>Hard Skills</h3>
                  <ul>
                    <li>Programação</li>
                    <li>Banco de dados</li>
                    <li>Desenvolvimento web</li>
                  </ul>
                </div>
              </div>
            </div>

          </aside>
        </div>
      </main>
      <footer>
        <img src="../public/imgs/logo.png" alt="logo" />
        <span>Copyright © 2025 - Todos os direitos reservados.</span>
      </footer>
    </div>
  )
}

export default App
