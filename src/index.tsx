import ReactDOM from "react-dom"
import { App } from "./App"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <App />,
  document.getElementById("root"),
)
serviceWorker.register()
