import './SectionButton.scss';

interface IProps {
  name: string;
}

const SectionButton = ({ name }: IProps) => {
  return (
    <button type='button' className="section__button">
      {name}
      <span className="bottom"></span>
      <span className="top"></span>
      <span className="left"></span>
      <span className="right"></span>
    </button>
  )
}

export default SectionButton;