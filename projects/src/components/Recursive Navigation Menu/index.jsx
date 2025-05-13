import React from 'react'
import MenuList from './menu-list'




function RecursiveMenu({menus=[]}) {
  return (
    <div className='tree-view-container'>
      <MenuList list={menus}/>
    </div>
  )
}

export default RecursiveMenu
