import {useState} from "react"
import MainMenu from "./MainMenu";
import AppExample from "./example/ExampleApp";
import AppCube2 from "./cube2/AppCube2";
import AppCube3 from "./cube3/AppCube3";
import AppCube4 from "./cube4/AppCube4";
import AppCube5 from "./cube5/AppCube5";

const App = () => {
  const [showMainMenu, setShowMainMenu] = new useState(true)
  const [showExample, setShowExample] = new useState(false)
  const [showCube2, setShowCube2] = new useState(false)
  const [showCube3, setShowCube3] = new useState(false)
  const [showCube4, setShowCube4] = new useState(false)
  const [showCube5, setShowCube5] = new useState(false)

  const mainMenuProps = {
    showMainMenu, setShowMainMenu, setShowExample, setShowCube2, setShowCube3, setShowCube4, setShowCube5,
  }

  const appExampleProps = {
    setShowMainMenu, setShowExample,
  }

  const appCube2Props = {
    setShowMainMenu, setShowCube2,
  }

  const appCube3Props = {
    setShowMainMenu, setShowCube3,
  }

  const appCube4Props = {
    setShowMainMenu, setShowCube4,
  }

  const appCube5Props = {
    setShowMainMenu, setShowCube5,
  }

  return (<>
      {showCube2 && <AppCube2 {...appCube2Props} />}
      {showCube3 && <AppCube3 {...appCube3Props} />}
      {showCube4 && <AppCube4 {...appCube4Props} />}
      {showCube5 && <AppCube5 {...appCube5Props} />}
      {showExample && <AppExample {...appExampleProps} />}
      {showMainMenu && (<MainMenu {...mainMenuProps} />)}
    </>)
}

export default App
