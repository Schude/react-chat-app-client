import styled from 'styled-components';

export const ContactWrapper = styled.div`
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    width: 200px;
    height: 600px;
    @media only screen and (max-width: 750px) {
        & {
            display: none;
        }
    }
    @media only screen and (max-width: 1025px) {
        & {
            height: 100vh;
        }
    }
    background-color: rgba(181, 11, 155, 0.5);
`;
export const Title = styled.h1`
    margin: 8px;
    font-size: 24px;
    text-align: center;
    color: #f7e160;
`;
export const ContactList = styled.ul`
    display: flex;
    flex-flow: column;
    list-style-type: none;
    margin: 0;
    padding: 8px;
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

export const ContactItem = styled.li`
    margin: 8px 0;
    font-size: 18px;
    color: #f7e160;
    font-weight: 500;
`;
export const ResponsiveContactButton = styled.button`
    display: none;
    position: absolute;
    height: 22px;
    width: 100px;
    top: 0%;
    left: 50%;
    margin-left: -50px;
    font-size: 12px;
    font-weight: 600;
    border: none;
    z-index: 8;
    color: rgba(181, 11, 155, 0.5);
    @media only screen and (max-width: 750px) {
        & {
            display: block;
        }
    }
`;
export const ResponsiveContact = styled.div`
    display: flex;
    flex-flow: column;
    position: absolute;
    z-index: 5;
    left: 50%;
    margin-left: -75px;
    top: 1%;
    width: 150px;
    background-color: rgba(11, 151, 155, 1);

    @media only screen and (min-width: 750px) {
        & {
            display: none;
        }
    }
`;
