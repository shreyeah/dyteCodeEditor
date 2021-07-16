import React,{useState, useEffect} from 'react';
import Editor from './Editor'
import clsx from 'clsx'
import useLocalStorage from './hooks/useLocalStorage'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import AppMenu from './components/AppMenu'


const App: React.FC = () => {
  const classes = useStyles()
  const [html,setHtml] = useLocalStorage('html','');
  const [css,setCss] = useLocalStorage('css','');
  const [js,setJs] = useLocalStorage('js','');
  const [srcDoc, setSrcDoc] = useState('');

  


useEffect(() => {
  const timeout = setTimeout(() => {
    setSrcDoc(`
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  <html>`
    );
  }, 250)

  return () => clearTimeout(timeout)
}, [html, css, js])


  return (
    <BrowserRouter>
    <AppBar position="static" color="default">
        <Toolbar>
          {/* <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" >
            Dyte Code Editor
          </Typography>
        </Toolbar>
      </AppBar>
    <div className={clsx('App', classes.root)}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <AppMenu/>
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
        
     {/* <div className="pane top-pane">
      <Editor language="xml" displayName="HTML"
      value={html} 
      onChange={setHtml} />
      <Editor language="css" displayName="CSS"
      value={css} 
      onChange={setCss} />
      <Editor language="javascript" displayName="JS"
      value={js} 
      onChange={setJs} />
     </div> */}
     <div className="pane">
     
     <Switch>
              <Route path="/" exact >
              <Editor language="xml" displayName="HTML"
 value={html} 
 onChange={setHtml} />
              </Route>
              <Route path="/css" ><Editor language="css" displayName="CSS"
      value={css} 
      onChange={setCss} /></Route>
              <Route path="/javascript">
              <Editor language="javascript" displayName="JS"
      value={js} 
      onChange={setJs} />
      </Route>
            </Switch>
     <iframe 
     srcDoc={srcDoc}
     title="output"
     sandbox="allow-scripts"
     frameBorder="5"
     width="100%"
     height="100%"
     />
     </div>
     

        </Container>
        </main>
    
    </div>
    </BrowserRouter>
  );
}
const drawerWidth = 180

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#535454',
    color: '#fff',
    alignContent:'left',

  },
  content: {
    left:'20px',

    flexGrow: 1,
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))


export default App;