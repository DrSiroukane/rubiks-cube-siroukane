import {useEffect, useState} from "react"
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Switch,
  Typography
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import {
  StyledSettingsPanel,
  StyledSettingsPanelBody,
  StyledSettingsPanelFooter,
  StyledSettingsPanelHeader
} from "./SettingsPanel.styles"
import {useThreeAppActions} from "../common/context"

const CubeSizeSetting = ({value, setValue, scrambleEnabled}) => {

  const handleChange = event => {
    setValue(Number(event.target.value))
  }

  return (<div>
    <FormControl sx={{mt: "2rem"}} disabled={scrambleEnabled}>
      <FormLabel id="cube-size-label">Cube Size</FormLabel>
      <RadioGroup
        row
        aria-labelledby="cube-size-label"
        name="cube-size-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="2" control={<Radio size="small"/>} label="2"/>
        <FormControlLabel value="3" control={<Radio size="small"/>} label="3"/>
        <FormControlLabel value="4" control={<Radio size="small"/>} label="4"/>
        <FormControlLabel value="5" control={<Radio size="small"/>} label="5"/>
      </RadioGroup>
    </FormControl>
  </div>)
}

const AnimationSpeedSetting = ({value, setValue}) => {

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (<div>
    <FormControl sx={{width: "100%"}}>
      <FormLabel id="animation-speed-label">Animation Speed</FormLabel>
      <Slider
        aria-labelledby="animation-speed-label"
        size="small"
        min={100}
        max={5000}
        step={25}
        valueLabelDisplay="auto"
        value={value}
        onChange={handleChange}
      />
    </FormControl>
  </div>)
}

const AutoRotateSetting = ({value, setValue}) => {

  const handleChange = event => {
    setValue(event.target.checked)
  }

  return (<div>
    <FormControl>
      <FormLabel id="auto-rotate-label">Auto Rotate</FormLabel>
      <FormControlLabel
        sx={{mt: ".25rem"}}
        control={<Switch
          aria-labelledby="auto-rotate-label"
          size="small"
          checked={value}
          onClick={handleChange}
        />}
        label={value ? "On" : "Off"}
      />
    </FormControl>
  </div>)
}

const AutoRotateSpeedSetting = ({value, setValue}) => {

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (<div>
    <FormControl sx={{width: "100%"}}>
      <FormLabel id="auto-rotate-speed-label">Auto Rotate Speed</FormLabel>
      <Slider
        aria-labelledby="auto-rotate-speed-label"
        size="small"
        min={0.0}
        max={10.0}
        step={0.1}
        valueLabelDisplay="auto"
        value={value}
        onChange={handleChange}
      />
    </FormControl>
  </div>)
}

const AxesEnabledSetting = ({value, setValue}) => {

  const handleChange = event => {
    setValue(event.target.checked)
  }

  return (<div>
    <FormControl>
      <FormLabel id="axes-enabled-label">Show Axes</FormLabel>
      <FormControlLabel
        sx={{mt: ".25rem"}}
        control={<Switch
          aria-labelledby="axes-enabled-label"
          size="small"
          checked={value}
          onClick={handleChange}
        />}
        label={value ? "On" : "Off"}
      />
    </FormControl>
  </div>)
}

const ScrambleEnabledSetting = ({value, setValue}) => {

  const handleChange = event => {
    setValue(event.target.checked)
  }

  return (<div>
    <FormControl>
      <FormLabel id="axes-enabled-label" disabled={value}>Scramble & Solve</FormLabel>
      <FormControlLabel
        sx={{mt: ".25rem"}}
        control={<Switch
          aria-labelledby="axes-enabled-label"
          size="small"
          checked={value}
          onClick={handleChange}
          disabled={value}
        />}
        label={value ? "On" : "Off"}
      />
    </FormControl>
  </div>)
}

const BackToMainMenu = ({backToMainMenu}) => {
  return (<div>
    <Button onClick={backToMainMenu}>
      Back To Main Menu
    </Button>
  </div>);
}

const SettingsPanel = ({onClose, backToMainMenu}) => {

  const threeAppActions = useThreeAppActions()
  const [settings, setSettings] = useState(threeAppActions.getSettings)

  useEffect(() => {
    threeAppActions.addSettingsChangedListener(setSettings)
    return () => threeAppActions.removeSettingsChangedListener(setSettings)
  }, [threeAppActions])

  return (<StyledSettingsPanel>
    <StyledSettingsPanelHeader>
      <Typography variant="subtitle1" gutterBottom>Settings</Typography>
      <CloseIcon onClick={onClose}/>
    </StyledSettingsPanelHeader>
    <Divider/>
    <StyledSettingsPanelBody>
      <CubeSizeSetting value={settings.cubeSize} setValue={threeAppActions.setCubeSize}
                       scrambleEnabled={settings.scrambleEnabled}/>
      <AnimationSpeedSetting value={settings.animationSpeed} setValue={threeAppActions.setAnimationSpeed}/>
      <AutoRotateSetting value={settings.autoRotate} setValue={threeAppActions.setAutoRotate}/>
      <AutoRotateSpeedSetting value={settings.autoRotateSpeed} setValue={threeAppActions.setAutoRotateSpeed}/>
      <AxesEnabledSetting value={settings.axesEnabled} setValue={threeAppActions.setAxesEnabled}/>
      <ScrambleEnabledSetting value={settings.scrambleEnabled} setValue={threeAppActions.setScrambleEnabled}/>
    </StyledSettingsPanelBody>
    <StyledSettingsPanelFooter>
      <BackToMainMenu backToMainMenu={backToMainMenu}/>
    </StyledSettingsPanelFooter>
  </StyledSettingsPanel>)
}

export default SettingsPanel
