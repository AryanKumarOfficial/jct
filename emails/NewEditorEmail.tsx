import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

// Define the props the email component will accept
interface NewEditorEmailProps {
  firstName: string;
  email: string;
  password: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

// A placeholder for the JCT Journal logo
const logoUrl = "https://placehold.co/120x50/f0f9ff/0ea5e9?text=JCT+Journal";

export const NewEditorEmail = ({
  firstName = "Dr. Jane Doe",
  email = "editor@example.com",
  password = "DefaultPassword123",
}: NewEditorEmailProps) => (
  <Html>
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#0891b2", // Professional teal/cyan for JCT
              light: "#f0f9ff",
            },
            fontFamily: {
              sans: ["'Inter'", "sans-serif"],
            },
          },
        },
      }}
    >
      <Head />
      <Preview>
        Welcome Aboard! Your JCT Journal Editor Account is Ready.
      </Preview>
      <Body className="bg-gray-50 font-sans text-gray-700">
        <Container className="bg-white border border-gray-200 rounded-lg shadow-sm my-12 mx-auto p-8 max-w-2xl">
          {/* Header Section */}
          <Section className="text-center">
            <Img
              src={logoUrl}
              width="120"
              alt="JCT Journal Logo"
              className="mx-auto"
            />
            <Heading className="text-2xl font-semibold text-brand mt-6">
              Welcome to the JCT Journal Editorial Team!
            </Heading>
          </Section>

          <Text className="text-base leading-7 mt-6">Dear {firstName},</Text>
          <Text className="text-base leading-7">
            We are delighted to formally welcome you as an Editor for the{" "}
            <strong className="text-brand">JCT Journal System</strong>. Your
            expertise is a valuable addition to our team, and we are excited for
            the contributions you will make to uphold our journal's standards of
            excellence.
          </Text>
          <Text className="text-base leading-7">
            Your editor account has been created. You can access your dashboard
            using the credentials below.
          </Text>

          {/* Credentials Section */}
          <Section className="bg-light border border-dashed border-cyan-300 rounded-md p-6 my-8">
            <Heading as="h2" className="text-lg font-bold text-gray-800 m-0">
              Your Account Details
            </Heading>
            <Hr className="border-t border-gray-300 my-4" />
            <Text className="text-base my-2">
              <strong>Login Email:</strong> {email}
            </Text>
            <Text className="text-base m-0">
              <strong>Password:</strong>
              <code className="font-mono bg-cyan-100 text-cyan-800 px-2 py-1 rounded ml-2">
                {password}
              </code>
            </Text>
          </Section>

          {/* Next Steps Section */}
          <Section>
            <Heading as="h3" className="text-md font-semibold text-gray-800">
              Getting Started
            </Heading>
            <Text className="text-base leading-7 m-0">
              1. Click the button below to access the login page.
            </Text>
            <Text className="text-base leading-7 m-0">
              2. Use the credentials provided above to sign in.
            </Text>
            <Text className="text-base leading-7 m-0">
              3. For your security, Change your password after your first login.
            </Text>
          </Section>

          {/* Login Button Section */}
          <Section className="text-center my-8">
            <Button
              className="bg-brand text-white font-semibold rounded-md text-center px-8 py-3 transition-all hover:bg-brand/90"
              href={`${baseUrl}/login`}
            >
              Access Your Editor Dashboard
            </Button>
          </Section>

          <Text className="text-base leading-7">
            If you have any questions, please don't hesitate to reach out. We
            look forward to working with you.
          </Text>

          {/* Footer Section */}
          <Hr className="border-t border-gray-300 my-8" />
          <Section className="text-center">
            <Text className="text-xs text-gray-500">
              © {new Date().getFullYear()} JCT Journal System, Bhopal, MP,
              India. All rights reserved.
            </Text>
            <Text className="text-xs text-gray-500">
              You received this email because you were invited to be an editor.
              If this was a mistake, please disregard this email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default NewEditorEmail;
