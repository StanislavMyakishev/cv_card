import Image from "next/image";
import './page.css';

const fileName = "Stanislav_Myakishev_frontend_developer.pdf";

function Home() {
  return (
    <main>
      <div className="content">
        <span>Hi!</span>
        <br />
        <span>
          My name is&nbsp;
          <span className="highlighted">Stanislav Myakishev</span>
          &nbsp;and I&apos;m a&nbsp;
          <span className="highlighted">front–end developer</span>.
        </span>
        <br />
        <q>Brevity is the sister of talent</q>
        <figure>
          <figcaption>&mdash; Anton Chekhov</figcaption>
        </figure>
        <br />
        <span>
          So instead of many words here you can find my CV
          <br />
          in&nbsp;
          <a href="/cv_card/files/Stanislav_Myakishev_eng.pdf" download={fileName}>
            <span className="highlight-link">english</span>
          </a>
          &nbsp;or in&nbsp;
          <a href="/cv_card/files/Stanislav_Myakishev_ru.pdf" download={fileName}>
            <span className="highlight-link">russian</span>
          </a>
          .
        </span>
        <div className="offset-wrapper">
          <div className="links-table">
          <Image 
            width={100} 
            height={100}
            className="profile"
            src="/cv_card/profile.png"
            alt="stanislav myakishev"
            />
          <table>
            <tbody>
              <tr>
                <td>telegram:</td>
                <td><a className="table-link" href="https://t.me/smyakishev"> @smyakishev </a></td>
              </tr>
              <tr>
                <td>email:</td>
                <td>
                  <a className="table-link" href="mailto:stanislaw.myakishev@yandex.ru">
                    stanislaw.myakishev@yandex.ru
                  </a>
                </td>
              </tr>
              <tr>
                <td>linkedin</td>
                <td>
                  <a className="table-link" href="https://www.linkedin.com/in/smyakishev/"> smyakishev </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
  );
};

export default Home;
