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
    <div className="container">
      <header></header>
      <main>
        <aside></aside>
        <section>
          <div></div>
          <ul>
            {semestres.semestres.map((semestre) => (
              <li key={semestre.periodo}>
                <h1>Semestre {semestre.periodo}</h1>

                <ul>
                  {semestre.disciplinas.map((disc) => (
                    <li key={disc.componente}>
                      <h2>{disc.nome}</h2>
                      <div>
                        <span>{disc.componente}</span>
                        <span>{disc.carga_horaria}h</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

      </main>

      <footer>

      </footer>

    </div>
  )
}

export default App
