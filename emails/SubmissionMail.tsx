import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

// Define the props the email component will accept
interface SubmissionReceiptEmailProps {
  firstName: string;
  submissionId: string;
  email: string;
  password: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

// A placeholder for the JCT Journal logo
const logoUrl = "https://placehold.co/120x50/f0f9ff/0ea5e9?text=JCT+Journal";

export const SubmissionReceiptEmail = ({
  firstName = "John Doe",
  submissionId = "JCT-25-001",
  email = "john.doe@example.com",
  password = "SecurePassword123",
}: SubmissionReceiptEmailProps) => (
  <Html>
    {/* The Tailwind component now wraps the entire email structure */}
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#0891b2", // A professional teal/cyan color for JCT
              light: "#f0f9ff",
            },
          },
        },
      }}
    >
      <Head />
      <Preview>Submission Received: Your JCT Journal Credentials</Preview>
      <Body className="bg-gray-100 font-sans text-gray-800">
        <Container className="bg-white border border-gray-200 rounded-lg shadow-sm my-12 mx-auto p-8 max-w-xl">
          {/* Header Section with Logo */}
          <Section className="text-center">
            <Img
              src={logoUrl}
              width="120"
              alt="JCT Journal Logo"
              className="mx-auto"
            />
            <Heading className="text-2xl font-semibold text-brand mt-4">
              Thank You for Your Submission!
            </Heading>
          </Section>

          <Text className="text-base leading-7">Hi {firstName},</Text>
          <Text className="text-base leading-7">
            We've successfully received your submission to the JCT Journal. We
            appreciate your contribution to our publication. An account has been
            created for you to track the review process and manage your
            submissions.
          </Text>

          {/* Tracking Link Section */}
          <Section className="text-center my-8">
            <Button
              className="bg-brand text-white font-semibold rounded-md text-center px-6 py-3"
              href={`${baseUrl}/track/${submissionId}`}
            >
              Track Your Submission Status
            </Button>
          </Section>

          {/* Credentials Section */}
          <Section className="bg-light border border-cyan-200 rounded-md p-6 my-6">
            <Heading
              as="h2"
              className="text-lg font-semibold text-gray-800 m-0"
            >
              Your Login Credentials
            </Heading>
            <Hr className="border-t border-gray-300 my-4" />
            <Text className="text-base m-0">
              <strong>Submission ID:</strong> {submissionId}
            </Text>
            <Text className="text-base my-2">
              <strong>Login Email:</strong> {email}
            </Text>
            <Text className="text-base m-0">
              <strong>Password:</strong> {password}
            </Text>
          </Section>

          {/*<Text className="text-sm text-yellow-700 bg-yellow-50 p-3 rounded-md text-center">*/}
          {/*    <strong>Important:</strong> For your security, please log in and change this temporary password at your earliest convenience.*/}
          {/*</Text>*/}

          {/* Login Button Section */}
          <Section className="text-center mt-8">
            <Link
              href={`${baseUrl}/login`}
              className="text-brand font-medium hover:underline"
            >
              Login to Your Account
            </Link>
          </Section>

          {/* Footer Section */}
          <Hr className="border-t border-gray-300 my-8" />
          <Section className="text-center">
            <Text className="text-xs text-gray-500">
              JCT Journal System, Bhopal, MP, India
            </Text>
            <Text className="text-xs text-gray-500">
              You are receiving this email because you made a submission to our
              journal.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default SubmissionReceiptEmail;
