import Link from "next/link";
import { Metadata } from "next";
import { Page } from "@components/Page";

export const metadata: Metadata = {
  title: 'About'
};

const About = () => {
  return (
      <Page title="About">
        <h2>About Page</h2>
        <Link href="/">Go Home</Link>
      </Page>
  )
}

export default About;
