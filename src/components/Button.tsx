import styled from "styled-components";

export const Button = styled.button<{ disabled: boolean }>`
    margin-top: 10px;
    font-family: Norse;
    font-size: 24px;
    background-color: ${(props) => (props.disabled ? "gray" : "white")};
    color: black;
    border-radius: 15px;
    padding: 10px 30px 10px 30px;
    outline: none;
    border: 0;
    cursor: ${(props) => (props.disabled ? "initial" : "pointer")};

    //display outline only if navigated with keyboard
    :focus:not(:focus-visible) {
        outline: none;
    }
`;
