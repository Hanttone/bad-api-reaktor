import styled from "styled-components";

export default function ColumnHeaders() {
   return <ColumnHeader>
            <h3>Product Name</h3>
            <h3>Price</h3>
            <h3>Color</h3>
            <h3>Manufacturer</h3>
            <h3>Availability</h3>
          </ColumnHeader>
}

const ColumnHeader = styled.div`
margin-left: 2%;
border-bottom: 2px solid black;
display: grid;
grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr 1fr;
`;