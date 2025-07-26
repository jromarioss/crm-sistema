import { Container } from "./components";
import { AuthContextProvider } from "./context";

export function Login() {
  return (
    <AuthContextProvider>
      <Container />
    </AuthContextProvider>
  )
}