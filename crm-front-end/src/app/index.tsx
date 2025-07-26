import { AuthRouter } from "./routes/AuthRouter";
import { MainRouter } from "./routes/MainRouter";

export function Router() {
  const token = false;
  return token ? <MainRouter /> : <AuthRouter />
}