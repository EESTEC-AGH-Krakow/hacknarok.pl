import styled from "styled-components";

const FakeContent = styled.div`
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default function About() {
  return (
    <FakeContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed diam
      tincidunt, rhoncus tortor vitae, rutrum dolor. Curabitur et feugiat velit.
      Morbi nec erat nisl.
    </FakeContent>
  );
}
