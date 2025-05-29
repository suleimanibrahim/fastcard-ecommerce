import { Link } from "react-router-dom";
import { scrollToTop } from "../components/ui/utils";

const companyName = "FastCart";
const jurisdiction = "Cairo, Egypt";
const privacyPolicyUrl = "/privacy";

export const Terms_Of_Service_Data = [
  {
    id: 1,
    title: "Acceptance of Terms",
    content: (
      <p>
        By using our Services, you affirm that you are at least 18 years old or
        have reached the age of majority in your jurisdiction and that you agree
        to these Terms. If you do not agree, please do not use our Services.
      </p>
    )
  },
  {
    id: 2,
    title: "Use of Services",
    content: (
      <>
        <p className="mb-3">
          You agree to use our Services only for lawful purposes and in
          accordance with all applicable laws and regulations. You shall not:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Violate any laws or third-party rights;</li>
          <li>Transmit harmful, offensive, or unlawful content;</li>
          <li>Attempt to disrupt or damage our Services;</li>
          <li>Use automated tools or bots without prior consent.</li>
        </ul>
      </>
    )
  },
  {
    id: 3,
    title: "Account Registration",
    content: (
      <p>
        If our Services require registration, you agree to provide accurate and
        complete information. You are responsible for maintaining the
        confidentiality of your account credentials and for all activities under
        your account.
      </p>
    )
  },
  {
    id: 4,
    title: "Intellectual Property",
    content: (
      <p>
        All content, trademarks, logos, and intellectual property rights related
        to the Services belong to <strong>{companyName}</strong> or its
        licensors. You may not use, reproduce, or distribute our intellectual
        property without explicit permission.
      </p>
    )
  },
  {
    id: 5,
    title: "Privacy",
    content: (
      <p>
        Your use of the Services is also governed by our{" "}
        <Link
          to={privacyPolicyUrl}
          onClick={scrollToTop}
          className="text-green-700 hover:underline">
          Privacy Policy
        </Link>
        , which explains how we collect, use, and protect your personal
        information. Please review it carefully.
      </p>
    )
  },
  {
    id: 6,
    title: "Termination",
    content: (
      <p>
        We reserve the right to suspend or terminate your access to the Services
        at our sole discretion, without prior notice, for violations of these
        Terms or for any reason deemed necessary.
      </p>
    )
  },
  {
    id: 7,
    title: "Disclaimers and Limitation of Liability",
    content: (
      <p>
        The Services are provided &quot;as is&quot; without warranties of any
        kind. We do not guarantee uninterrupted or error-free operation. To the
        fullest extent permitted by law, <strong>{companyName}</strong> shall
        not be liable for any damages arising from your use of the Services.
      </p>
    )
  },
  {
    id: 8,
    title: "Changes to Terms",
    content: (
      <p>
        We may update these Terms from time to time. Continued use of the
        Services after changes implies acceptance of the revised Terms. We
        encourage you to review the Terms periodically.
      </p>
    )
  },
  {
    id: 9,
    title: "Governing Law",
    content: (
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of <strong>{jurisdiction}</strong>. Any disputes will be resolved
        in the courts of <strong>{jurisdiction}</strong>.
      </p>
    )
  }
];
