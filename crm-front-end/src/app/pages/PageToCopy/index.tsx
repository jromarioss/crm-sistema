import { Container } from "./components";
import { AuthContextProvider } from "./context";

export function Home() {
  return (
    <AuthContextProvider>
      <Container />
    </AuthContextProvider>
  )
}