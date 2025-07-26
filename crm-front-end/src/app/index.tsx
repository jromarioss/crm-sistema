import { AuthRouter } from "./routes/AuthRouter";
import { MainRouter } from "./routes/MainRouter";

export function Router() {
  const token = "";
  return token ? <MainRouter /> : <AuthRouter />
}