import styled from 'styled-components';

export const StyledLine = styled.div`
    position: relative;
    background-color: #292929;
    width: ${(props) => props.width? props.width: "1.9px"};
    line-height: 22.08px;
    margin-left: ${(props) => props.marginLeft? props.marginLeft: "112px"};
    height: ${(props) => props.height}
`