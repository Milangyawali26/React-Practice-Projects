
import React from 'react'
import Tabs from './tabs'



function RandomComponent(){
    return <h1>some random content</h1>
}




function TabTest() {

    const tabs=[
        {
            label:'Tab 1',
            content:<div> this is content for tab 1 </div>
        },
        {
            label:'Tab 2',
            content:<div> this is content for tab 2 </div>
        },
        {
            label:'Tab 3',
            content:<div> <RandomComponent/> </div>
        }

    ]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex)
    }

    
  return (
 <Tabs tabsContent={tabs} onChange={handleChange}/>
  )
}

export default TabTest
