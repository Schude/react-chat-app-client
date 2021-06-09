import styled from 'styled-components';

export const ChatboxWrapper = styled.div`
    display: flex;
    flex-flow: column;
    margin: auto;
    width: 960px;
    height: 600px;
    background-color: rgba(181, 11, 155, 0.5);
    box-shadow: 0px 0px 200px 0px rgba(0, 0, 0, 0.2);
    margin: 0;
    @media only screen and (max-width: 750px) {
        & {
            height: 100%;
        }
    }
    @media only screen and (max-width: 1025px) {
        & {
            height: 100%;
        }
    }
`;
export const ChatForm = styled.form`
    display: flex;
    flex-flow: row;
    margin: auto;
    width: 100%;
`;
export const InputField = styled.input`
    height: 30px;
    font-size: 18px;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid #fff;
    margin: 20px 10px;
    height: 40px;
    width: 70%;
    box-sizing: border-box;
    &::placeholder {
        font-style: italic;
        font-size: 14px;
    }
    &:focus-visible {
        outline: none;
    }
`;
export const ChatFlow = styled.div`
    flex: 2;
    background-color: white;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #f4666b;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #da3e4d;
    }
`;
export const Message = styled.div`
    display: flex;
    flex-flow: column;
    align-items: ${(props) => props.flex};
    padding: 5px;
    margin: 5px;
    &: hover {
        background-color: #f1f1f1;
    }
`;
export const MessageText = styled.p`
    margin: 0;
    padding: 8px;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    word-break: break-word;
    background-color: ${(props) => props.bgClr};
`;
export const Sender = styled.span`
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.clr};
    margin-bottom: 8px;
`;

