import {Button, Hidden, Stack} from "@mui/material";


const MainMenu = ({showMainMenu, setShowMainMenu, setShowExample, setShowCube2, setShowCube3, setShowCube4, setShowCube5}) => {

  if (!showMainMenu) {
    return (<></>)
  }

  const onClickShowExample = () => {
    setShowMainMenu(false)
    document.getElementById("visualisation-container").style.display = 'block'
    setShowExample(true)
  }

  const onClickShowCube2 = () => {
    setShowMainMenu(false)
    document.getElementById("visualisation-container").style.display = 'block'
    setShowCube2(true)
  }

  const onClickShowCube3 = () => {
    setShowMainMenu(false)
    document.getElementById("visualisation-container").style.display = 'block'
    setShowCube3(true)
  }

  const onClickShowCube4 = () => {
    setShowMainMenu(false)
    document.getElementById("visualisation-container").style.display = 'block'
    setShowCube4(true)
  }

  const onClickShowCube5 = () => {
    setShowMainMenu(false)
    document.getElementById("visualisation-container").style.display = 'block'
    setShowCube5(true)
  }

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      mt={4}
    >
      <Button variant="contained" onClick={onClickShowExample}>
        Show Example App
      </Button>

      <Button variant="contained" onClick={onClickShowCube2}>
        Show 2x2x2 Cube
      </Button>

      <Button variant="contained" onClick={onClickShowCube3}>
        Show 3x3x3 Cube
      </Button>

      <Button variant="contained" onClick={onClickShowCube4}>
        Show 4x4x4 Cube
      </Button>

      <Button variant="contained" onClick={onClickShowCube5}>
        Show 5x5x5 Cube
      </Button>


      <Hidden>
        <div>I should be hidden</div>
      </Hidden>
    </Stack>
  )
}

export default MainMenu