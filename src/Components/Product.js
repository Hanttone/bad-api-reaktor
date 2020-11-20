import styled from "styled-components";

export default function Product ({name, price, availability}) {

    return <ProductWrapper>
        <div>{name}</div>
        <div>{price}</div>
        <div>{availability}</div>
    </ProductWrapper>
}


const ProductWrapper = styled.section`
display: grid; 
grid-template-columns: 1fr 0.2fr 2fr;

div {
    justify-self: start;
}
`;