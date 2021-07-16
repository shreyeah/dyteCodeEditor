import React,{useState} from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import useLocalStorage from './hooks/useLocalStorage'
import {Controlled as ControlledEditor} from 'react-codemirror2';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';


function Editor(props){

  const {
    language,
    displayName,
    value,
    onChange
  } = props;

const [open, setOpen] = useState(true);
const [darkTheme, setTheme] = useLocalStorage('theme',true);

function handleChange(editor,data, value){
  onChange(value)
}

  return(
  <div className={darkTheme ? "dark-mode" : "light-mode"}>

    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
      {displayName}
      
      <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setTheme(prevMode => !prevMode)}
        >
         <span className="dark-mode__content-wrap">
				<span className="dark-mode__icon" aria-hidden="true" />
                <Brightness4Icon/>

				{/* <span className="dark-mode__status">{darkTheme ? " on" : " off"}</span> */}
			</span>
        </button>
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => handleChange("","","")}
        >
         <RotateLeftIcon/>
        </button>
      </div>
      <ControlledEditor
      onBeforeChange={handleChange}
      value={value}
      className="code-mirror-wrapper"
      options={{
        lineWrapping:true,
        lint:true,
        mode:language,
        theme:'material',
        lineNumbers:true
      }}
      />
    </div>
    </div>
  )
}

export default Editor;