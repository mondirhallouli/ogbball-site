import { Container } from "../Layout";
import { ContactFlex, ContactForm, ContactLeft, ContactRight, Input, SubmitBtn } from "./Components";
import { SectionTitle } from "../Typography";


export default function Contact() {
  return (
    <Container>
      <SectionTitle>Contact us</SectionTitle>
      <ContactForm>
        <ContactFlex>
          <ContactLeft>
            <Input type='text' placeholder='Name' />
            <Input type='email' placeholder='Email' />
          </ContactLeft>
          <ContactRight placeholder='Message'></ContactRight>
        </ContactFlex>
        <SubmitBtn type="submit">Send</SubmitBtn>
      </ContactForm>
    </Container>
  )
}