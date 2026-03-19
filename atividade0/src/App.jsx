import { useState } from 'react'


function App() {

  return (
    
    <div className='container'>
      <h1>O que eu mais gosto no maranhão</h1>
      <main className='content-initial'>
        <section className='content-cards'>
          <article className='card'>
            <h1>Lençóis Maranhenses</h1>
            <div>
              <img src="/imgs/lencois-maranhenses.png" alt="lençois-maranhenses" className='image' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dignissimos est praesentium eaque, eveniet pariatur accusamus labore animi, laborum a ipsam odio, incidunt deserunt eos quidem. Aliquid, veritatis id corporis odit laudantium error pariatur architecto voluptatibus maiores animi ea nesciunt maxime quia quam dolore fugiat minus, doloremque harum quae cupiditate.</p>
            </div>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, earum?</span>
          </article>
          <article className='card'>
            <h1>Pedra Caída</h1>
            <div>
              <img src="/imgs/pedra-caida.png" alt="lençois-maranhenses" className='image' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dignissimos est praesentium eaque, eveniet pariatur accusamus labore animi, laborum a ipsam odio, incidunt deserunt eos quidem. Aliquid, veritatis id corporis odit laudantium error pariatur architecto voluptatibus maiores animi ea nesciunt maxime quia quam dolore fugiat minus, doloremque harum quae cupiditate.</p>
            </div>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, earum?</span>
          </article>
          <article className='card'>
            <h1>Cachoeira Do Morcego</h1>
            <div>
              <img src="/imgs/cachoeira-do-morcego.jpg" alt="Cachoeira Do Morcego" className='image' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dignissimos est praesentium eaque, eveniet pariatur accusamus labore animi, laborum a ipsam odio, incidunt deserunt eos quidem. Aliquid, veritatis id corporis odit laudantium error pariatur architecto voluptatibus maiores animi ea nesciunt maxime quia quam dolore fugiat minus, doloremque harum quae cupiditate.</p>
            </div>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, earum?</span>
          </article>
          <article className='card'>
            <h1>Cachoeira do Itapecuru</h1>
            <div>
              <img src="/imgs/cachoeira-do-itapecuru.jpg" alt="Cachoeira do Itapecuru" className='image' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dignissimos est praesentium eaque, eveniet pariatur accusamus labore animi, laborum a ipsam odio, incidunt deserunt eos quidem. Aliquid, veritatis id corporis odit laudantium error pariatur architecto voluptatibus maiores animi ea nesciunt maxime quia quam dolore fugiat minus, doloremque harum quae cupiditate.</p>
            </div>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, earum?</span>
          </article>
          <article className='card'>
            <h1>Mata dos Cocais</h1>
            <div>
              <img src="/imgs/mata-dos-cocais.jpg" alt="Mata dos Cocais" className='image' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dignissimos est praesentium eaque, eveniet pariatur accusamus labore animi, laborum a ipsam odio, incidunt deserunt eos quidem. Aliquid, veritatis id corporis odit laudantium error pariatur architecto voluptatibus maiores animi ea nesciunt maxime quia quam dolore fugiat minus, doloremque harum quae cupiditate.</p>
            </div>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, earum?</span>
          </article>
        </section>
        <aside className='notes'>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, magni.</h3>
          <ol className='list-locate'>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ol>
        </aside>
      </main>
    </div>
  )
}

export default App
