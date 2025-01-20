import FixedNav from "../components/Nav/FixedNav";
import MobileNav from "../components/Nav/MobileNav";
import Header from "../components/Description/Header";
import Title from "../components/Description/Title";
import Normal from "../components/Description/Normal";
import Big from "../components/Description/Big";

const Privacy = () => {
  return (
    <div id="body">
      <div className="codeblaze-IqNBt codeblaze-vrYYp codeblaze-NrkXy codeblaze-l50WH codeblaze-V74Ls codeblaze-uKIIJ codeblaze-Fw2Wf codeblaze-72rtr7 min-h-screen !w-auto">
        <FixedNav />
        <MobileNav />
        <div id="content" className="w-full mt-[60px] p-[20px]">
          <Header>Privacy & Policy</Header>
          <Normal>
            At CodeBlaze, we prioritize your privacy and are committed to
            safeguarding your personal information. Below is our Privacy Policy,
            outlining how we collect, use, and protect your data when you use
            our website and services.
          </Normal>
          <div className="p-10" />
          <Title>1. Information Me Collect</Title>
          <div className="p-5" />
          <Normal>
            - Account Information:
            <br />- Email address
            <br />- Name
            <br />- Payment details for subscription plans - Account preferences
            and settings
          </Normal>
          <div className="p-3" />
          <Normal>
            - Service Usage Data:
            <br />- Generated code and prompts
            <br />- Platform interaction data
            <br />- Feature usage statistics
            <br />- Error logs and debugging information
          </Normal>
          <div className="p-3" />
          <Normal>
            - Automatically Collected Information:
            <br />- IP addresses
            <br />- Browser type and version
            <br />- Device information
            <br />- Operating system
            <br />- Access times and dates
            <br />- Pages visited
          </Normal>
          <div className="p-5" />
          <Title>2. How We Use Your Information</Title>
          <div className="p-3" />
          <Big>We utilize your information to:</Big>
          <div className="p-3" />
          <Normal>
            - Provide and Enhance Services:
            <br />- Improve platform functionality
            <br />- Train AI models (excluding Enterprise plan users)
            <br />- Enhance service quality
          </Normal>
          <div className="p-3" />
          <Normal>
            - Support and Operations:
            <br />- Offer customer support
            <br />- Process payments
            <br />- Send service updates
          </Normal>
          <div className="p-3" />
          <Normal>
            - Security and Maintenance:
            <br />- Maintain platform security
            <br />- Analyze usage patterns
            <br />- Debug technical issues
            <br />- Prevent abuse and fraud
          </Normal>
          <div className="p-5" />
          <Title>3. Data Sharing and Processing</Title>
          <div className="p-3" />
          <Normal>
            - Third-Party Service Providers:
            <br />- We may share data with trusted service providers as outlined
            in our Terms of Service.
          </Normal>
          <div className="p-3" />
          <Normal>
            - Enterprise Plan Users:
            <br />- Enterprise users receive additional data protection and
            privacy rights.
          </Normal>
          <div className="p-5" />
          <Title>4. Your Rights</Title>
          <div className="p-3" />
          <Big>You have the right to:</Big>
          <div className="p-3" />
          <Normal>
            - Access your personal data
            <br />- Request data correction
            <br />- Request data deletion
            <br />- Export your data
            <br />- Opt out of certain processing
            <br />- Withdraw consent
          </Normal>
          <div className="p-3" />
          <Normal>
            To exercise these rights, please contact us at feedback@codeblaze.ai
          </Normal>
          <div className="p-5" />
          <Title>5. Security Measures</Title>
          <div className="p-3" />
          <Big>
            We implement industry-standard security measures, including:
          </Big>
          <div className="p-3" />
          <Normal>
            - Encrypted data transmission
            <br />- Secure data storage
            <br />- Access controls
            <br />- Regular security audits
            <br />- Employee training
          </Normal>
          <div className="p-5" />
          <Title>6. Service Improvements and AI Training</Title>
          <div className="p-3" />
          <Normal>
            As detailed in our Terms of Service, we may use certain data to
            improve our services and train our AI systems. Important exceptions
            and limitations apply, particularly for Enterprise users.
          </Normal>
          <div className="p-5" />
          <Title>7. Data Protection and Security</Title>
          <div className="p-3" />
          <Normal>
            Our security measures and data protection practices complement the
            warranty disclaimers and liability limitations detailed in our Terms
            of Service.
          </Normal>
          <div className="p-5" />
          <Title>8. Children's Privacy</Title>
          <div className="p-3" />
          <Normal>
            Our services are not intended for users under 18. We do not
            knowingly collect data from children.
          </Normal>
          <div className="p-5" />
          <Title>9. International Data Transfers</Title>
          <div className="p-3" />
          <Normal>
            We may transfer data internationally within our service provider
            network. We ensure appropriate safeguards are in place for these
            transfers.
          </Normal>
          <div className="p-5" />
          <Title>10. Legal Framework</Title>
          <div className="p-3" />
          <Normal>
            This Privacy Policy is part of and subject to our Terms of Service.
            In case of any conflict between this Privacy Policy and our Terms,
            the Terms shall prevail.
          </Normal>
          <div className="p-5" />
          <Title>11. Changes to This Policy</Title>
          <div className="p-3" />
          <Normal>
            We may update this policy periodically. Changes will be handled in
            accordance with the process outlined in our Terms regarding policy
            updates.
          </Normal>
          <div className="p-5" />
          <Title>12. Contact Details</Title>
          <div className="p-3" />
          <Normal>
            For privacy-related inquiries, please contact us at
            feedback@codeblaze.ai
          </Normal>
          <div className="p-7" />
          <Normal>
            By using our services, you acknowledge that you have read and
            understood this Privacy Policy and agree to its terms.
          </Normal>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
