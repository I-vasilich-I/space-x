import { ReactNode } from 'react';
import './StatCard.scss';

interface IProps {
  top: string;
  middle: string | ReactNode;
  bottom: string;
}

const StatCard = ({ top, middle, bottom }: IProps) => {
  return (
    <div className="stat__card">
      <p className="card__top">{top}</p>
      <p className="card__middle">{middle}</p>
      <p className="card__bottom">{bottom}</p>
    </div>
  )
}

export default StatCard;