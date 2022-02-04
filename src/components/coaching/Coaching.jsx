import { CoachingCta } from '../Buttons';
import Container from '../Container';
import { CoachingSection, CoachingContent } from '../Layout';
import { CoachingDesc, SectionTitle } from '../Typography';

export default function Coaching() {
  return (
    <CoachingSection>
      <SectionTitle>Book Coaching</SectionTitle>
      <CoachingContent>
        <CoachingDesc>
          Book a private coaching session with us and benefit from an exclusive one on one training to improve your basketball skills and take your game to the next level through tailored workouts desgined specifically for you.
        </CoachingDesc>
        <CoachingCta>Book session</CoachingCta>
      </CoachingContent>
    </CoachingSection>
  )
}