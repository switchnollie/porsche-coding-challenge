import styled from "styled-components";
import Button from "~/components/Button";

export const Container = styled.div`
  position: sticky;
  top: 0;
`;

export const DetailsLinkButton = styled(Button)`
  position: absolute;
  right: 3rem;
  bottom: 3rem;

  @media (max-width: 600px) {
    right: 1rem;
  }
`;
