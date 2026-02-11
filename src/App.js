import './App.scss';
import VimeoEmbed from './VimeoEmbed';
import signatureLogo from './signature.svg';

export default function App() {
  return (
    <>
      <header className="container">
        <span className="logo">Hey, I’m Jason Briscoe</span>
        <h1 className="title-xl">a design partner and creative director</h1>
        <div className="subtitle">
          <p>
            I’ve spent more than 20 years building, designing and advising
            companies. I specialise in brand, web and digital product design for
            international clients across health, lifestyle and social impact
            spaces.
          </p>
        </div>
      </header>
      <main className="container">
        <figure className="hero">
          <img src="/jb.jpg" alt="Jason Briscoe sitting on a chair" />
        </figure>

        <section className="description-wrapper">
          <div className="subtitle-wrapper">
            <h2 className="title-xl">Concept. Brand. Build. Launch. Exit.</h2>
          </div>
          <VimeoEmbed />
          <div className="description">
            <div>
              <p>
                I’m an independent creative and run a design studio called{' '}
                <a
                  href="https://theworkshop.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Workshop
                </a>
                , based in London, Toronto and NYC. Whether working solo or
                leading a team, I help companies make strategic decisions and
                leverage their position in the market — bridging the gap between
                creative and commercial objectives.
              </p>
              <p>
                I've helped build multiple businesses, leading to over $55M in
                capital investment across multiple sectors.
              </p>
            </div>
          </div>
        </section>

        <section className="expectations-wrapper">
          <h2 className="title-xl">Here’s what you can expect from me...</h2>
          <div className="expectations-list">
            <div className="expectation-item light-green">
              <span>Value</span>
              <h3>Experience, big energy and fresh thinking.</h3>
            </div>
            <div className="expectation-item green">
              <span>Jordan Nott, Founder</span>
              <h3>
                "It’s very rare in life when you meet someone that is so
                decisively exceptional at what they do."
              </h3>
            </div>
            <div className="expectation-item pink">
              <span>Insights</span>
              <h3>
                Bridge the gap between creative and commercial objectives —
                speaking both languages.
              </h3>
            </div>
            <div className="expectation-item light-blue">
              <span>Peter Hwang, Founder</span>
              <h3>
                "From a creative perspective, I’ve never worked with a more
                talented individual."
              </h3>
            </div>
            <div className="expectation-item light-purple">
              <span>Growth</span>
              <h3>
                The foundations to scale —&nbsp;from world-class design and
                advisory to building your future team.
              </h3>
            </div>
            <div className="expectation-item purple">
              <span>Fun</span>
              <h3>
                Teach teams to move at velocity and have a hell of a lot of fun
                doing it.
              </h3>
            </div>
          </div>
        </section>

        <div className="where-to-find-me">
          <div>
            <p>
              Culturally, I fit high-energy teams. If this sounds like you, I’d
              love to connect. Find me on{' '}
              <a
                href="https://www.linkedin.com/in/jsnbrsc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              ,{' '}
              <a
                href="https://www.instagram.com/jsnbrsc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              ,{' '}
              <a
                href="https://x.com/jsnbrsc"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>{' '}
              or shoot me an{' '}
              <a
                href="mailto:jb@jasonbriscoe.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                email
              </a>
              .
            </p>
            <p>Looking forward to it,</p>
            <figure className="signature-logo">
              <img src={signatureLogo} alt="signature logo" />
            </figure>
          </div>
        </div>
      </main>
      <footer className="container">
        <div>
          © Jason Briscoe <span>👋</span>
        </div>
        <div className="socials">
          <a
            href="mailto:jb@jasonbriscoe.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/jsnbrsc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/jsnbrsc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://x.com/jsnbrsc"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </div>
      </footer>
    </>
  );
}
