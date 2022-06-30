import SectionButton from './SectionButton/SectionButton';
import SectionStats from './SectionStats/SectionStats';
import mars from '../../assets/images/mars.png';
import { STATS } from '../../constants';
import './Section.scss';


function Section() {
  return (
    <section className="section">
      <img src={mars} alt="mars" className="mars" />
      <div className="wrapper wrapper__section">
        <div className="section__slogan">
          <div className="slogan">
            <h2>путешествие</h2>
            <h3>на красную планету</h3>
          </div>
          <SectionButton name="Начать путешествие" />
        </div>
        <SectionStats stats={STATS} />
      </div>
    </section>
  );
}

export default Section;
