import React from "react";
import {
  FloatContentWrapper,
  CardContainer,
  CardRowHeader,
  CardDivActionsContainer,
  CardRow,
} from "src/partner/modules/ui";
import { TextTableTitleCardEvent } from "src/partner/modules/ui/Text";
import styles from "styled-components";
import { InputLabel } from "src/partner/modules/InputField/InputField";

const CardSection = styles.div({
  padding: ".90625rem 2rem .5rem 2rem",
  borderBottom: "1px solid #f2f2f2",
});

const CustomRow = styles(CardRow)`
    padding: 0px;
    border: none;
`;

const AddButton = styles.button({
  color: "#e83f5d",
  fontSize: ".875rem",
  fontWeight: "bold",
  lineHeight: "1.71",
  border: "0px",
  backgroundColor: "#fff",
});

export const CreateEventContainer: React.SFC = () => {
  return (
    <CardContainer>
      <CardRowHeader>
        <TextTableTitleCardEvent>Event Creator</TextTableTitleCardEvent>
        <CardDivActionsContainer>del</CardDivActionsContainer>
      </CardRowHeader>
      <CardSection>
        <CustomRow>
          <InputLabel
            label="Event Name"
            inputAttrs={{ value: "Nueva Torta", onChange: () => {} }}
          />
        </CustomRow>
        <CustomRow>
          <InputLabel
            label="Expiration Date"
            width="9.1875rem"
            inputAttrs={{ value: "03/28/2019", onChange: () => {} }}
          />
          <InputLabel
            width="7rem"
            label="Time"
            inputAttrs={{ value: "12:09 PM", onChange: () => {} }}
          />
        </CustomRow>
      </CardSection>
      <CardSection>
        <CustomRow>
          <span />
          <AddButton>Add Item</AddButton>
        </CustomRow>
        <CustomRow>
          <InputLabel
            width="9.1875rem"
            label="description"
            inputAttrs={{ value: "Torta de Poc-Chuc" }}
          />
          <InputLabel width="7rem" label="Amount" inputAttrs={{ value: "25.00 MXN" }} />
        </CustomRow>
        <CustomRow>
          <InputLabel
            width="9.1875rem"
            label="description"
            inputAttrs={{ value: "Torta de Poc-Chuc" }}
          />
          <InputLabel width="7rem" label="Amount" inputAttrs={{ value: "25.00 MXN" }} />
        </CustomRow>
      </CardSection>
    </CardContainer>
  );
};
