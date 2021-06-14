import {experimentalStyled as styled} from "@material-ui/core";
import {Paper} from "@material-ui/core";

export const FormElementsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacing(5)};
  max-width: 650px;
  margin: 0 auto ${({theme}) => theme.spacing(7)};
`;

export const ProfessionalsPaper = styled(Paper)`
  padding: ${({theme}) => theme.spacing(7)};
  margin: 0 auto ${({theme}) => theme.spacing(10)};
`;

export const ProfessionalsContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  
  ${({theme}) => theme.breakpoints.up("md")} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({theme}) => theme.spacing(2)};
  }
  
  ${({theme}) => theme.breakpoints.down("md")} {
    margin: auto ${({theme}) => theme.spacing(-2)};
    > :nth-of-type(odd) {
      background-color: ${({theme}) => theme.palette.background.paper};
    }
  }
`;