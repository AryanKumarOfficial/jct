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

interface PaymentSuccessEmailProps {
    firstName: string;
    paperTitle: string;
    submissionId: string;
    amount: number;
    orderId: string;
    paymentId: string;
    date: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

const logoUrl = "https://placehold.co/120x50/f0f9ff/0ea5e9?text=JCT+Journal";

export const PaymentSuccessEmail = ({
                                        firstName = "Author",
                                        paperTitle = "Sample Research Paper",
                                        submissionId = "JCT-25-000",
                                        amount = 1500,
                                        orderId = "order_123456",
                                        paymentId = "pay_123456",
                                        date = new Date().toLocaleDateString(),
                                    }: PaymentSuccessEmailProps) => (
    <Html>
        {/* FIX: Tailwind must wrap Head to inject hover styles */}
        <Tailwind
            config={{
                theme: {
                    extend: {
                        colors: {
                            brand: "#0891b2",
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
            <Preview>Payment Receipt: Publication Fee for {submissionId}</Preview>
            <Body className="bg-gray-50 font-sans text-gray-700">
                <Container className="bg-white border border-gray-200 rounded-lg shadow-sm my-12 mx-auto p-8 max-w-2xl">

                    {/* Logo */}
                    <Section className="text-center">
                        <Img
                            src={logoUrl}
                            width="120"
                            alt="JCT Journal Logo"
                            className="mx-auto"
                        />
                        <Heading className="text-2xl font-semibold text-brand mt-6">
                            Payment Successful
                        </Heading>
                    </Section>

                    <Text className="text-base leading-7 mt-6">Dear {firstName},</Text>
                    <Text className="text-base leading-7">
                        We have successfully received your publication fee payment for the manuscript
                        <strong> "{paperTitle}"</strong> ({submissionId}).
                    </Text>

                    {/* Receipt Details */}
                    <Section className="bg-light border border-dashed border-cyan-300 rounded-md p-6 my-6">
                        <Heading as="h3" className="text-lg font-bold text-gray-800 m-0 mb-4">
                            Transaction Receipt
                        </Heading>
                        <div className="mb-2">
                            <Text className="m-0 text-sm text-gray-500 uppercase tracking-wider font-semibold">Amount Paid</Text>
                            <Text className="m-0 text-xl font-medium text-gray-900">₹{amount}.00</Text>
                        </div>
                        <Hr className="border-gray-200 my-4" />

                        <div className="flex justify-between mb-2">
                            <Text className="m-0 text-sm font-semibold text-gray-500 mr-2">Payment ID:</Text>
                            <Text className="m-0 text-sm text-gray-800 font-mono">{paymentId}</Text>
                        </div>
                        <div className="flex justify-between mb-2">
                            <Text className="m-0 text-sm font-semibold text-gray-500 mr-2">Order ID:</Text>
                            <Text className="m-0 text-sm text-gray-800 font-mono">{orderId}</Text>
                        </div>
                        <div className="flex justify-between">
                            <Text className="m-0 text-sm font-semibold text-gray-500 mr-2">Date:</Text>
                            <Text className="m-0 text-sm text-gray-800">{date}</Text>
                        </div>
                    </Section>

                    <Text className="text-base leading-7">
                        Your paper will now proceed to the publication stage. You can track the status on your dashboard.
                    </Text>

                    {/* CTA Button */}
                    <Section className="text-center my-8">
                        <Button
                            className="bg-brand text-white font-semibold rounded-md text-center px-8 py-3 transition-all hover:bg-brand/90"
                            href={`${baseUrl}/author/dashboard`}
                        >
                            Go to Dashboard
                        </Button>
                    </Section>

                    <Hr className="border-t border-gray-300 my-8" />
                    <Section className="text-center">
                        <Text className="text-xs text-gray-500">
                            © {new Date().getFullYear()} JCT Journal System. All rights reserved.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default PaymentSuccessEmail;