import { FC, HTMLAttributes } from 'react'

export interface IYMClickProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  metrik_id: number
  type?: 'button' | 'link'
  target?: '_blank'
  link?: string
  child?: string
  styleNest?: string
}

export const YMClick: FC<IYMClickProps> = ({ metrik_id, name, child = "", type = 'link', link = "/", target = "", styleNest= "", ...rest }) => {

  if(type === 'button'){
    return (
      <div {...rest} dangerouslySetInnerHTML={{
        __html: /*html */`<button 
        style="width: 100%; height: 100%"
        onclick="ym(${metrik_id},'reachGoal','${name}')">
        ${child}
        </button>`}}>
      </div>
    );
  }


  return (
    <div {...rest} dangerouslySetInnerHTML={{
      __html: /*html */`<a 
      href="${link}" 
      style="${styleNest}"
      onclick="ym(${metrik_id},'reachGoal','${name}')" ${target ? 'target="' + target + '"' : ''}>
      ${child}
      </a>`}}>
    </div>
  );
}