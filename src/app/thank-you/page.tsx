import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="max-w-xl mx-auto text-center py-20 px-4">
      <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
      <p className="text-gray-600">
        We’re preparing your food and will deliver it soon.
      </p>
      <Link
        href="/"
        className="inline-block  mt-6 text-[#f49620]  font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
}
