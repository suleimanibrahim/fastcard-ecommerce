const jurisdiction = "Yobe, Nigeria";

export const Privacy_Policy_Data = [
  {
    id: 1,
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-3">
          We collect information that you voluntarily provide to us, such as
          your name, email address, phone number, and payment details.
          Additionally, we collect usage data automatically through cookies and
          tracking technologies.
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Personal Identification Information</li>
          <li>Usage and Log Data</li>
          <li>Cookies and Tracking Technologies</li>
        </ul>
      </>
    )
  },
  {
    id: 2,
    title: "How We Use Your Information",
    content: (
      <p>
        We use your information to provide, maintain, and improve our Services,
        communicate with you, process transactions, and comply with legal
        obligations.
      </p>
    )
  },
  {
    id: 3,
    title: "Sharing Your Information",
    content: (
      <p>
        We do not sell your personal information. We may share your data with
        trusted third parties who assist in operating our Services, under strict
        confidentiality agreements.
      </p>
    )
  },
  {
    id: 4,
    title: "Cookies and Tracking",
    content: (
      <p>
        We use cookies to enhance your experience, analyze usage, and deliver
        personalized content. You can control cookie preferences through your
        browser settings.
      </p>
    )
  },
  {
    id: 5,
    title: "Your Rights and Choices",
    content: (
      <p>
        Depending on your jurisdiction, you may have rights to access, correct,
        or delete your personal data. Please contact us to exercise your rights.
      </p>
    )
  },
  {
    id: 6,
    title: "Data Security",
    content: (
      <p>
        We implement industry-standard security measures to protect your data
        from unauthorized access, alteration, or disclosure.
      </p>
    )
  },
  {
    id: 7,
    title: "Children’s Privacy",
    content: (
      <p>
        Our Services are not directed to children under 13. We do not knowingly
        collect personal information from children.
      </p>
    )
  },
  {
    id: 8,
    title: "Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy periodically. Continued use of our
        Services after changes constitutes acceptance of the updated policy.
      </p>
    )
  },
  {
    id: 9,
    title: "Governing Law",
    content: (
      <p>
        This Privacy Policy is governed by the laws of{" "}
        <strong>{jurisdiction}</strong>. Any disputes will be resolved in courts
        located within this jurisdiction.
      </p>
    )
  }
];
