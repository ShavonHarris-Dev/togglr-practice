import React, {useState} from 'react'
import DarkModeToggle from "react-dark-mode-toggle";


import Checkbox from './Checkbox'
import Toggle from './Toggle'

const Container = ({onClick}) => {
    
    const [checked, setChecked] = useState(true)
    const [checkedSwitch, setCheckedSwitch] = useState(true)
    const [isDarkMode, setIsDarkMode]= useState(false)
    
    
   function setToggleCheck(){
       setChecked(prevState => !prevState)
     
   }

   function setToggleSwitch(){
    setCheckedSwitch(prevState => !prevState)
    console.log(checkedSwitch)
   }

  
   

  return (
    <div >
       <table className="table table-bordered" >
                <thead  >
                    <tr>
                        <th></th>
                        <th>Checkbox</th>
                        <th>Toggle Switch</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Disabled</td>
                        <td>{<Checkbox 
                        disabled={true}
                        checked={true}
                       
                        
                        />
                        }

                        </td>
                        {/* <td>{<Toggle 
                        disabled={true}
                        checked={true}
                        />}</td> */}
                    </tr>
                    <tr>
                        <td>Enabled</td>
                        <td>{<Checkbox 
                        onChange={(event) => setToggleCheck(event.target.checked)}
                        checked={checked}

                        
                        />}
                        </td>
                        
                        {/* <td>{<Checkbox 
                        onChange={(event) => setToggleCheck(event.target.checked)}
                        onClick={onClick}
                       

                        
                        />}</td> */}
                        <td>{<Toggle 
                        onChange={(event) => setToggleSwitch(event.target.checked)}
                        disabled={false}
                        checked={checkedSwitch}
                        />}</td>

                       
    
                        <td>{<DarkModeToggle 
                        onChange={(event) => setToggleSwitch(event.target.checked)}
                        onClick={setIsDarkMode}
                        checked={isDarkMode}
                        size={80}
        

                        />}</td>
                         
                    
                    </tr>
                </tbody>
            </table>
    </div>
  )
}

export default Container

