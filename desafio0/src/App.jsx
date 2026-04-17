function App() {

  return (
    <div className="container">
      <header className="cabecalho">
        <h1>Admin Dashboard</h1>
        <div className="userInfo">
          <img src="/profile.jpg" alt="Profile" />
          <a href="">Logout</a>
        </div>
      </header>
      <main className="conteudo">
        <aside className="sidebar">
          <nav className="nav">
            <ul className="navList">
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Reports</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </nav>
        </aside>
        <section className="mainContent">
          <div className="card">
            <header className="cabecalhoCard">
              <img src="sales.png" alt="" />
              <h2>Sales</h2>
            </header>
            <div className="conteudoCard">
              <p>Monthly sales data.</p>
            </div>
          </div>
          <div className="card">
            <header className="cabecalhoCard">
              <img src="tasks.png" alt="" />
              <h2>Tasks</h2>
            </header>
            <div className="conteudoCard">
              <p>Pending tasks overview.</p>
            </div>
          </div>
          <div className="card">
            <header className="cabecalhoCard">
              <img src="users.png" alt="" />
              <h2>Users</h2>
            </header>
            <div className="conteudoCard">
              <p>Total registered users.</p>
            </div>
          </div>
          <div className="card">
            <header className="cabecalhoCard">
              <img src="analytics.png" alt="" />
              <h2>Analytics</h2>
            </header>
            <div className="conteudoCard">
              <p>Site analytics stats.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
