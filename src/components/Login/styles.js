import styled from 'styled-components';

export const LoginPage = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    background-image: linear-gradient(
        to right bottom,
        #3266f8,
        #0085ff,
        #009eff,
        #00b4fd,
        #00c7f3,
        #00d3e9,
        #09ddd9,
        #51e5c5,
        #78e9a8,
        #a3e98a,
        #cee76f,
        #fbe05f
    );
`;
export const Form = styled.form`
    display: flex;
    flex-flow: column;
    margin: auto;
    width: 350px;
    background-color: rgba(111, 111, 111, 0.5);
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;
export const InputField = styled.input`
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid #fff;
    margin: 20px 10px;
    height: 40px;
    // width: 70%;
    box-sizing: border-box;
    &::placeholder {
        font-style: italic;
        font-size: 14px;
    }
    &:focus-visible {
        outline: none;
    }
`;

export const Button = styled.button`
    margin: auto;
    background-color: #f7797d;
    font-size: 16px;
    color: #fff;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &: hover {
        background-color: #da3e4d;
    }
    @media only screen and (max-width: 600px) {
        & {
            margin: auto 8px;
        }
    }
`;
