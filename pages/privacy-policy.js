import { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContainerAnalytic from "../components/AnalyticContainer";

import styles from "./scss/PrivacyPolicy.module.scss";

export default function AboutUs() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    if (localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"));
    } else {
      localStorage.setItem("lang", "en");
    }
  }, []);

  return (
    <ContainerAnalytic>
      <div className={styles.PrivacyPolicy}>
        <Head>
          <title>
            {lang === "en" ? "Privacy Policy" : "Kebijakan Privasi"} • AVANA
          </title>
        </Head>
        <Navbar />
        <main>
          <section id="section-1">
            <div>
              <div>
                <h2 className="is-size-4">Privacy and Policy</h2>
                {/* <h2 className='is-size-4'>
                  {lang === 'en'
                    ? 'AVANA will help YOU grow your business!'
                    : 'AVANA dapat membantu mengembangkan bisnes anda!'}
                </h2> */}
                <p>
                  {lang === "en"
                    ? 'This Privacy Policy governs the manner in which The Future Commerce Sdn Bhd (AVANA) collects, uses, maintains and discloses information collected from users (each, a "User") of the www.square.my or www.avana.asia website or AVANA application ("Site"). This privacy policy applies to the Site and all products and services offered by The Future Commerce Sdn Bhd.'
                    : 'This Privacy Policy governs the manner in which The Future Commerce Sdn Bhd (AVANA) collects, uses, maintains and discloses information collected from users (each, a "User") of the www.square.my or www.avana.asia website or AVANA application ("Site"). This privacy policy applies to the Site and all products and services offered by The Future Commerce Sdn Bhd.'}
                </p>

                <h3 className="is-size-6">
                  Personal identification information
                </h3>
                <p>
                  {lang === "en"
                    ? "We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, subscribe to the newsletter and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, phone number."
                    : "We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, subscribe to the newsletter and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, phone number."}
                </p>
                <p>
                  {lang === "en"
                    ? "We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities."
                    : "We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities."}
                </p>

                <h3 className="is-size-6">
                  Non-personal identification information
                </h3>
                <p>
                  {lang === "en"
                    ? "We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information."
                    : "We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information."}
                </p>

                <h3 className="is-size-6">Web browser cookies</h3>
                <p>
                  {lang === "en"
                    ? `Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.`
                    : `Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.`}
                </p>

                <h3 className="is-size-6">How we use collected information</h3>
                <p>
                  {lang === "en"
                    ? `The Future Commerce Sdn Bhd collects and uses Users personal information for the following purposes:`
                    : `The Future Commerce Sdn Bhd collects and uses Users personal information for the following purposes:`}
                </p>
                <ul>
                  <li>
                    <i>To improve customer service</i>
                    <p>
                      Your information helps us to more effectively respond to
                      your customer service requests and support needs.
                    </p>
                  </li>
                  <li>
                    <i>To troubleshoot and customer support</i>
                    <p>
                      We may access the Users’ online store to troubleshoot and
                      resolve issues for the User only when deemed necessary and
                      requested by a member of The Future Commerce Sdn Bhd
                      support team. Access may only be given to the member of
                      the support team once the User has explicitly given
                      consent either verbally or via email or via live chat or
                      in writing. This access and the Users information will not
                      be sold, traded, or rented to others
                    </p>
                  </li>
                  <li>
                    <i>To personalize user experience</i>
                    <p>
                      We may use information in the aggregate to understand how
                      our Users as a group use the services and resources
                      provided on our Site.
                    </p>
                  </li>

                  <li>
                    <i>To improve our Site</i>
                    <p>
                      We continually strive to improve our website offerings
                      based on the information and feedback we receive from you.
                    </p>
                  </li>
                  <li>
                    <i>To process transactions</i>
                    <p>
                      We may use the information Users provide about themselves
                      when placing an order only to provide service to that
                      order. We do not share this information with outside
                      parties except to the extent necessary to provide the
                      service.
                    </p>
                  </li>
                  <li>
                    <i>
                      To administer a content, promotion, survey or other Site
                      feature
                    </i>
                    <p>
                      To send Users information they agreed to receive about
                      topics we think will be of interest to them.
                    </p>
                  </li>
                  <li>
                    <i>To send periodic emails</i>
                    <p>
                      The email address Users provide for order processing, will
                      only be used to send them information and updates
                      pertaining to their order. It may also be used to respond
                      to their inquiries, and/or other requests or questions. If
                      User decides to opt-in to our mailing list, they will
                      receive emails that may include company news, updates,
                      related product or service information, etc. If at any
                      time the User would like to unsubscribe from receiving
                      future emails, we include detailed unsubscribe
                      instructions at the bottom of each email or User may
                      contact us via our Site.
                    </p>
                  </li>
                </ul>

                <h3 className="is-size-6">How we protect your information</h3>
                <p>
                  {lang === "en"
                    ? `We adopt appropriate data collection, storage and processing practices and security measures
to protect against unauthorized access, alteration, disclosure or destruction of your personal
information, username, password, transaction information and data stored on our Site.`
                    : `We adopt appropriate data collection, storage and processing practices and security measures
to protect against unauthorized access, alteration, disclosure or destruction of your personal
information, username, password, transaction information and data stored on our Site.`}
                </p>
                <p>
                  {lang === "en"
                    ? `Sensitive and private data exchange between the Site and its Users happens over a SSL
secured communication channel and is encrypted and protected with digital signatures`
                    : `Sensitive and private data exchange between the Site and its Users happens over a SSL
secured communication channel and is encrypted and protected with digital signatures`}
                </p>

                <h3 className="is-size-6">Sharing your personal information</h3>
                <p>
                  {lang === "en"
                    ? `We do not sell, trade, or rent Users personal identification information to others. We may
share generic aggregated demographic information not linked to any personal identification
information regarding visitors and users with our business partners, trusted affiliates and
advertisers for the purposes outlined above. We may use third party service providers to help
us operate our business and the Site or administer activities on our behalf, such as sending out
newsletters or surveys. We may share your information with these third parties for those
limited purposes provided that you have given us your permission.`
                    : `We do not sell, trade, or rent Users personal identification information to others. We may
share generic aggregated demographic information not linked to any personal identification
information regarding visitors and users with our business partners, trusted affiliates and
advertisers for the purposes outlined above. We may use third party service providers to help
us operate our business and the Site or administer activities on our behalf, such as sending out
newsletters or surveys. We may share your information with these third parties for those
limited purposes provided that you have given us your permission.`}
                </p>

                <h3 className="is-size-6">Third party websites</h3>
                <p>
                  {lang === "en"
                    ? `Users may find advertising or other content on our Site that link to the sites and services of
our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not
control the content or links that appear on these sites and are not responsible for the practices
employed by websites linked to or from our Site. In addition, these sites or services,
including their content and links, may be constantly changing. These sites and services may
have their own privacy policies and customer service policies. Browsing and interaction on
any other website, including websites which have a link to our Site, is subject to that
website's own terms and policies.`
                    : `Users may find advertising or other content on our Site that link to the sites and services of
our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not
control the content or links that appear on these sites and are not responsible for the practices
employed by websites linked to or from our Site. In addition, these sites or services,
including their content and links, may be constantly changing. These sites and services may
have their own privacy policies and customer service policies. Browsing and interaction on
any other website, including websites which have a link to our Site, is subject to that
website's own terms and policies.`}
                </p>

                <h3 className="is-size-6">Changes to this privacy policy</h3>
                <p>
                  {lang === "en"
                    ? `The Future Commerce Sdn Bhd has the discretion to update this privacy policy at any time.
When we do, we will post a notification on the main page of our Site, revise the updated date
at the bottom of this page and send you an email. We encourage Users to frequently check
this page for any changes to stay informed about how we are helping to protect the personal
information we collect. You acknowledge and agree that it is your responsibility to review
this privacy policy periodically and become aware of modifications.`
                    : `The Future Commerce Sdn Bhd has the discretion to update this privacy policy at any time.
When we do, we will post a notification on the main page of our Site, revise the updated date
at the bottom of this page and send you an email. We encourage Users to frequently check
this page for any changes to stay informed about how we are helping to protect the personal
information we collect. You acknowledge and agree that it is your responsibility to review
this privacy policy periodically and become aware of modifications.`}
                </p>

                <h3 className="is-size-6">Your acceptance of these terms</h3>
                <p>
                  {lang === "en"
                    ? `By using this Site, you signify your acceptance of this policy and terms of service. If you do
not agree to this policy, please do not use our Site. Your continued use of the Site following
the posting of changes to this policy will be deemed your acceptance of those changes.`
                    : `By using this Site, you signify your acceptance of this policy and terms of service. If you do
not agree to this policy, please do not use our Site. Your continued use of the Site following
the posting of changes to this policy will be deemed your acceptance of those changes.`}
                </p>

                <h3 className="is-size-6">Contacting us</h3>
                <p>
                  {lang === "en"
                    ? `If you have any questions about this Privacy Policy, the practices of this site, or your
dealings with this site, please contact us at:`
                    : `If you have any questions about this Privacy Policy, the practices of this site, or your
dealings with this site, please contact us at:`}
                </p>

                <h3 className="is-size-6">The Future Commerce Sdn Bhd</h3>
                <dl>
                  <dt>Support hotline:</dt>
                  <dd>014 977 4275</dd>
                </dl>
                <dl>
                  <dt>Email:</dt>
                  <dd>support@avana.asia</dd>
                </dl>
                <dl>
                  <dt>Live chat via website:</dt>
                  <dd>https://www.avana.asia/</dd>
                </dl>
                <dl>
                  <dt>Mailing address:</dt>
                  <dd>
                    B-3-3A PACIFIC PLACE JALAN PJU 1A/4 ARA DAMANSARA 47301
                    PETALING JAYA
                  </dd>
                </dl>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ContainerAnalytic>
  );
}
