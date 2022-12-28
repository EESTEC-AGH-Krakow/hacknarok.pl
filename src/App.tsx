import styled from "styled-components";
import LandingPage from "./Pages/LandingPage";

const FakeContent = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <>
      <LandingPage />
      <FakeContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
        diam tincidunt, rhoncus tortor vitae, rutrum dolor. Curabitur et feugiat
        velit. Morbi nec erat nisl.
      </FakeContent>
    </>
  );
}

export default App;
