import React from "react";

const Section = ({ title, subtitle, children, id }) => {
  return (
    <section id={id} className="w-full px-[20px] py-[30px] md:py-[60px] text-white">
      <div className="max-w-[1600px] mx-auto">
        {subtitle ? (
          <p className="text-primary font-semibold mb-2 md:mb-3">{subtitle}</p>
        ) : null}
        {title ? (
          <h2 className="text-[32px] md:text-[48px] font-black leading-tight mb-4">
            {title}
          </h2>
        ) : null}
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
};

const FeatureList = ({ items, columns = 2 }) => {
  const gridCols = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  return (
    <ul className={`grid grid-cols-1 ${gridCols} gap-3 md:gap-4 list-disc pl-5`}> 
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

const ManagedIT = () => {
  return (
    <main className="w-full">
      {/* Overview */}
      <Section
        id="managed-it-overview"
        subtitle="Managed IT Services"
        title="Reliable, proactive and cost‑effective technology for your business"
      >
        <p>
          Our Managed IT Services are designed to provide businesses with reliable, proactive,
          and cost‑effective technology solutions. By focusing on prevention rather than reaction,
          we help organizations reduce downtime, improve productivity, and ensure long‑term IT stability.
        </p>
      </Section>

      {/* Proactive vs Reactive */}
      <Section
        id="proactive-it"
        title="Proactive IT Infrastructure Support Saves Money"
      >
        <p>
          Many organizations operate with reactive IT models—support kicks in only when something breaks.
          That approach often leads to unexpected costs and prolonged downtime. A proactive strategy focuses on
          continuous monitoring, preventative maintenance, and early issue detection—reducing risk and total cost of ownership over time.
        </p>
      </Section>

      {/* Systems Administration */}
      <Section
        id="systems-administration"
        subtitle="Core Offering"
        title="Systems Administration"
      >
        <p>
          We manage both on‑premises and cloud environments to keep operations smooth, secure, and compliant.
          From user administration to mission‑critical applications, we handle the day‑to‑day so your team can focus on growth.
        </p>
        <div className="mt-4">
          <h3 className="text-xl md:text-2xl font-bold mb-3">Key Features</h3>
          <FeatureList
            columns={3}
            items={[
              "Infrastructure Help Desk – Centralized support for technical issues",
              "Active Directory Administration – Users, groups, and access",
              "24/7 System Monitoring – Servers, apps, and networks",
              "Email/Exchange Administration – Secure and efficient mail",
              "Business Application Support – Ongoing app management",
              "Backup Services Monitoring – Verifying success and recoverability",
              "Disaster Recovery Planning – Strategies to minimize downtime",
              "Patch & Update Management – Security and performance",
              "Performance Optimization – Prevent slowdowns and bottlenecks",
              "Capacity Planning – Prepare resources for growth",
              "Compliance & Audit Support – Meet regulatory standards",
            ]}
          />
        </div>
      </Section>

      {/* Cloud Managed Services */}
      <Section
        id="cloud-managed-services"
        subtitle="Microsoft Azure Specialists"
        title="Cloud Managed Services"
      >
        <p>
          We deliver secure migrations, efficient day‑to‑day operations, and continuous optimization in the cloud.
          Our Azure expertise brings enterprise‑grade scalability, security, and cost control.
        </p>
        <div className="mt-4">
          <h3 className="text-xl md:text-2xl font-bold mb-3">Key Features</h3>
          <FeatureList
            items={[
              "On‑Premise to Cloud Migration",
              "Cloud Infrastructure Management (VMs, storage, networking)",
              "Cloud Backup & Security with compliance controls",
              "Cloud Monitoring & Automation for performance and cost",
              "Azure Active Directory (Azure AD) – SSO and secure authentication",
              "Azure Virtual Desktop (AVD) – Secure remote work",
              "Azure Security Center & Sentinel – Unified security and SIEM",
              "Azure Backup & Site Recovery – Business continuity",
              "Azure Cost Management – Usage insights and optimization",
              "Hybrid Cloud Integration – Extend on‑prem into Azure",
            ]}
          />
        </div>
      </Section>

      {/* Cybersecurity */}
      <Section id="cybersecurity" title="Cybersecurity Services">
        <p>
          Security is embedded in everything we deliver. Our layered defenses protect against malware,
          phishing, and data breaches while supporting compliance objectives.
        </p>
        <div className="mt-4">
          <FeatureList
            items={[
              "Endpoint Detection & Response (EDR)",
              "Remote Monitoring & Security Audits",
              "Penetration Testing",
              "Data Loss Prevention (DLP)",
              "Phishing Simulations & Training",
            ]}
          />
        </div>
      </Section>

      {/* Desktop Support */}
      <Section
        id="desktop-support"
        title="Desktop Support Excellence"
      >
        <p>
          Responsive end‑user support that prioritizes fast resolution, user education, and proactive maintenance
          to keep teams productive.
        </p>
        <div className="mt-4">
          <h3 className="text-xl md:text-2xl font-bold mb-3">Key Features of Effective User Support</h3>
          <FeatureList
            columns={3}
            items={[
              "Understanding User Needs",
              "Fast Resolution of Common Issues",
              "Technical Proficiency across OS, apps, and networks",
              "Hardware Troubleshooting",
              "Network Configuration",
              "Proactive Maintenance (patches, updates, health checks)",
              "User Feedback collection",
              "Technology Awareness",
              "Continuous Improvement via training",
              "Preventive Problem Solving",
            ]}
          />
        </div>
      </Section>

      {/* Tools & Technologies */}
      <Section
        id="tools"
        title="Tools and Technologies for Support"
      >
        <FeatureList
          items={[
            "Remote Monitoring & Management (RMM)",
            "Advanced Helpdesk Platforms",
            "AI‑Powered Diagnostics",
            "Centralized Knowledge Base",
            "Security & Compliance Tooling",
          ]}
        />
      </Section>

      {/* Closing */}
      <Section id="conclusion">
        <p>
          Our Managed IT Services keep your business secure, efficient, and ready for what’s next.
          With a proactive, comprehensive approach, we minimize downtime, reduce costs, and let your team
          focus on core business goals.
        </p>
      </Section>
    </main>
  );
};

export default ManagedIT;


