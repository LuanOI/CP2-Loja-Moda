import styled from "styled-components";

export const Nav = styled.nav`
    width: 85%;
    mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 25%, #ffffff 75%, rgba(255, 255, 255, 0) 100%);
    margin: 0 auto;
    ul {
        margin:5px 0;
        text-align: center;
        background:linear-gradient(90deg, transparent -20%, rgb(188, 226, 186) , rgb(138, 226, 133)49%, rgb(188, 226, 186) 86%,transparent 120% );
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
    }
    li {
        display: inline-block;
    }
    a {
    padding: 1rem 2rem;
    font-weight: bold;
    font-family: "Open Sans";
    text-transform:uppercase;
    color: rgba(0, 0, 0, 0.959);
    text-decoration: none;
    display: block;
    transition: all 0.2s ease-in;
    &:hover { 
        box-shadow: 0 0 10px rgb(23 39 15), inset 0 0 1px rgb(255 255 255 / 60%);
        background: rgba(160, 243, 160, 0.733);
        color: rgba(3, 51, 7, 0.938);
        }
    }
`;

