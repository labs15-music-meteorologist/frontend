import styled from 'styled-components';

export default styled.div`
padding-Top: 15px;
padding-bottom: 15px;
margin-top: 35px;
font-weight: 500;
font-size: 20px;
color: white;
background-color: #E20351;
border: none;
border-radius: 5px;
width: 313px;
text-decoration: none;
display: flex;
justify-content: center;

&:hover {
    background: #EB4C83;
  }

  @media (max-width: 500px) {
    
    margin: 0%;
    position: ${prop => prop.noAbsolute ? 'static' : 'absolute'};
    z-index: 1;
    transform: translate(0px, -125px);
    transform: ${prop => prop.noTransform ? 'translate(0px, 0px)' : 'translate(0px, -125px)'};
    font-size: 14px;
    width: 190px;
    height: 15px;
    font-weight: 500;
  }
`;
