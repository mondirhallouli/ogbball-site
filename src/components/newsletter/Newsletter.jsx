import { Container } from "../Layout";
import { NLBtn, NLForm, NLInput, NLWrapper } from "./Components";
import { NLdesc, SectionTitle } from "../Typography";

export default function Newsletter() {
  return (
    <Container>
      <SectionTitle>Newsletter</SectionTitle>
      <NLWrapper>
        <NLdesc>
          In addition to all the free youtube content full of tips and tutorials that advance your basketball skills, we have a weekly newsletter with the latest basketball news, tips, and game analysis.
        </NLdesc>
        <NLForm>
          <NLInput type="email" placeholder="your@email.com" />
          <NLBtn type="submit">Subscribe</NLBtn>
        </NLForm>
      </NLWrapper>
    </Container>
  )
}