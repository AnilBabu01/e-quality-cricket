import React from 'react'
import filterIcon from './001-edit.svg'
import './FilterStyle.scss'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const Filterproduct = () => {
  return (
    <section className='filter-section'>
        <img src={filterIcon} alt="" />&nbsp;<span className='filter-head'>FILTERS</span>
        <div className='filter-group'>
          <span><span className='expand-icon'><ExpandMoreRoundedIcon  /></span>COLLECTION</span> 
          <hr className='filter-line'/>
          <span><span className='expand-icon'><ExpandMoreRoundedIcon /></span>VENDOR</span> 
          <hr className='filter-line'/>
          <span><span className='expand-icon'><ExpandMoreRoundedIcon /></span>PRODUCT TYPE</span> 
          <hr className='filter-line'/>
          <span><span className='expand-icon'><ExpandMoreRoundedIcon /></span>AVAILABILITY</span> 
          <hr className='filter-line'/>
          <span><span className='expand-icon'><ExpandMoreRoundedIcon  /></span>SIZE</span>
        </div>
    </section>
  )
}

export default Filterproduct
