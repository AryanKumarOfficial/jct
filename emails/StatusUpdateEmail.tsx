import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Tailwind,
} from "@react-email/components";
import * as React from "react";

interface StatusUpdateEmailProps {
    firstName: string;
    paperTitle: string;
    submissionId: string;
    newStatus: string;
    comments?: string[];
    paymentLink?: string;
    amount?: number;
}

export default function StatusUpdateEmail({
                                              firstName,
                                              paperTitle,
                                              submissionId,
                                              newStatus,
                                              comments = [],
                                              paymentLink,
                                              amount,
                                          }: StatusUpdateEmailProps) {
    const isAccepted = newStatus === "ACCEPTED" && paymentLink;

    return (
        <Html>
            <Head/>
            <Preview>Status Update for {submissionId}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container
                        className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            JCT Journal Status Update
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Dear <strong>{firstName}</strong>,
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            The status of your paper titled <strong>"{paperTitle}"</strong> (ID: {submissionId}) has
                            been updated to:
                        </Text>

                        <Section className="text-center my-[20px]">
                            <Text className="text-blue-600 font-bold text-[20px] uppercase tracking-wider">
                                {newStatus.replace("_", " ")}
                            </Text>
                        </Section>

                        {comments.length > 0 && (
                            <Section className="bg-gray-50 p-4 rounded-md mb-[20px]">
                                <Text className="font-bold m-0 mb-2 text-gray-700">Comments from
                                    Reviewers/Editor:</Text>
                                {comments.map((comment, index) => (
                                    <Text key={index} className="text-gray-600 text-[14px] m-0 mb-1">
                                        • {comment}
                                    </Text>
                                ))}
                            </Section>
                        )}

                        {isAccepted && (
                            <Section className="text-center my-[32px]">
                                <Text className="text-black text-[14px] leading-[24px] mb-4">
                                    Congratulations! To proceed with the publication, please complete the publication
                                    fee payment of <strong>₹{amount}</strong>.
                                </Text>
                                <Button
                                    className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                                    href={paymentLink}
                                >
                                    Pay Publication Fee Now
                                </Button>
                                <Text className="text-gray-500 text-[12px] mt-4">
                                    Or use this link: <a href={paymentLink}
                                                         className="text-blue-600 underline">{paymentLink}</a>
                                </Text>
                            </Section>
                        )}

                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full"/>
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            This is an automated message. Please do not reply to this email.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}