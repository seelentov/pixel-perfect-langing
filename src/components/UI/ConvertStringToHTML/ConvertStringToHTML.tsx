import { FC } from 'react';

export const ConvertStringToHTML: FC<{ text: string, tag: string }> = ({ text, tag }) => {

  const newElem = document.createElement(tag)

  newElem.innerHTML = text

  return (
    <>
      {newElem}
    </>
  )

}