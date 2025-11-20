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

interface StatusUpdateEmailProps {
    firstName: string;
    paperTitle: string;
    submissionId: string;
    newStatus: string;
    comments?: string[];
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

const logoUrl = "https://placehold.co/120x50/f0f9ff/0ea5e9?text=JCT+Journal";

export const StatusUpdateEmail = ({
                                      firstName = "Author",
                                      paperTitle = "A Novel Approach to AI",
                                      submissionId = "JCT-25-001",
                                      newStatus = "REVIEWED",
                                      comments = [],
                                  }: StatusUpdateEmailProps) => {
    // Helper to format status for display
    const formattedStatus = newStatus.replace(/_/g, " ").toUpperCase();

    // Dynamic color based on status
    const statusColor =
        newStatus === "PUBLISHED"
            ? "text-green-600"
            : newStatus === "REJECTED"
                ? "text-red-600"
                : "text-blue-600";

    return (
        <Html>
            <Tailwind
                config={{
                    theme: {
                        extend: {
                            colors: {
                                brand: "#0891b2",
                            },
                        },
                    },
                }}
            >
                <Head />
                <Preview>Update on your submission: {submissionId}</Preview>
                <Body className="bg-gray-100 font-sans text-gray-800">
                    <Container className="bg-white border border-gray-200 rounded-lg shadow-sm my-12 mx-auto p-8 max-w-xl">
                        <Section className="text-center">
                            <Img src={logoUrl} width="120" alt="JCT Logo" className="mx-auto" />
                        </Section>

                        <Heading className="text-xl font-semibold text-center mt-6">
                            Status Update
                        </Heading>

                        <Text className="text-base leading-7">Dear {firstName},</Text>

                        <Text className="text-base leading-7">
                            The status of your paper <strong>"{paperTitle}"</strong> ({submissionId}) has been updated.
                        </Text>

                        <Section className="bg-gray-50 border border-gray-200 rounded p-4 text-center my-4">
                            <Text className="text-sm text-gray-500 m-0 uppercase tracking-wider">
                                Current Status
                            </Text>
                            <Heading
                                as="h2"
                                className={`text-2xl font-bold m-0 mt-2 ${statusColor}`}
                            >
                                {formattedStatus}
                            </Heading>
                        </Section>

                        {comments && comments.length > 0 && (
                            <Section className="my-6">
                                <Text className="font-semibold mb-2">Editor/Reviewer Comments:</Text>
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 italic text-gray-700">
                                    {comments.map((comment, idx) => (
                                        <Text key={idx} className="m-0 mb-2 last:mb-0">
                                            "{comment}"
                                        </Text>
                                    ))}
                                </div>
                            </Section>
                        )}

                        <Section className="text-center mt-8">
                            <Button
                                className="bg-brand text-white font-semibold rounded-md px-6 py-3"
                                href={`${baseUrl}/track`}
                            >
                                View Submission Dashboard
                            </Button>
                        </Section>

                        <Hr className="border-t border-gray-300 my-8" />
                        <Text className="text-xs text-center text-gray-500">
                            JCT Journal System • Automated Notification
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default StatusUpdateEmail;