import { FC } from 'react';


export const StagesItem: FC<IAdvantages> = ({ attributes }) => {
  return (
    <>
      <h3>{attributes.header}</h3>
      <div dangerouslySetInnerHTML={{ __html: attributes.description }}></div>
    </>
  );
}