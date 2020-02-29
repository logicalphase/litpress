import { CDN_HOST_URL } from './config';

import { html, css, unsafeCSS } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import { SharedStyles } from './style-shared';
import { TypographyStyle } from './style-typography';
import { LayoutStyle } from './style-layout';
import { GridStyle } from './style-grid';

const cdnHost = unsafeCSS(CDN_HOST_URL);

class Terms extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      TypographyStyle,
      LayoutStyle,
      GridStyle,
      css`
        :host {
          display: block;
          padding: 0px;
        }

        /* Smaller than 460 */

        aside {
          display: none;
        }

        li,
        ol {
          font-weight: 400;
        }

        .terms {
          margin-right: 0px;
        }

        .text-headline {
          padding-top: 24px;
        }

        li.childlist {
          margin-left: 16px;
          list-style-type: square;
        }

        h1.paper-font-display2 {
          font-size: 42px;
          line-height: 44px;
          padding-right: 0px;
        }

        h4 {
          padding-top: 10px;
          font-size: 20px !important;
          color: var(--app-secondary-color);
        }

        .content-grid-box h2 {
          text-transform: uppercase;
          font-size: 28px;
          font-weight: 400;
          color: var(--app-secondary-color);
        }
        .content-grid-box h3 {
          text-transform: uppercase;
          font-size: 24px;
          color: var(--app-secondary-color);
        }
        .roman-indent {
          margin-left: 24px;
        }

        @media (min-width: 460px) {
          .privacy-header {
            margin-top: 34px;
          }
          .terms {
            margin-right: 200px;
          }

          h3 {
            font-weight: 400;
          }

          aside {
            display: block;
            margin-top: 30px;
          }

          .sticky {
            display: block;
            position: fixed;
            top: 140px;
            right: 170px;
            padding-bottom: 170px;
          }

          p {
            text-align: left;
          }

          ul.right-side-nav {
            padding-left: 0px;
          }

          td:last-child {
            white-space: nowrap;
          }

          .content-grid-box p {
            text-align: left;
            margin-bottom: 16px;
            max-width: 100%;
            margin-right: 24px;
          }
          .content-grid-box {
            min-height: 40px !important;
            text-align: left;
            background-color: var(--app-reverse-text-color);
            padding: 0px 34px 0px 0px;
            margin-right: 44px;
          }

          .sidebar {
            background-color: var(--app-secondary-section-background-color);
          }
          .sidebar h3 {
            font-weight: 400;
            padding-top: 24px;
          }
          .sidebar .text-uppercase {
            padding-left: 14px;
          }
        }
        @media (max-width: 460px) {
          .terms {
            margin-right: 0px;
          }
        }
      `,
    ];
  }

  render() {
    updateMetadata({
      title: 'Terms of Service Agreement - Logical Phase',
      description: 'Terms and conditions for our site, hosting, and managed services.',
    });

    return html`
      <div class="main-content clearfix">
        <article id="site" class="terms">
          <div class="content-wrapper">
            <section class="content full-bleed-section pad-top-6 pad-bottom-12 home">
              <div class="columns">
                <main class="main fade-in">
                  <header class="privacy-header">
                    <div class="header-wrapper fade-in">
                      <h1 class="paper-font-display2 paper-font-light">
                        Terms of Service Agreement
                      </h1>
                      <p>Effective date: 25 February 2020</p>
                    </div>
                  </header>
                  <section>
                    <div class="content-grid-box">
                      <p>
                        This Terms of Service Agreement (the “Agreement”) is an agreement between
                        you (the “User”) and Logical Phase, LLC. (“Logical Phase”, “we”, or “us”).
                        We provide Users with access to certain Materials (as defined below) to help
                        our customers create and manage websites by providing general and
                        personalized content, website hosting services, communication tools and
                        forums, mobile applications, and ecommerce tools and services (collectively,
                        the “Services”) directly and through the website and associated domains of
                        http://Logical Phase.com (the “Site”). We’ve tried really hard to keep this
                        Agreement as readable and straightforward as possible. If you have
                        suggestions that can help us improve it or any questions about this
                        Agreement, please email us and let us know. This Agreement explains our
                        obligations to you, and your obligations to us. This Agreement is the entire
                        Agreement between us. By using the Site in any way you are agreeing to
                        comply with these terms, our Privacy Policy and any other legal notices or
                        conditions or guidelines posted on the Site.
                      </p>
                    </div>
                  </section>
                  <section id="section-1">
                    <div class="content-grid-box">
                      <h2>1. What We Own</h2>
                      <p>
                        All material and services available on the Site, and all material and
                        services provided by or through Logical Phase, its affiliates, subsidiaries,
                        employees, agents, licensors or other commercial partners including, but not
                        limited to, software, all informational text, software documentation, design
                        of and “look and feel,” layout, photographs, graphics, audio, video,
                        messages, interactive and instant messaging, design and functions, files,
                        documents, images, or other materials, whether publicly posted or privately
                        transmitted as well as all derivative works thereof (collectively, the
                        “Materials”), are owned by us or other parties that have licensed their
                        material or provided services to us, and are protected by copyright,
                        trademark, trade secret and other intellectual property laws. All Logical
                        Phase trademarks and service marks, logos, slogans and taglines are the
                        property of Logical Phase. All other trademarks, service marks, logos,
                        slogans and taglines are the property of their respective owners. Except as
                        otherwise specifically provided herein, nothing should be construed as
                        granting any license or right to use any trademarks, service marks, logos,
                        slogans or taglines displayed on Logical Phase without our express written
                        permission, or the express written permission of such third-party that may
                        own the trademark, service mark, logo, slogan or tagline.
                      </p>
                    </div>
                  </section>
                  <section id="section-2">
                    <div class="content-grid-box">
                      <h2>2. Rights to Use What We Own</h2>
                      <p>
                        Subject to this Agreement, Logical Phase hereby grants you a limited,
                        revocable, non-transferable and non-exclusive license to use the Materials
                        through a user identification reference provided by Logical Phase (“User
                        ID”) to the extent, and only to the extent, necessary to access and use the
                        Services in accordance with the terms of this Agreement. This license does
                        not permit you, and you agree not to: store, copy, reproduce, republish,
                        modify, upload, post, translate, scrape, rent, lease, loan, sell,
                        distribute, transfer, transmit, display, decompile, reverse engineer,
                        reverse assemble, decipher or otherwise attempt to discover any programming
                        code or any source code used in or with the Materials or otherwise
                        distribute in any way the Materials other than as specifically permitted in
                        this Agreement. You may not sell, assign, sublicense, grant a security
                        interest in or otherwise attempt to transfer any right in the Materials,
                        create derivative works based on or in any manner commercially exploit the
                        Materials, in whole or in part, other than as expressly permitted in this
                        Agreement. Any use of the Materials for any purpose other than as
                        specifically permitted herein or without our prior consent or the prior
                        written consent of our licensors, as applicable, is expressly prohibited. We
                        reserve all rights not expressly granted in this Agreement.
                      </p>
                      <p>
                        We will provide you one User ID for each account held by you, thereby
                        permitting you access to the Materials on one computer at a time through the
                        Site. You agree to fully and accurately provide the information requested by
                        us when setting up your accounts and to regularly update such information.
                        Your failure to do so may result in the cancellation of your account and
                        loss of Services. You further agree (a) not to provide User IDs to anyone
                        who is not your employee, and (b) to ensure all individuals permitted to use
                        the User IDs are aware of and have agreed in writing to comply with the
                        terms of this Agreement.
                      </p>
                      <p>
                        As part of the Services, we may provide you a sample website which may be
                        populated with sample content provided by us to illustrate how your final
                        site might look (“Sample Content”). You agree that you will not make this
                        Sample Content publicly available and that you will remove all Sample
                        Content from your site before permitting any third party users to access or
                        view your site.
                      </p>
                    </div>
                  </section>
                  <section id="section-3">
                    <div class="content-grid-box">
                      <h2>3. What You Provide to Us</h2>
                      <p>
                        You are legally responsible for all information, data, text, software,
                        music, sound, photographs, graphics, video, messages or other materials
                        uploaded, posted or stored in connection with your use of the Services
                        (“Content”). Logical Phase is not responsible for your Content. You hereby
                        grant Logical Phase a worldwide, royalty-free, non-exclusive license to host
                        and use the Content in order to provide you with the Services and hereby
                        represent and warrant that you have all the rights necessary to grant us
                        such license. You are responsible for any Content that may be lost or
                        unrecoverable through your use of the Services. You are encouraged to
                        archive your Content regularly and frequently.
                      </p>
                    </div>
                  </section>
                  <section id="section-4">
                    <div class="content-grid-box">
                      <h2>4. Giving Us Access to Other Accounts and Services</h2>
                      <p>
                        Some of our Services may require you to give us access to or require you to
                        provide login information and password information for accounts or services
                        you may have with third party providers. When you provide this information
                        to us or give us access to these third party accounts you agree that you
                        have read all services and written agreements governing such access, login
                        information and passwords and that you have all the necessary serviceual and
                        legal rights to give us such access, login information and passwords.
                      </p>
                    </div>
                  </section>
                  <section id="section-5">
                    <div class="content-grid-box">
                      <h2>5. Comments and Feedback</h2>
                      <p>
                        Any questions, comments, suggestions, ideas, feedback, or other information
                        provided by you to us (“Comments”) are not confidential and you hereby grant
                        us a worldwide, perpetual, irrevocable, royalty-free license to reproduce,
                        display, perform, distribute, publish, modify, edit or otherwise use such
                        Comments as we deem appropriate, for any and all commercial and/or
                        non-commercial purposes, in our sole discretion.
                      </p>
                    </div>
                  </section>
                  <section id="section-6">
                    <div class="content-grid-box">
                      <h2>6. Monitoring What You Provide Us</h2>
                      <p>
                        Logical Phase may, but has no obligation to, monitor Content on the Site or
                        websites created using our Services. We may disclose any information
                        necessary or appropriate to satisfy our legal obligations, protect Logical
                        Phase or its customers, or operate the Services properly. Logical Phase, in
                        its sole discretion, may refuse to post, remove, or require you to remove,
                        any Content, in whole or in part, alleged to be unacceptable, undesirable,
                        inappropriate, or in violation of this Agreement. Logical Phase may, in its
                        discretion, also require you to place all or any portion of the Content
                        behind password protection. If Logical Phase has requested Content be placed
                        or has placed Content behind password protection, you may not publish the
                        password or similar information in any way that limits the effectiveness of
                        the password. If Logical Phase requests that you place any Content behind
                        password protection and you fail to do so promptly, Logical Phase may (a)
                        place such Content behind password protection itself, or (b) immediately
                        terminate this Agreement.
                      </p>
                    </div>
                  </section>
                  <section id="section-7">
                    <div class="content-grid-box">
                      <h2>7. Copyright Complaint Policy</h2>
                      <p>
                        If you believe any Materials infringe your copyrighted works, you may
                        provide a notification of claimed copyright infringement to our Designated
                        Agent for copyright complaints. Please see our Copyright Complaint Policy
                        for further information.
                      </p>
                    </div>
                  </section>
                  <section id="section-8">
                    <div class="content-grid-box">
                      <h2>8. Rules</h2>
                      <p>You agree to all of the following:</p>
                      <p>
                        a. You hereby certify that you are at least 13 years of age. Individuals
                        under the age of 13 are prohibited from using the Services.
                      </p>
                      <p>
                        b. You will ensure the email address provided in your account registration
                        is valid at all times and will keep your contact information accurate and
                        up-to-date.
                      </p>
                      <p>
                        c. You will not use the Services or Materials for any unlawful purposes or
                        to conduct any unlawful activity, including, but not limited to, fraud,
                        embezzlement, money laundering or insider trading.
                      </p>
                      <p>
                        d. You will not use the Services or Materials if you are located in a
                        country embargoed by the U.S., or are on the U.S. Treasury Department’s list
                        of Specially Designated Nationals.
                      </p>
                      <p>
                        e. You will not use the Services or Materials to impersonate another person.
                      </p>
                      <p>
                        f. You will not imply or state, directly or indirectly, that you are
                        affiliated with or endorsed by Logical Phase without our express written
                        permission.
                      </p>
                      <p>
                        g. You may not send unsolicited messages (also known as junk mail or SPAM)
                        to promote any website published on the Site.
                      </p>
                      <p>
                        h. You may not upload, post, email, transmit or otherwise make available or
                        initiate any Content that contains software viruses, worms, Trojan horses or
                        any other computer code, files or programs that interrupt, destroy or limit
                        the functionality of the Services or the Materials or that may impact the
                        ability of any Logical Phase user to access the Services.
                      </p>
                      <p>
                        i. You will not access the Services through automated methods. The Services
                        may only be used or accessed through an electronic device through manual
                        control at all times.
                      </p>
                      <p>
                        j. You may not upload digital files larger than 300MB or audio files larger
                        than 160MB. You also may not build a site with more than 1,000 navigation
                        pages. (If your site requires more than 1,000 pages, consider using a blog
                        or splitting your content into multiple sites, for both readability and
                        rendering reasons.)
                      </p>
                      <p>
                        k. You may not send messages using the Services which do not correctly
                        identify the sender and you may not alter the attribution of origin in
                        electronic mail messages or postings.
                      </p>
                      <p>
                        l. You will not share your password, let anyone else access your account, or
                        do anything that might jeopardize the security of your account. You will not
                        attempt to or actually access the Services or Materials by any means other
                        than through the interfaces provided by Logical Phase.
                      </p>
                      <p>
                        m. You will not attempt to or actually override any security component
                        included in or underlying the Materials or Services.
                      </p>
                      <p>
                        n. You will not attempt or engage in any action that directly or indirectly
                        interferes with the proper working of or places an unreasonable load on
                        Logical Phase’s infrastructure.
                      </p>
                      <p>o. You will not publish Content, or links to Content, that is:</p>
                      <p class="roman-indent">i. Pornographic, sexually explicit, or violent.</p>
                      <p class="roman-indent">
                        ii. Illegal (including stolen copyrighted material and material that
                        infringes or has the potential to infringe the intellectual property rights
                        of another).
                      </p>
                      <p class="roman-indent">
                        iii. Reasonably likely to cause harm, or that could be reasonably considered
                        as slanderous or libelous.
                      </p>
                      <p class="roman-indent">iv. Breaches another’s privacy.</p>
                      <p>
                        p. You will not publish Content that is spam, is machine- or
                        randomly-generated, and/or contains unethical or unwanted commercial content
                        designed to drive traffic to third party sites or boost the search engine
                        rankings of third party sites, or to further unlawful acts (such as
                        phishing), or mislead recipients as to the source of the material (such as
                        spoofing).
                      </p>
                      <p>
                        q. You verify that your country of residence is the same as your billing
                        address.
                      </p>
                      <p>
                        Logical Phase may determine in its sole discretion whether or not an account
                        is in violation of any of these policies. Violation of any of these policies
                        may result in user information tracking with such information being stored
                        to identify the offending user. Offending users may be permanently
                        restricted from holding an account or using the Services. If Logical Phase
                        reasonably determines that your account is being used for illegal or
                        fraudulent activity then your account may be immediately terminated and your
                        financial data erased. We may also report you to law enforcement officials
                        in the appropriate jurisdictions.
                      </p>
                    </div>
                  </section>
                  <section id="section-9">
                    <div class="content-grid-box">
                      <h2>9. Selling Through Logical Phase</h2>
                      <p>
                        Some of our Services and Materials may offer you the opportunity to sell or
                        purchase goods and services through sites hosted or designed by Logical
                        Phase (such goods and services, “Commercial Products”). We are merely
                        providing the platform for buyers and sellers to negotiate and complete
                        transactions for these Commercial Products. When a buyer purchases
                        Commercial Products, payments will be processed through our third party
                        payment service provider. Buyers of Commercial Products will be provided a
                        notice when entering their payment information directing them to the third
                        party payment service provider’s terms of service and privacy policy. These
                        payment services are governed solely by the third party provider’s terms of
                        service and privacy policy. We are not responsible for the actions of these
                        third party service providers. In addition to the other rules and
                        requirements described in this Agreement, you must follow the rules listed
                        below when offering, selling or purchasing Commercial Products.
                      </p>
                      <p>
                        a. You may not offer or sell illegal or potentially illegal Commercial
                        Products, including those that are counterfeited, stolen or fraudulent.
                        Commercial Products sold using the Services must comply with all applicable
                        laws, including Commercial Products sold to individuals outside of the U.S.
                        Items identified as “not for distribution within the United States” may not
                        be sold using the Services.
                      </p>
                      <p>
                        b. You may not offer or sell Commercial Products that infringe or have the
                        potential to infringe the intellectual property rights or proprietary rights
                        of another.
                      </p>
                      <p>
                        c. You may not offer or sell any Commercial Products that we, in our
                        discretion, determine are inappropriate, offensive, pornographic, sexually
                        explicit or violent.
                      </p>
                      <p>
                        d. You may not offer or sell any Commercial Products that are manufactured
                        as, or primarily intended to be used as, weapons, including firearms,
                        restricted devices or ammunition. We reserve the right to determine, in our
                        sole discretion, whether Commercial Products constitutes “weapons” for
                        purposes of this Agreement.
                      </p>
                      <p>
                        e. You may not offer or sell any Commercial Products that infringe upon or
                        have the potential to infringe upon an individual’s privacy or that may be
                        libelous, slanderous or otherwise defamatory.
                      </p>
                      <p>
                        f. You may not use images or names of any third party (including notable
                        personalities or celebrities) when offering or selling Commercial Products
                        without first obtaining that third party’s permission.
                      </p>
                      <p>
                        Without limiting anything else in this Agreement, we may immediately remove
                        Content related to the offer or sale of Commercial Products in violation of
                        this Agreement. If you sell a Commercial Product using our Services, then
                        you must, upon our request, (i) use commercially reasonable efforts to stop
                        the delivery of the Commercial Products to the buyer, or (ii) pay a refund
                        for such Commercial Products to the buyer.
                      </p>
                    </div>
                  </section>
                  <section id="section-10">
                    <div class="content-grid-box">
                      <h2>10. Fees</h2>
                      <p>
                        a. You may agree to a one (1) month, or twelve (12) month service agreement
                        with Logical Phase.
                      </p>
                      <p>
                        b. You can opt to upgrade or downgrade your service agreement to any other
                        service agreement that Logical Phase is currently offering for sale at any
                        time during your service term. In the event of a service downgrade, a
                        discount credit will be issued to your Logical Phase account for the
                        difference in the cost of the two services over the remainder of your
                        original service term. This credit can be applied to future months of
                        service with Logical Phase, and is in no way transferable to a cash refund.
                      </p>
                      <p>
                        c. At the end of the service term, your service will automatically renew for
                        an additional service term until explicitly cancelled by you. Cancellation
                        must be issued via your website manager interface or via Logical Phase’s
                        support addresses. Any cancellation issued via your website manager
                        interface must be done at least fifteen (15) days prior to the end of the
                        service term. Any cancellation not issued via our support email address
                        (support@Logical Phase.com) must be done fifteen (15) days prior to the end
                        of the service term to allow for adequate processing time.
                      </p>
                      <p>
                        d. Only services and features clearly indicated as “free” or “no charge” are
                        free or without charge. It is not the responsibility of Logical Phase to
                        provide free support for you in the use and operation of Logical Phase. All
                        other applications, features, functionality and support provided by Logical
                        Phase and its partners are provided for the fees described for each service
                        on the Site (“Fees”) and you are liable for such Fees.
                      </p>
                      <p>
                        e. If you registered for a trial use of the Services (“Trial Period”), you
                        must decide to purchase the Services within the Trial Period in order to
                        retain any Content that you have posted or uploaded during the Trial Period.
                        If you do not purchase the Services by the end of the Trial Period, your
                        Content will no longer be available to you. To be very clear, after using
                        the Services during the Trial Period, if you decide not to purchase the full
                        version of the Services, you will not be able to access or retrieve any of
                        the data you added/created during the Trial Period
                      </p>
                      <p>
                        f. If you purchase any Services that we offer for a Fee, you agree to
                        Logical Phase, or our third party service providers, storing your payment
                        card information. You expressly agree that we are authorized to charge you
                        (i) a monthly Fee for any applicable Services billed on a monthly basis,
                        (ii) any other Fees for Services you may purchase, and (iii) any applicable
                        taxes in connection with your use of the Services to the payment card you
                        provide and to reimburse us for all collection costs and interest for any
                        overdue amounts. If the payment card you provide expires and you do not
                        provide new payment card information or cancel your account, you authorize
                        us to continue billing you and you agree to remain responsible for any
                        uncollected Fees.
                      </p>
                      <p>
                        g. Your services may be interrupted/suspended if you fail to make payments
                        within the due date for services rendered. If you are more than three days
                        late, you will incur an additional late fee of $25.00US and may also incur
                        additional fee of up to $75.00 for configuring and restarting said services.
                      </p>
                    </div>
                  </section>
                  <section id="section-11">
                    <div class="content-grid-box">
                      <h2>11. Taxes</h2>
                      <p>
                        You take full responsibility for all taxes and fees of any nature associated
                        with Services, including any sales tax related to the purchase or sale of
                        Commercial Products. Except for collecting EU VAT and remitting it to the
                        EU, Logical Phase shall not be liable for any taxes or other fees to be paid
                        in accordance with or related to the Commercial Products. When purchasing or
                        selling Commercial Products, it is your responsibility to determine whether
                        or not sales taxes apply to a transaction and to collect, report and remit
                        the correct amounts to the appropriate authority. Any tools provided as
                        Materials or in connection with the Services indicating estimated taxes due
                        are for illustration purposes only. You take full responsibility for all
                        taxes and fees of any nature associated with Services, including any sales
                        tax related to the purchase or sale of Commercial Products. Logical Phase is
                        required to collect Value Added Tax of the European Union (“EU VAT”) from
                        non-taxable EU customers, therefore, EU VAT shall be charged to these
                        customers on top of our Fees
                      </p>
                    </div>
                  </section>
                  <section id="section-12">
                    <div class="content-grid-box">
                      <h2>12. Termination</h2>
                      <p>a. Services may be terminated by us, without cause, at any time.</p>
                      <p>
                        b. Services may be terminated by you, without cause, by following the
                        cancellation procedures set forth in Section 10(c).
                      </p>
                      <p>
                        c. Logical Phase may terminate Services at any time, without penalty and
                        without notice, if you fail to comply with any of the terms of this
                        Agreement or the intellectual property protections applicable to these
                        Services.
                      </p>
                      <p>
                        d. Notice of termination of Services by Logical Phase may be sent to the
                        contact e-mail associated with your account. Upon termination, Logical Phase
                        has the right to delete all data, files, or other information that is stored
                        in your account.
                      </p>
                    </div>
                  </section>
                  <section id="section-13">
                    <div class="content-grid-box">
                      <h2>13. ERRORS AND ACCESS TO SITE</h2>
                      <p>
                        YOU ARE SOLELY RESPONSIBLE FOR THE ACCURACY AND APPROPRIATENESS OF ALL DATA
                        AND CONTENT WITHIN YOUR WEBSITE; INCLUDING SALES TAX CALCULATIONS, PRODUCT
                        PRICING, AND PRODUCT DESCRIPTIONS, SHIPPING CHARGES, CONTACT INFORMATION,
                        EMAIL COMMUNICATIONS, AND ELECTRONIC PAYMENT PROCESSING. Logical Phase WILL
                        NOT BE HELD RESPONSIBLE FOR INACCURATE INFORMATION AND ANY POTENTIAL DAMAGES
                        CAUSED BY SUCH INACCURACIES. YOU FURTHER UNDERSTAND THAT Logical Phase MAY
                        NOT MAINTAIN COPIES OF FILES OR DOCUMENTS THAT ARE SENT BY YOU AND THAT YOU
                        ARE SOLELY RESPONSIBLE FOR BACKING UP THIS DATA.
                      </p>
                    </div>
                  </section>
                  <section id="section-14">
                    <div class="content-grid-box">
                      <h2>
                        14. Third Party Websites; Third Party Services; No Implied Endorsement
                      </h2>
                      <p>
                        The Site may contain links to other web sites owned by third parties (“Third
                        Party Sites”). Please note that when you click on any of these links, you
                        are entering another website for which we have no responsibility or control.
                        You may also have the ability through the Site to login to accounts that you
                        have for services provided by third parties (“Third Party Services”) or to
                        link accounts for Third Party Services to your Logical Phase account.
                        Logical Phase is not responsible for any activity occurring within Third
                        Party Services, even if logged in through or linked to a Logical Phase
                        account.
                      </p>
                      <p>
                        You agree that we shall not be responsible for any loss or damage of any
                        sort incurred as a result of your use of any Third Party Sites and/or Third
                        Party Services, whether or not you were linked to or directed to a Third
                        Party Site or Third Party Service through the Site. You acknowledge that
                        Third Party Sites and Third Party Services may be subject to the applicable
                        third party provider’s terms of service, and you are solely responsible for
                        reviewing and complying with any such terms of service. In no event shall
                        any reference on the Site to any third party, third party website or third
                        party product or service be construed as an approval or endorsement by us of
                        that third party, third party website or of any product or service provided
                        by a third party.
                      </p>
                    </div>
                  </section>
                  <section id="section-15">
                    <div class="content-grid-box">
                      <h2>15. DISCLAIMER OF WARRANTY</h2>
                      <p>
                        THE SITE, SERVICES AND MATERIALS ARE PROVIDED “AS IS,” “AS AVAILABLE,” “WITH
                        ALL FAULTS” AND WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO THE
                        FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, Logical Phase AND ITS
                        LICENSORS DISCLAIM ALL WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
                        INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OF TITLE,
                        MERCHANTIBILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
                        WITHOUT LIMITING THE FOREGOING, NEITHER Logical Phase NOR ITS LICENSORS
                        WARRANT THAT ACCESS TO THE SITE, THE MATERIALS AND/OR THE SERVICES AVAILABLE
                        ON OR THROUGH THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT DEFECTS,
                        IF ANY, WILL BE CORRECTED; NOR DOES Logical Phase OR ITS LICENSORS MAKE ANY
                        REPRESENTATIONS ABOUT THE ACCURACY, RELIABILITY, CURRENCY, QUALITY,
                        COMPLETENESS, USEFULNESS, PERFORMANCE, SECURITY, LEGALITY OR SUITABILITY OF
                        THE SERVICES, THE MATERIALS OR THE SITE. YOU EXPRESSLY AGREE THAT YOUR USE
                        OF THE SITE AND YOUR RELIANCE UPON THE SERVICES AND/OR THE MATERIALS IS AT
                        YOUR SOLE RISK. IN ADDITION, Logical Phase IS NOT RESPONSIBLE, AND MAKES NO
                        REPRESENTATIONS OR WARRANTIES FOR THE DELIVERY OF ANY MESSAGES (SUCH AS
                        EMAILS, POSTING OF ANSWERS OR TRANSMISSION OF ANY OTHER USER GENERATED
                        CONTENT) SENT THROUGH THE SITE TO ANYONE.
                      </p>
                      <p>
                        IN ADDITION, YOU ACKNOWLEDGE AND AGREE THAT ANY DATA, INFORMATION, CONTENT
                        OR MATERIALS CONTAINED IN OR MADE AVAILABLE IN CONNECTION WITH THE SERVICES
                        IS NOT INTENDED AS A SUBSTITUTE FOR, THE KNOWLEDGE, EXPERTISE, SKILL AND
                        JUDGMENT TAX, LEGAL OR OTHER PROFESSIONALS. THE SERVICES DO NOT PROVIDE TAX
                        OR LEGAL ADVICE. YOU ARE RESPONSIBLE FOR OBTAINING SUCH ADVICE.
                      </p>
                      <p>
                        FURTHER, Logical Phase AND ITS LICENSORS MAKE NO REPRESENTATION OR
                        WARRANTIES THAT THE SERVICES OR THE MATERIALS OR THE SITE ARE APPROPRIATE OR
                        AVAILABLE FOR USE IN ALL GEOGRAPHIC LOCATIONS. IF YOU USE THE SITE, THE
                        SERVICES OR THE MATERIALS OUTSIDE THE UNITED STATES OF AMERICA, YOU ARE
                        SOLELY RESPONSIBLE FOR COMPLIANCE WITH ALL APPLICABLE LAWS, INCLUDING
                        WITHOUT LIMITATION EXPORT AND IMPORT REGULATIONS OF OTHER COUNTRIES. NEITHER
                        Logical Phase NOR ANY THIRD PARTY PROVIDERS, PARTNERS OR AFFILIATES WARRANT
                        THAT THE SITE,ITS SERVERS THE MATERIALS OR THE SERVICES OR ANY E-MAIL SENT
                        FROM THE SITE OR ANY THIRD PARTY PROVIDERS, PARTNERS OR AFFILIATES ARE FREE
                        OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                      </p>
                      <p>
                        THIS AGREEMENT APPLIES SOLELY TO THE SITE. AS PART OF THE SERVICES PROVIDED
                        TO OTHER Logical Phase USERS, WE HOST WEBSITES FOR CERTAIN THIRD PARTIES
                        (“THIRD PARTY SITES”). THIRD PARTY SITES INCLUDE CONTENT GENERATED BY THIRD
                        PARTIES AND ARE NOT UNDER THE MANAGEMENT AND CONTROL OF Logical Phase.
                        Logical Phase IS NOT RESPONSIBLE FOR SUCH THIRD PARTY SITES, INCLUDING
                        WITHOUT LIMITATION, THE ACCURACY, SUFFICIENCY, CORRECTNESS, RELIABILITY,
                        VERACITY, COMPLETENESS OR TIMELINESS THEREOF, ANY LINK CONTAINED THEREIN, OR
                        ANY CHANGES OR UPDATES THERETO, OR ANY GOODS OR SERVICES SOLD THEREON. YOUR
                        ACCESS OR USE OF ANY THIRD PARTY SITE IS GOVERNED BY THE TERMS APPLICABLE TO
                        SUCH THIRD PARTY SITE. THE HOSTING OF ANY THIRD PARTY SITE BY Logical Phase
                        DOES NOT IMPLY AN ENDORSEMENT THEREOF BY Logical Phase, OR OF THE PROVIDER
                        OF SUCH CONTENT OR SERVICES, OF ANY THIRD PARTY SITE.
                      </p>
                    </div>
                  </section>
                  <section id="section-16">
                    <div class="content-grid-box">
                      <h2>16. LIMITATION OF LIABILITY</h2>
                      <p>
                        WE ARE NOT LIABLE TO YOU OR ANY OTHER PERSON FOR DAMAGES OF ANY KIND,
                        INCLUDING WITHOUT LIMITATION ANY PUNITIVE, EXEMPLARY, CONSEQUENTIAL,
                        INCIDENTAL, INDIRECT OR SPECIAL DAMAGES (INCLUDING, WITHOUT LIMITATION, ANY
                        PERSONAL INJURY, LOST PROFITS, BUSINESS INTERRUPTION, LOSS OF PROGRAMS OR
                        OTHER DATA ON YOUR COMPUTER OR OTHERWISE) ARISING FROM OR IN CONNECTION WITH
                        USE OF THE SITE, THE SERVICES, THE MATERIALS, YOUR CONTENT, THE COMMERCIAL
                        PRODUCTS OR ANY THIRD PARTY USER GENERATED CONTENT AVAILABLE ON OR THROUGH
                        THE SITE, WHETHER UNDER A THEORY OF BREACH OF CONTRACT, NEGLIGENCE, STRICT
                        LIABILITY, MALPRACTICE OR OTHERWISE, EVEN IF Logical Phase HAS BEEN ADVISED
                        OF THE POSSIBILITY OF SUCH DAMAGES. YOU HEREBY RELEASE Logical Phase AND
                        HOLD Logical Phase AND ITS PARENTS, SUBSIDIARIES, AFFILIATES, LICENSORS, AND
                        THEIR OFFICERS, DIRECTORS, TRUSTEES, AFFILIATES, SUBCONTRACTORS, AGENTS AND
                        EMPLOYEES, HARMLESS FROM ANY AND ALL CLAIMS, DEMANDS, AND DAMAGES OF EVERY
                        KIND AND NATURE (INCLUDING, WITHOUT LIMITATION, ACTUAL, SPECIAL, INCIDENTAL
                        AND CONSEQUENTIAL), KNOWN AND UNKNOWN, SUSPECTED AND UNSUSPECTED, DISCLOSED
                        AND UNDISCLOSED, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF THE
                        SERVICES, MATERIALS, SITE, YOUR CONTENT, COMMERCIAL PRODUCTS OR ANY THIRD
                        PARTY USER GENERATED CONTENT AVAILABLE ON OR THROUGHTHE SITE. YOU HEREBY
                        WAIVE THE PROVISIONS OF ANY STATE OR LOCAL LAW LIMITING OR PROHIBITING A
                        GENERAL RELEASE.
                      </p>
                    </div>
                  </section>
                  <section id="section-17">
                    <div class="content-grid-box">
                      <h2>17. EXCLUSIVE REMEDY</h2>
                      <p>
                        IN THE EVENT OF ANY PROBLEM WITH THE SITE, THE SERVICES, THE MATERIALS, YOU
                        AGREE THAT YOUR SOLE AND EXCLUSIVE REMEDY IS TO CEASE USING THE SITE, THE
                        SERVICES AND THE MATERIALS. UNDER NO CIRCUMSTANCES SHALL Logical Phase, ITS
                        AFFILIATES, OR LICENSORS BE LIABLE IN ANY WAY FOR YOUR USE OF THE SITE, THE
                        SERVICES, THE MATERIALS, YOUR CONTENT, THE COMMERCIAL PRODUCTS OR THIRD
                        PARTY USER GENERATED CONTENT AVAILABLE ON OR THROUGH THE SITE, INCLUDING,
                        BUT NOT LIMITED TO, ANY ERRORS OR OMISSIONS, ANY INFRINGEMENT OF THE
                        INTELLECTUAL PROPERTY RIGHTS OR OTHER RIGHTS OF THIRD PARTIES, OR FOR ANY
                        LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF, OR RELATED TO, THE USE
                        OF THE SITE, THE SERVICES, THE MATERIALS, YOUR CONTENT, THE COMMERCIAL
                        PRODUCTS OR ANY THIRD PARTY USER GENERATED CONTENT AVAILABLE ON OR THROUGH
                        THE SITE. Certain states and/or jurisdictions do not allow the exclusion of
                        implied warranties or limitation of liability for incidental or
                        consequential damages, so the exclusions set forth above may not apply to
                        you.
                      </p>
                    </div>
                  </section>
                  <section id="section-18">
                    <div class="content-grid-box">
                      <h2>18. Termination/Exclusion</h2>
                      <p>
                        We may modify, replace, refuse access to, suspend or discontinue the
                        Services, partially or entirely, or add, change and modify prices for all or
                        part of the Services for you or for all our users at any time and in our
                        sole discretion. All of these changes shall be effective upon their posting
                        on the Site or by direct communication to you unless otherwise noted. We
                        further reserve the right to withhold, remove and or discard any content
                        available as part of your account, with or without notice if deemed by us to
                        be contrary to this Agreement. For avoidance of doubt, Logical Phase has no
                        obligation to store, maintain or provide you a copy of any content that you
                        or other users provide when using the Services.
                      </p>
                    </div>
                  </section>
                  <section id="section-19">
                    <div class="content-grid-box">
                      <h2>19. Indemnification</h2>
                      <p>
                        You agree to indemnify, hold harmless, and defend Logical Phase and its
                        licencors, suppliers, officers, directors, employees, agents, affiliates,
                        subsidiaries, successors and assigns (collectively “Indemnified Parties”)
                        from and against any and all liability, loss, claim, damages, expense, or
                        costs (including but not limited to attorneys’ fees), incurred by or made
                        against the Indemnified Parties in connection with any claim arising from or
                        related to (i) your use (or anyone using your account’s) use of the
                        Services, the Site or the Materials, (ii) your Content, or (iii) any
                        Commercial Products you offer on or through the Site or using our Services.
                        This includes, but is not limited to, any breach or violation of this
                        Agreement by you or anyone utilizing your account. You agree to fully
                        cooperate at your expense as reasonably required by an Indemnified Party.
                        Each Indemnified Party may, at its election, assume the defense and control
                        of any matter for which it is indemnified . You shall not settle any matter
                        involving an Indemnified Party without the consent of the applicable
                        Indemnified Party.
                      </p>
                    </div>
                  </section>
                  <section id="section-20">
                    <div class="content-grid-box">
                      <h2>20. Amendments</h2>
                      <p>
                        We reserve the right, in our sole discretion, to modify or replace any part
                        of this Agreement at any time, effective upon the date of the change. In the
                        event of any such change, we will post a notice on the Site that we have
                        changed this Agreement. If you have a Logical Phase account, we may (but are
                        not required to) provide you with notice via the email address that we have
                        on file for you that we have changed this Agreement. You and we both
                        understand that sometimes there are issues with email communication. We are
                        not responsible if any email notice gets caught by your SPAM filter and you
                        do not see it, if you have given us the wrong email address (or failed to
                        update your address) or if there are other communications issues that
                        prevent email from reaching you. Therefore, we encourage you to frequently
                        visit this page periodically to monitor any changes. Your continued use of
                        or access to the Services following the posting of any changes to this
                        Agreement constitutes acceptance of those changes.
                      </p>
                      <p>
                        We may also, in the future, offer new services and/or features through Site
                        (including the release of new tools and resources). For the avoidance of
                        doubt, such new features and/or services shall be subject to the terms and
                        conditions of this Agreement.
                      </p>
                    </div>
                  </section>
                  <section id="section-21">
                    <div class="content-grid-box">
                      <h2>21. Disputes</h2>
                      <p>
                        The formation, interpretation and performance of this Agreement and any
                        disputes arising out of it shall be governed by the substantive and
                        procedural laws of the state of Minneapolis&nbsp;without regard to its rules
                        on conflicts or choice of law and, to the extent applicable, the laws of the
                        United States of America. The exclusive jurisdiction and venue for actions
                        related to the subject matter hereof shall be the state and federal courts
                        located in Minneapolis, Minnesota, and you hereby submit to the personal
                        jurisdiction of such courts. You hereby waive any right to a jury trial in
                        any proceeding arising out of or related to this Agreement. The United
                        Nations Convention on Contracts for the International Sale of Goods does not
                        apply to this Agreement.
                      </p>
                    </div>
                  </section>
                  <section id="section-22">
                    <div class="content-grid-box">
                      <h2>22. Privacy</h2>
                      <p>
                        We encourage you to read the <a href="/privacy">Privacy Policy</a>, and to
                        use the information it contains to help you make informed decisions. Please
                        also note that certain information, statements, data and content (such as
                        photographs) which you post to the Site are likely to reveal your gender,
                        ethnic origin, nationality, age, and/or other personal information about
                        you. You acknowledge and agree that your submission of such information is
                        voluntary on your part. Further, you acknowledge, consent and agree that we
                        may access, preserve, and disclose your registration and any other
                        information you provide if required to do so by law or in a good faith
                        belief that such access preservation or disclosure is reasonably necessary
                        in our opinion Disclosures of user information to third parties are further
                        addressed in the <a href="/privacy">Privacy Policy</a>.
                      </p>
                    </div>
                  </section>
                  <section id="section-23">
                    <div class="content-grid-box">
                      <h2>23. Other</h2>
                      <p>
                        You acknowledge that a violation or attempted violation of any of this
                        Agreement will cause such damage to Logical Phase as will be irreparable,
                        the exact amount of which would be impossible to ascertain and for which
                        there will be no adequate remedy at law. Accordingly, you agree that Logical
                        Phase shall be entitled as a matter of right to an injunction issued by any
                        court of competent jurisdiction, restraining such violation or attempted
                        violation of these terms and conditions by you, or your affiliates,
                        partners, or agents, as well as to recover from you any and all costs and
                        expenses sustained or incurred by Logical Phase in obtaining such an
                        injunction, including, without limitation, reasonable attorney’s fees. You
                        agree that no bond or other security shall be required in connection with
                        such injunction.
                      </p>
                      <p>
                        In no event shall you be entitled to rescission, injunctive or other
                        equitable relief, or to enjoin or restrain the operation of Logical Phase,
                        the exploitation of any advertising or other materials issued in connection
                        therewith, or the exploitation of the Site or any content used or displayed
                        through the Site.
                      </p>
                    </div>
                  </section>
                  <section id="section-24">
                    <div class="content-grid-box">
                      <h2>24. Terms You Must Post on Your Site</h2>
                      <p>
                        You are responsible for drafting the terms of use and privacy policy for any
                        website hosted by us for you as part of the Services (your “Hosted Site”).
                        However, the terms of use for your Hosted Site must designate us a third
                        party beneficiary and must contain intellectual property, limitations of
                        liability, limitations of remedy, disclaimers of warranty and
                        indemnification provisions each for the benefit of Logical Phase which are
                        at least as favorable to Logical Phase as contained in this Agreement. You
                        are also responsible for drafting the privacy policy for your Hosted Site.
                        Your Hosted Site’s privacy policy must contain terms that are at least as
                        protective of a user’s privacy as those contained in this Agreement.
                      </p>
                      <p>
                        You agree to indemnify and hold harmless Logical Phase and its licencors,
                        suppliers, officers, directors, employees, agents, affiliates, subsidiaries,
                        successors and assigns from and against any and all liability, loss, claim,
                        damages, expense or cost (including but not limited to attorneys’ fees),
                        arising from or related to the use of, access to, interaction with or
                        reliance upon, your Hosted Site, including the purchase, sale or other
                        distribution of Commercial Products.
                      </p>
                    </div>
                  </section>
                  <section id="section-25">
                    <div class="content-grid-box">
                      <h2>25. Miscellaneous</h2>
                      <p>
                        a. If any portion of this Agreement is found to be unenforceable, the
                        remaining portion will remain in full force and effect.
                      </p>
                      <p>
                        b. If we fail to enforce any of this Agreement, it will not be considered a
                        waiver.
                      </p>
                      <p>
                        c. Any amendment to or waiver of this Agreement must be made in writing and
                        signed by us.
                      </p>
                      <p>
                        d. You will not transfer any of your rights or obligations under this
                        Agreement to anyone else without our prior written consent.
                      </p>
                      <p>
                        e. All of our rights and obligations under this Agreement are freely
                        assignable by us in connection with a merger, acquisition, or sale of
                        assets, or by operation of law or otherwise.
                      </p>
                      <p>f. This Agreement does not confer any third party beneficiary rights.</p>
                      <p>
                        g. A printed version of this Agreement and of any related notice given in
                        electronic form shall be admissible in judicial or administrative
                        proceedings based upon or relating to this Agreement to the same extent and
                        subject to the same conditions as other business documents and records
                        originally generated and maintained in printed form.
                      </p>
                    </div>
                  </section>
                </main>
              </div>
            </section>
          </div>
        </article>
      </div>
    `;
  }
}
window.customElements.define('lp-terms', Terms);
