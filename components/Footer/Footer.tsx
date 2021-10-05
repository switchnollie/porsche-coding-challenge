import {
  Container,
  InnerContainer,
  Logo,
  ContactContainer,
  Address,
  PhoneAndMail,
} from "./style";

export default function Footer() {
  return (
    <Container>
      <InnerContainer>
        <Logo src="/logo.svg" alt="Porsche Digital Logo" />
        <ContactContainer>
          <Address>
            Grönerstrasse 11/1
            <br />
            71636 Ludwigsburg
          </Address>
          <PhoneAndMail>
            <a href="mailto:myemail@porsche.digital">myemail@porsche.digital</a>
            <a href="tel:+49 170 911 123456">+49 170 911 123456</a>
          </PhoneAndMail>
        </ContactContainer>
      </InnerContainer>
    </Container>
  );
}
