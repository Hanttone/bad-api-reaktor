import { List, AutoSizer } from "react-virtualized";
import styled from "styled-components";

export default function Products({products, derp, reps, abiplos, nouke, xoon, onLoading}) {
    console.log(typeof reps, "reps")
    console.log(typeof derp, "derp")
    console.log(typeof abiplos, "abiplos")
    console.log(typeof xoon, "xoon")
    console.log(typeof nouke, "nouke")
    if (products !== undefined ) {
        function printId(id, manufacturer) {
        let availability = ""
        if (manufacturer === "reps") {
          reps.response.map(rep => ((rep.id === id.toUpperCase())) && (availability = rep.DATAPAYLOAD.replace(/</g, " ").replace(/>/g, " ").split(" ")))
          return availability[6]
        } else if (manufacturer === "derp") {
          derp.response.map(rep => ((rep.id === id.toUpperCase())) && (availability = rep.DATAPAYLOAD.replace(/</g, " ").replace(/>/g, " ").split(" ")))
          return availability[6]
        } else if (manufacturer === "abiplos") {
          abiplos.response.map(rep => ((rep.id === id.toUpperCase())) && (availability = rep.DATAPAYLOAD.replace(/</g, " ").replace(/>/g, " ").split(" ")))
          return availability[6]
        } else if (manufacturer === "nouke") {
          nouke.response.map(rep => ((rep.id === id.toUpperCase())) && (availability = rep.DATAPAYLOAD.replace(/</g, " ").replace(/>/g, " ").split(" ")))
          return availability[6]
        } else if (manufacturer === "xoon") {
          xoon.response.map(rep => ((rep.id === id.toUpperCase())) && (availability = rep.DATAPAYLOAD.replace(/</g, " ").replace(/>/g, " ").split(" ")))
          return availability[6]
        }
      }
    
      return (
            <div style={{width: "100%", height: "100vh", padding: "2%"}}>
                <AutoSizer>
                {({width, height}) => (  
                  <List 
                  width={width} 
                  height={height} 
                  rowHeight={50} 
                  rowCount={products.length}
                  rowRenderer={({key, index, style, parent}) => {
                    const product = products[index];
    
                    return (
                        <ProductWrapper key={key} style={style}>
                          <div>{product.name}</div>
                          <div>{product.price}</div>
                          <div>{product.color[0]}</div>
                          <div>{product.manufacturer}</div>
                          <div>{printId(product.id, product.manufacturer)}</div>
                        </ProductWrapper> )
                      }}/>
                  )}
                </AutoSizer>
              </div>
       ) } else {
           return <LoadingWrapper>Content is Loading</LoadingWrapper>
       }
    }

const ProductWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr 1fr;
`;

const LoadingWrapper = styled.div`
margin-left: 2%;
`;

