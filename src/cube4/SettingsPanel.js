import {useEffect, useState} from "react"
import {Button, Divider, Typography} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import {
  StyledSettingsPanel,
  StyledSettingsPanelBody,
  StyledSettingsPanelFooter,
  StyledSettingsPanelHeader
} from "./SettingsPanel.styles"
import {useThreeAppActions} from "../common/context"

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

  threeAppActions.setCubeSize(4)

  return (<StyledSettingsPanel>
    <StyledSettingsPanelHeader>
      <Typography variant="subtitle1" gutterBottom>Settings</Typography>
      <CloseIcon onClick={onClose}/>
    </StyledSettingsPanelHeader>
    <Divider/>
    <StyledSettingsPanelBody>
      {/* TODO: add settings */}
    </StyledSettingsPanelBody>
    <StyledSettingsPanelFooter>
      <BackToMainMenu backToMainMenu={backToMainMenu}/>
    </StyledSettingsPanelFooter>
  </StyledSettingsPanel>)
}

export default SettingsPanel
