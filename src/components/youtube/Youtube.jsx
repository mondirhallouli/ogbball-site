import { SectionTitle } from "../Typography";
import YoutubeEmbed from "./Youtube-embed";
import { YtContent, YtWrapper } from "../Layout";

export default function Youtube() {
  return (
    <YtWrapper>
      <SectionTitle>more tips on yt</SectionTitle>
      <YtContent>
        <YoutubeEmbed embedId="Qszm4R4_DJ8" />
        <YoutubeEmbed embedId="d8U1R2lZSWI" />
        <YoutubeEmbed embedId="AZl-Abt3A9s" />
      </YtContent>
    </YtWrapper>
  )
}