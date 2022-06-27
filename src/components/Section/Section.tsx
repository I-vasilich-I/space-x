import mars from '../../assets/images/mars.png';
import './Section.scss';


function Section() {
  return (
    <div className="section">
      <img src={mars} alt="mars" className="mars" />
      <div className="wrapper wrapper__section">
        <div className="section__slogan">
          <div className="slogan">
            <h2>путешествие</h2>
            <h3>на красную планету</h3>
          </div>
          <button type='button' className="section__button">
            Начать путешествие
            <span className="bottom"></span>
            <span className="top"></span>
            <span className="left"></span>
            <span className="right"></span>
          </button>
        </div>
        <div className="section__stats"></div>
      </div>
    </div>
  );
}

export default Section;
