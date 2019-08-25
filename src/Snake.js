import React from 'react';

export default (props) => {
 props.snakeDots.map((dot, i) => {
    const style = {
      left: `${dot[0]}%`,
      top: `${dot[1]}%`
    }
  console.log(i)
  });
  
  return (
    <div>
      {props.snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`
        }
        return (
          <div className="snake-dot" key={i} style={style}></div>
        )
      })}
    </div>
  )
}