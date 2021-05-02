/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions

const ModalCompare = ({
  toggleModal, comparisonData, name, overviewProduct, styles,
}) => {
  const {
    ModalDiv, CloseModal, ModalTitle, Table, ModalFirstRow, TableData, TableHeader,
  } = styles;
  return (
    <ModalDiv onClick={() => { toggleModal(); }}>
      <CloseModal onClick={() => { toggleModal(); }}>X</CloseModal>
      <ModalTitle>Comparing</ModalTitle>
      <Table id="table">
        <tbody>
          <tr>
            <ModalFirstRow scope="col">{overviewProduct}</ModalFirstRow>
            <ModalFirstRow scope="col">Feature</ModalFirstRow>
            <ModalFirstRow scope="col">{name}</ModalFirstRow>
          </tr>
          {comparisonData.map(({ featureToCompare, overviewValue, cardValue }) => (
            <tr key={featureToCompare}>
              <TableData>{overviewValue}</TableData>
              <TableHeader>{featureToCompare}</TableHeader>
              <TableData>{cardValue}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </ModalDiv>
  );
};

export default ModalCompare;
