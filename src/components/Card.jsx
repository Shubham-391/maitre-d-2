import React from 'react'

function Card(props) {
    return (
        <>
            <div className={`Section2box D-flex Flex-col Items-center Relative Overflow-hidden Transition Cursor-pointer ${props.className}`}>
                <div className='W-222 H-222 Bigcircle Radius-50 Absolute D-flex Justify-center Items-center'>
                    <div className='W-156 H-156 Circlebg Radius-50'></div>
                </div>
                <div className={`Section2circle D-flex Items-center Justify-center ${props.className2}`}>
                {props.svg}
                </div>
                <p className='Color-black Text-center Ff-worksans Fs-md2 Font-style-normal Fw-700 Line-height-154 Mb-10'>{props.para1}</p>
                <p className={`Color-black Text-center Ff-worksans Fs-sm3 Font-style-normal Fw-400 Line-height-154 Opacity70 ${props.className3}`}>{props.para2}</p>
            </div>
        </>
    )
}

export default Card