import React, {useEffect, useState} from "react";
import threeApp from "../common/three-app";
import { ThreeAppActionsProvider } from "../common/context";
import SettingsButton from "./SettingsButton";
import * as serviceWorkerRegistration from "../common/serviceWorkerRegistration";

const AppCube2 = ({setShowMainMenu, setShowCube2}) => {

  const [threeAppActions, setThreeAppActions] = useState(null);

  useEffect(() => {
    if (null === threeAppActions) {
      const tmpThreeAppActions = threeApp();
      tmpThreeAppActions.init();
      setThreeAppActions(tmpThreeAppActions)
    }
  }, [threeAppActions, setThreeAppActions]);

  const backToMainMenu = () => {
    setShowCube2(false)
    const visualisationContainer = document.getElementById("visualisation-container");
    visualisationContainer.style.display = 'none';
    visualisationContainer.innerHTML = '';
    setShowMainMenu(true)
  }

  const WrappedApp = () => {
    const wrappedAppWithProvider = (
      <ThreeAppActionsProvider threeAppActions={threeAppActions}>
        <SettingsButton backToMainMenu={backToMainMenu} />
      </ThreeAppActionsProvider>
    );

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://cra.link/PWA
    serviceWorkerRegistration.register();

    return wrappedAppWithProvider;
  };

  return <WrappedApp />;

}

export default AppCube2