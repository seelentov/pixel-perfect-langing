import { FC } from 'react';


export const StagesItem: FC<IAdvantages> = ({ header, description }) => {
  return (
    <>
      <h3>{header}</h3>
      <div dangerouslySetInnerHTML={{ __html: description }}>

      </div>
    </>
  );
}