import styled from 'styled-components';

export const StyleContainer = styled.div`
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;

export const Box = styled.div`
    display: flex;
    margin: 50px;
    color: rgb(12, 137, 1);
    border: 1px solid;
    border-radius: 25px;
    padding: 2%;
    div {
        position: relative;
        border: 2px solid rgb(0, 0, 0);
        padding: 1%;
        border-radius: 20px;
        width: 50%;
        background: linear-gradient(15deg, rgb(4, 133, 25), transparent);
        margin:3px;
        font-size: 15px;
    };
    img {
        border-radius: 15%;
        width: 95%;
    };
    h2 {
        color: #fff;
    };
    h3 {
        color: #fff;
    };
    p {
        color: #fff;
        font-size: 20px;
    };
`;

export const Paragrafo = styled.p`
    font-size: 30px;
    font-weight: bold;
    color: rgb(12, 139, 1);
    display: flex;
    text-align:center;
    justify-content: center; 
`;