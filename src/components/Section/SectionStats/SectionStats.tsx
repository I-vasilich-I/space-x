import { ReactNode } from 'react';
import StatCard from './StatCard/StatCard';
import './SectionStats.scss';

interface ICardProps {
  top: string;
  middle: string | ReactNode;
  bottom: string;
}

interface IProps {
  stats: ICardProps[]
}

const SectionStats = ({ stats }: IProps) => {
  return (
    <div className="section__stats">
      {stats.map(({ top, middle, bottom }, id) => <StatCard key={id} top={top} middle={middle} bottom={bottom} />)}
    </div>
  )
}

export default SectionStats;