import {
  List,
  AutoSizer,
} from 'react-virtualized';
import styled from 'styled-components';

export default function Products({
  products,
  derp,
  reps,
  abiplos,
  nouke,
  xoon,
}) {
  if (products !== undefined) {
    function checkAvailability(id, manufacturer) {
      let availability = '';
      let manufacturerName;

      switch (manufacturer) {
        case 'reps':
          manufacturerName = reps;
          break;
        case 'derp':
          manufacturerName = derp;
          break;
        case 'abiplos':
          manufacturerName = abiplos;
          break;
        case 'nouke':
          manufacturerName = nouke;
          break;
        case 'xoon':
          manufacturerName = xoon;
          break;
        default:
          return 'N/A';
      }

      manufacturerName.response.map(
        (company) =>
          company.id === id.toUpperCase() &&
          (availability = company.DATAPAYLOAD.replace(
            /</g,
            ' '
          )
            .replace(/>/g, ' ')
            .split(' ')) //cleaning and trimming the DATAPAYLOAD to only show the availability
      );
      return availability[6];
    }

    return (
      <div
        //styling added exceptionally here because React-Virtualizer AutoSizer is not accepting it as a styled-component
        style={{
          width: '100%',
          height: '100vh',
          padding: '2%',
        }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              //defining scrolling window size where the elements are rendered
              width={width}
              height={height}
              rowHeight={50}
              rowCount={products.length}
              rowRenderer={({
                key,
                index,
                style,
              }) => {
                const product = products[index];

                return (
                  <ProductWrapper
                    key={key}
                    style={style}>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    <div>{product.color[0]}</div>
                    <div>
                      {product.manufacturer}
                    </div>
                    <div>
                      {checkAvailability(
                        product.id,
                        product.manufacturer
                      )}
                    </div>
                  </ProductWrapper>
                );
              }}
            />
          )}
        </AutoSizer>
      </div>
    );
  } else {
    return (
      //showing if products is undefined - due to long API loading times
      <LoadingWrapper>
        Content is Loading
      </LoadingWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr 1fr;
`;

const LoadingWrapper = styled.div`
  margin-left: 2%;
`;
