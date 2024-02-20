import { FC } from 'react';


export const StagesItem: FC<IAdvantages> = ({ title, text}) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{text}</p>
    </>
  );
}