function App() {

  return (
    <div className="container">
      <form className="cad">
        <h1>Cadastro</h1>
        <div className="linhas">
          <label htmlFor="fnome">Digite seu nome:</label>
          <input type="text" id="fnome" name="fname" placeholder="Alguem Alguem Alguem"/>
        </div>
        <div className="linhas">
          <label htmlFor="email">Digite seu email:</label>
          <input type="text" id="email" name="email" placeholder="exemplo@ex.com" />
        </div>
        <div className="linhas">
          <label htmlFor="telefone">Digite seu telefone:</label>
          <input type="text" id="telefone" name="telefeone" placeholder="99 99999-9999"/>
        </div>
        <div className="linhas">
          <label htmlFor="estado">Escolha o seu estado:</label>
          <select name="estado" id="estado">
            <option value="Outro">Nenhum das opções</option>
            <option value="Maranhão">Maranhão</option>
            <option value="Piauí">Piauí</option>
            <option value="Ceará">Ceará</option>
          </select>
        </div>
        <div className="linhas">
          <label htmlFor="login">Digite seu login:</label>
          <input type="text" id="login" name="login" placeholder="10342a" />
        </div>
        <div className="linhas">
          <label htmlFor="senha">Digite sua senha:</label>
          <input type="text" id="senha" name="senha" placeholder="ola123"/>
        </div>
        <div className="linhas">
          <label htmlFor="message">Digite sua mensagem: </label>
          <textarea name="message" id="message" placeholder="menssagem..."></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
