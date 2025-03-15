import img1 from '/images/background-desktop.png'
import img2 from '/images/background-mobile.png'
import pattern_circle from '/images/pattern-circle.svg'
import pattern_lines from '/images/pattern-lines.svg'
import pattern_top from '/images/pattern-squiggly-line-top.svg'
import pattern_bottom from '/images/pattern-squiggly-line-bottom-desktop.svg'

const Background = () => {
  return (
    <>
      <picture>
        <source srcSet={img2} media='(max-width: 767px)' />
        <source srcSet={img1} media='(min-width: 768px)' />
        <img src={img1} alt='Background Image' className='background-image' />
      </picture>
      <img src={pattern_circle} id='pattern-circle' />
      <img src={pattern_circle} id='pattern-circle' />
      <img src={pattern_lines} id='pattern-lines' />
      <img src={pattern_top} id='pattern-top' />
      <img src={pattern_bottom} id='pattern-bottom' />
    </>
  )
}

export default Background
