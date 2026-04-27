import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & Client Agreement | Serafim Dog Training",
  description:
    "Terms of Service and Client Agreement for Serafim Dog Training LLC. Governing law: Texas.",
  alternates: {
    canonical: "https://www.serafimdogtraining.com/terms-of-service",
  },
  robots: { index: false },
};

function SectionHead({ num, title }: { num?: string; title: string }) {
  return (
    <div className="mt-12 mb-1">
      <h2 className="font-display text-xl text-forest font-semibold uppercase tracking-wide">
        {num ? `${num}. ${title}` : title}
      </h2>
      <div className="h-px bg-gold mt-3 mb-5" />
    </div>
  );
}

function SubHead({ title }: { title: string }) {
  return (
    <h3 className="font-semibold text-forest mt-6 mb-2 text-sm">{title}</h3>
  );
}

function Notice({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 border-l-4 border-forest border-t border-r border-b border-forest/20 px-5 py-4 my-4 text-sm text-forest font-medium leading-relaxed">
      {children}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 my-3 ml-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 items-start text-sm">
          <span className="text-gold shrink-0 mt-0.5 font-bold">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const p = "text-sm font-light leading-relaxed text-charcoal-light my-3";

export default function TermsOfServicePage() {
  return (
    <section className="bg-offwhite min-h-screen pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <p className="text-xs uppercase tracking-[0.22em] text-gold mb-4">Legal</p>
        <h1 className="font-display text-4xl md:text-5xl text-forest font-medium mb-1">
          Terms of Service & Client Agreement
        </h1>
        <p className="text-sm text-charcoal-muted mb-6">
          Serafim Dog Training LLC · Last Updated: April 2026
        </p>

        <Notice>
          IMPORTANT: This Agreement governs your relationship with Serafim Dog Training LLC. By submitting payment or engaging our services, you confirm that you have read and agree to these terms. A separate Liability Waiver, Release of Claims &amp; Assumption of Risk must also be signed before services begin. If you do not agree to these terms, do not submit payment and do not engage our services.
        </Notice>

        <div className="h-px bg-gold my-8" />

        {/* 1 */}
        <SectionHead num="1" title="Contracting Party" />
        <p className={p}>
          The party providing services under this Agreement is Serafim Dog Training LLC, a Texas limited liability company (&ldquo;Company&rdquo;). The Company also does business under the name &ldquo;Serafim Dog Training.&rdquo; All contracts, invoices, and receipts will reflect this entity name. If Arthur Serafim signs or performs services on behalf of Company, he does so solely in his representative capacity as an owner/member of the LLC, unless this Agreement expressly provides otherwise.
        </p>
        <p className={p}>
          Clients contract with the Company as an entity. References to &ldquo;trainer,&rdquo; &ldquo;Arthur,&rdquo; or &ldquo;Serafim&rdquo; in marketing materials or conversations do not alter the contracting party.
        </p>

        {/* 2 */}
        <SectionHead num="2" title="Services Provided" />
        <p className={p}>Company provides professional dog training services and educational content. Services may include:</p>
        <Bullets items={[
          "In-person private training sessions in the Austin, TX metro area",
          "Virtual training sessions via video call",
          "Structured Dog Package: 3 sessions",
          "Behavioral Correction Package: 6 sessions",
          "Handler Package: 12 sessions",
          "Board and Train programs (governed by a separate Board and Train Addendum, which must be signed before any overnight custody or off-premises training begins)",
          "Behavioral correction and rehabilitation programs",
          "Service dog development and task training (non-certifying; see Section 11)",
          "Online community membership and educational materials",
        ]} />
        <p className={p}>
          A program-specific order form, invoice, or service schedule will accompany each purchase and will specify the program name, included sessions, delivery mode, support access, expiration, and community access terms. If a conflict exists between this Agreement and a program-specific document, the program-specific document controls.
        </p>

        {/* 3 */}
        <SectionHead num="3" title="Payment Terms" />
        <SubHead title="3.1  Payment Authorization" />
        <p className={p}>All payments are processed through Stripe or other authorized payment processors. By submitting payment, Client authorizes Company to charge the payment method provided for the agreed-upon amount.</p>

        <SubHead title="3.2  Program Commitment" />
        <p className={p}>Client acknowledges that Client is purchasing a defined training program for a total program price. Any installment schedule offered is solely a payment convenience, not a subscription, and does not create a right to cancel future payments. Client remains obligated to pay the full agreed-upon program fee regardless of whether Client continues using the services, except as provided in Section 4.</p>

        <SubHead title="3.3  Default, Cure Period & Acceleration" />
        <p className={p}>If any scheduled payment is declined, reversed, or remains unpaid for more than five (5) calendar days after written notice from Company:</p>
        <Bullets items={[
          "Company may suspend future services until the account is cured.",
          "If the default is not cured within ten (10) calendar days after written notice, Company may declare the remaining unpaid program balance immediately due and payable.",
          "Any accelerated balance will be calculated as the full program price less any amounts Company elects, in its discretion, to credit for sessions not yet made available to Client.",
        ]} />
        <p className={p}>Acceleration is a remedy for Client&apos;s breach, not a penalty. Because Client purchased a defined program commitment—not per-session services—the full program fee is earned by Company as consideration for reserving time, planning, and committing resources, subject to the earned-fee schedule in Section 4.</p>

        <SubHead title="3.4  Failed Payments & Administrative Fee" />
        <p className={p}>Failed, returned, or reversed payments may incur a $35 administrative fee per occurrence. If a payment method on file is canceled, declined, or otherwise becomes invalid, Client must provide an updated method within five (5) business days of notification. Failure to do so constitutes a material breach and triggers the default provisions in Section 3.3.</p>

        <SubHead title="3.5  Subscription Services" />
        <p className={p}>Online community memberships and other recurring subscription services automatically renew on the same billing day each month until canceled. Client may cancel at any time through account settings or by emailing arthur@serafimdogtraining.com. Cancellation takes effect at the end of the current billing period; no partial-month refunds are issued.</p>

        <SubHead title="3.6  Collections" />
        <p className={p}>Client agrees to be responsible for all costs of collection on past-due amounts, including reasonable attorney&apos;s fees and court costs as permitted by Texas Civil Practice and Remedies Code Chapter 38.</p>

        {/* 4 */}
        <SectionHead num="4" title="Cancellation & Refund Policy" />
        <SubHead title="4.1  Earned-Fee Schedule" />
        <p className={p}>Program fees are earned by Company on the following schedule:</p>
        <Bullets items={[
          "Upon booking and intake completion: 25% of program fee earned.",
          "Upon completion of first session: an additional 25% earned (50% total).",
          "Upon completion of 50% of scheduled sessions: an additional 25% earned (75% total).",
          "Upon completion of program or 75% of scheduled sessions: 100% of program fee earned.",
        ]} />

        <SubHead title="4.2  Client Cancellation" />
        <p className={p}>If Client cancels services before program completion, Company will retain only the portion of the program fee earned per the schedule above. Any unearned portion already paid will be refunded within thirty (30) days. Cancellations must be submitted in writing to arthur@serafimdogtraining.com.</p>

        <SubHead title="4.3  Session Rescheduling" />
        <p className={p}>Sessions canceled or rescheduled with less than 24 hours&apos; notice are forfeited and counted as completed for earned-fee purposes. Sessions canceled with more than 24 hours&apos; notice may be rescheduled within 30 days, subject to Company availability.</p>

        <SubHead title="4.4  No Refunds for Dissatisfaction" />
        <p className={p}>Beyond the earned-fee schedule, no additional refunds are issued for dissatisfaction with training outcomes, perceived lack of progress, or change of mind. Training results depend heavily on Client&apos;s consistency in applying training principles.</p>

        <SubHead title="4.5  Cancellation by Company" />
        <p className={p}>Company reserves the right to cancel, suspend, or refuse services at its sole discretion if: (a) the dog poses a safety risk to the trainer or others; (b) information provided by Client was inaccurate or incomplete; (c) Client fails to follow trainer instructions; (d) payment fails; or (e) Client engages in abusive or threatening behavior. Where Company cancels for reasons not the result of Client breach, Company will refund any unearned portion of the fee per the earned-fee schedule.</p>

        <SubHead title="4.6  Money-Back Guarantee (Online Community Only)" />
        <p className={p}>If applicable to Client&apos;s purchase, the online community membership offers a 7-day money-back guarantee. Refund requests must be submitted in writing to arthur@serafimdogtraining.com within 7 days of initial purchase. After 7 days, no refunds are issued. This guarantee applies only to online community memberships.</p>

        {/* 5 */}
        <SectionHead num="5" title="Payment Disputes & Chargebacks" />
        <SubHead title="5.1  Required Pre-Dispute Notice" />
        <p className={p}>Client agrees to notify Company in writing of any billing concern at arthur@serafimdogtraining.com and allow fourteen (14) days for Company to investigate and respond before initiating a payment dispute or chargeback through Client&apos;s bank or card issuer, except where applicable consumer protection law requires a shorter response period.</p>

        <SubHead title="5.2  Underlying Payment Obligations" />
        <p className={p}>Initiating a chargeback or payment dispute does not cancel Client&apos;s underlying contractual payment obligations under this Agreement.</p>

        <SubHead title="5.3  Bad-Faith Chargebacks" />
        <p className={p}>If Client initiates a chargeback in bad faith—meaning after receiving the services purchased, or while refusing to participate in the dispute resolution process—such action constitutes a material breach. In that event, Company may:</p>
        <Bullets items={[
          "Suspend services immediately and revoke access to the online community.",
          "Accelerate any remaining program balance per Section 3.3.",
          "Pursue recovery of the disputed amount, chargeback fees, collection costs, and reasonable attorney's fees.",
          "Refer the matter to a collections agency or pursue legal action under Section 18.",
        ]} />
        <p className={`${p} italic`}>Nothing in this Section prevents Client from exercising good-faith billing dispute rights available under applicable federal or state consumer protection law.</p>

        <SubHead title="5.4  Evidence Preservation" />
        <p className={p}>In any payment dispute, this Agreement, the timestamped record of Client&apos;s electronic acceptance, communications between the parties, session records, and proof of services rendered will be submitted as evidence.</p>

        {/* 6 */}
        <SectionHead num="6" title="Health & Vaccination Requirements" />
        <SubHead title="6.1  In-Person & Board and Train Services" />
        <p className={p}>For all in-person training, Client&apos;s dog must be:</p>
        <Bullets items={[
          "Current on Rabies vaccination (legally required in Texas), with proof provided before service begins.",
          "Current on DHPP and Bordetella vaccinations, with proof provided.",
          "Free of contagious illness, parasites, and skin conditions.",
          "Up-to-date on flea, tick, and heartworm prevention.",
        ]} />

        <SubHead title="6.2  Online-Only Services" />
        <p className={p}>For online coaching and virtual sessions, vaccination requirements are recommended but not required. Client remains solely responsible for the dog&apos;s health and well-being.</p>

        <SubHead title="6.3  Health Disclosure" />
        <p className={p}>Client must disclose all known health conditions, allergies, medications, surgeries, and prior injuries before services begin and must update Company within 24 hours of any material change.</p>

        <SubHead title="6.4  Emergency Veterinary Care" />
        <p className={p}>Client authorizes Company to seek emergency veterinary care if necessary in Company&apos;s reasonable judgment during in-person or board-and-train services. Client agrees to be financially responsible for emergency veterinary costs up to $1,000 per incident, except where the injury was directly and solely caused by Company&apos;s gross negligence or willful misconduct.</p>

        {/* 7 */}
        <SectionHead num="7" title="Behavioral & Bite History Disclosure" />
        <p className={p}>Full and accurate disclosure of Client&apos;s dog&apos;s behavioral history is mandatory and is a continuing obligation throughout the engagement. Client must disclose:</p>
        <Bullets items={[
          "Any prior bite incidents (toward humans or other animals), regardless of severity, including incidents that did not break skin.",
          "Any incidents involving aggression, lunging, snapping, or attempted bites.",
          "Any reports filed with animal control, police, or courts related to the dog.",
          "Any prior trainers, veterinary behaviorists, or behavior modification programs.",
          "Resource guarding tendencies, separation anxiety, or fear-based reactivity.",
          "Any medications affecting behavior.",
          "Any quarantine orders or dangerous-dog designations under Texas Health & Safety Code.",
        ]} />
        <p className="text-sm font-semibold text-charcoal my-3">Continuing obligation: Client must update Company within 24 hours of any new bite, escape, quarantine order, dangerous-dog notice, or material behavioral change.</p>
        <p className={p}>Dogs with a known bite history or aggression history: Client must provide proof of homeowner&apos;s, renter&apos;s, umbrella, or specific canine liability insurance before in-person services begin.</p>
        <p className={p}>Failure to disclose behavioral history is a material breach. Such failure entitles Company to immediate termination of services without refund and full indemnification by Client for any resulting injuries, damages, or legal claims arising from the undisclosed history.</p>

        {/* 8 */}
        <SectionHead num="8" title="Liability Release & Assumption of Risk" />
        <Notice>
          NOTICE: A SEPARATE LIABILITY WAIVER, RELEASE OF CLAIMS &amp; ASSUMPTION OF RISK MUST BE SIGNED BEFORE SERVICES BEGIN. THAT DOCUMENT CONTAINS A FULL RELEASE OF CLAIMS INCLUDING ORDINARY NEGLIGENCE AND MUST BE READ CAREFULLY.
        </Notice>
        <p className={p}>The following provisions supplement the separately signed Liability Waiver and apply to all services under this Agreement.</p>

        <SubHead title="8.1  Inherent Risks" />
        <p className={p}>Client understands that dog training involves inherent risks, including bites, scratches, falls, leash injuries, property damage, dog fights, exposure to disease, and unpredictable animal behavior. Even well-trained dogs may behave unpredictably. Client knowingly and voluntarily assumes all such risks.</p>

        <SubHead title="8.2  Release of Claims" />
        <p className="text-sm font-bold uppercase leading-relaxed my-3">
          TO THE FULLEST EXTENT PERMITTED BY TEXAS LAW, CLIENT RELEASES COMPANY AND ITS OWNERS, OFFICERS, EMPLOYEES, CONTRACTORS, AND AGENTS FROM ALL CLAIMS FOR PROPERTY DAMAGE, PERSONAL INJURY, VETERINARY EXPENSES, AND OTHER LOSSES ARISING FROM THE <span className="underline">ORDINARY NEGLIGENCE</span> OF COMPANY IN CONNECTION WITH THE SERVICES.
        </p>

        <SubHead title="8.3  Claims Not Released" />
        <p className={p}>This release does not apply to claims for gross negligence, willful misconduct, fraud, or non-waivable statutory rights under the Texas Deceptive Trade Practices Act or other applicable consumer protection law.</p>

        <SubHead title="8.4  Limitation of Liability" />
        <p className={p}>To the maximum extent permitted by Texas law, Company&apos;s total aggregate liability for any claim arising from this Agreement shall not exceed the amount actually paid by Client in the 12 months preceding the claim. Company shall not be liable for indirect, incidental, consequential, or punitive damages, except as required by law.</p>

        <SubHead title="8.5  No Guarantee of Results" />
        <p className={p}>Company makes no guarantee regarding training outcomes, behavioral changes, public access reliability, or any specific result. Outcomes depend significantly on Client follow-through, dog temperament, environment, prior conditioning, and other factors outside Company&apos;s control.</p>

        {/* 9 */}
        <SectionHead num="9" title="Third-Party Indemnification" />
        <p className={p}>Client shall indemnify, defend, and hold harmless Company and its owners, officers, employees, contractors, and agents from any and all third-party claims, demands, lawsuits, damages, losses, costs, or expenses (including reasonable attorney&apos;s fees) arising out of or relating to:</p>
        <Bullets items={[
          "Client's dog's acts or omissions, including bites or injuries to third parties.",
          "Client's breach of this Agreement.",
          "Client's failure to follow trainer instructions.",
          "Inaccurate or incomplete information provided by Client, particularly under Section 7.",
          "Client's use or misuse of training tools, methods, or materials outside supervised sessions.",
        ]} />
        <p className={p}>This indemnification applies to third-party claims only. It does not apply to the extent a third-party claim is finally determined by a court to have been caused by Company&apos;s gross negligence or willful misconduct.</p>

        {/* 10 */}
        <SectionHead num="10" title="Training Tools & Methods" />
        <p className={p}>Company uses a balanced training methodology that includes positive reinforcement and trained corrections, which may include the use of professional tools such as prong collars, electronic collars (e-collars), slip leads, long lines, and muzzles.</p>
        <p className={p}>A Tool Consent section is included in the Liability Waiver and must be completed before any correction-based tool is introduced. Client agrees not to use any tool unsupervised until Company has provided adequate instruction.</p>

        {/* 11 */}
        <SectionHead num="11" title="Service Dog Training — Scope of Services & Shared Responsibility" />
        <p className={p}>Serafim Dog Training LLC provides professional service dog training with the goal of preparing dogs for public access and task performance. Company will work collaboratively with Client to develop the skills, behaviors, and task reliability associated with increased environmental exposure and field readiness.</p>
        <p className={p}>Client acknowledges that consistent and reliable performance in public environments depends substantially on the handler&apos;s continued practice, reinforcement, and application of training methods outside of scheduled sessions. Company cannot guarantee outcomes that are contingent on work performed by Client between and after sessions.</p>
        <p className={p}>
          Serafim Dog Training LLC may provide guidance, feedback, or opinion regarding a dog&apos;s progress and readiness for increased exposure to public environments.{" "}
          <strong className="uppercase">HOWEVER, SUCH GUIDANCE DOES NOT CONSTITUTE A GUARANTEE, CERTIFICATION, OR REPRESENTATION THAT THE DOG IS SAFE, NON-AGGRESSIVE, OR SUITABLE FOR PUBLIC INTERACTION IN ALL CIRCUMSTANCES.</strong>
        </p>
        <p className={p}>Serafim Dog Training LLC does not certify, evaluate for legal compliance, or guarantee that any dog meets the requirements of the Americans with Disabilities Act or any other applicable law governing service animals.</p>
        <p className={p}>The decision to present a dog as a service animal, emotional support animal, or therapy dog, expose the dog to public environments, or rely on the dog in any public or third-party setting is made solely at Client&apos;s discretion. Client accepts full responsibility and liability for the dog&apos;s behavior in all environments, INCLUDING situations where Client relied on training guidance, feedback, or opinions provided by Company.</p>

        {/* 12 */}
        <SectionHead num="12" title="Client Responsibilities" />
        <p className={p}>Client agrees to:</p>
        <Bullets items={[
          "Provide accurate, complete information about the dog's history, temperament, health, and any prior incidents.",
          "Attend all scheduled sessions on time and consistently apply training principles between sessions.",
          "Maintain proper licensing, registration, and compliance with local ordinances.",
          "For dogs with a bite history or active behavioral correction needs: maintain and provide proof of liability insurance before in-person services begin.",
          "Provide a safe training environment: secure all doors and gates before sessions; ensure no loose children interfere with training; keep other pets restrained unless agreed in advance.",
          "Treat the trainer with respect and professionalism. Abusive or threatening behavior will result in immediate termination of services without refund.",
          "Continue training and reinforcement after the formal program ends to maintain results.",
        ]} />

        {/* 13 */}
        <SectionHead num="13" title="Photo, Video & Marketing Release" />
        <p className={p}>Company may photograph and video record training sessions for educational, promotional, and marketing purposes.</p>
        <p className={p}>Dog-only content: By agreeing to these terms, Client grants Company a perpetual, royalty-free, worldwide license to use content featuring Client&apos;s dog (without Client&apos;s face, voice, or identifying personal details) for marketing, social media, educational materials, and other commercial purposes.</p>
        <p className={p}>Client personal content: Company will NOT use content that includes Client&apos;s face, voice, or identifying personal details for marketing purposes unless Client provides separate affirmative written consent.</p>
        <Notice>Default: dog content only — no Client face or voice used in marketing without separate opt-in consent.</Notice>

        {/* 14 */}
        <SectionHead num="14" title="Intellectual Property" />
        <p className={p}>All training materials, written guides, video content, methodologies, frameworks, and proprietary content provided by Company are the exclusive intellectual property of Serafim Dog Training LLC and Arthur Serafim. Client is granted a limited, non-exclusive, non-transferable license to use these materials for Client&apos;s personal training use only. Client may NOT:</p>
        <Bullets items={[
          "Reproduce, distribute, share, or sell any materials.",
          "Use the materials to train other dogs commercially.",
          "Share community content, login credentials, recordings, or screen captures with non-members.",
          "Use any Company trademarks, branding, or content in Client's own commercial activities.",
        ]} />
        <p className={p}>Screen recording or downloading of community video content is strictly prohibited.</p>

        {/* 15 */}
        <SectionHead num="15" title="Force Majeure" />
        <p className={p}>Neither party shall be liable for failure to perform obligations under this Agreement due to events beyond reasonable control, including acts of God, natural disasters, severe weather, illness or injury, pandemic, government action, war, civil unrest, or significant technological failures.</p>
        <p className={p}>The affected party must provide written notice within seven (7) days of the force majeure event. Affected services will be rescheduled or credited as reasonable. Rescheduled sessions remain available for 60 days from the original date. If a force majeure event extends beyond 60 days, either party may terminate this Agreement for unused future services, with a prorated credit per the earned-fee schedule in Section 4.1.</p>

        {/* 16 */}
        <SectionHead num="16" title="False Statements & Review Integrity" />
        <p className={p}>Nothing in this Agreement prohibits Client from posting truthful reviews, opinions, or complaints about Company&apos;s services, or from communicating with lawful regulators, payment processors, or review platforms. Client retains all rights to share honest experiences and opinions.</p>
        <p className={p}>However, Client shall not knowingly publish false statements of fact, fabricated media (including manipulated images or audio), or materially misleading representations about Company or its personnel.</p>

        {/* 17 */}
        <SectionHead num="17" title="Online Community Membership Terms" />
        <p className={p}>If Client&apos;s purchase includes online community membership, the following additional terms apply:</p>
        <Bullets items={[
          "Memberships are personal and non-transferable. Sharing account access or credentials constitutes a material breach and results in immediate termination without refund.",
          "Client agrees to community guidelines and respectful conduct toward other members. Company reserves the right to remove members for violations including spam, harassment, or prohibited sharing of paid content, without refund.",
          "Founding member rates are locked in for the duration of continuous active membership. A lapse in payment of more than 30 days forfeits founding rate eligibility permanently.",
          "Content within the community is for educational purposes only and does not constitute personalized training advice. Individual situations require individual consultation.",
          "Screen recording, downloading, or redistributing community content is strictly prohibited.",
        ]} />

        {/* 18 */}
        <SectionHead num="18" title="Dispute Resolution" />
        <SubHead title="18.1  Informal Resolution" />
        <p className={p}>The parties agree to first attempt to resolve any dispute through good-faith written communication. Any dispute must be raised in writing to arthur@serafimdogtraining.com within 30 days of the event giving rise to it. Company will respond within 14 days.</p>

        <SubHead title="18.2  Governing Law" />
        <p className={p}>This Agreement is governed by and construed in accordance with the laws of the State of Texas, without regard to conflict-of-law principles.</p>

        <SubHead title="18.3  Venue" />
        <p className={p}>Any legal action arising from this Agreement shall be brought exclusively in the state or federal courts located in Travis County, Texas. Client consents to personal jurisdiction in such courts and waives any objection to venue.</p>

        <SubHead title="18.4  Attorney's Fees" />
        <p className={p}>In any dispute arising under this Agreement, the prevailing party shall be entitled to recover reasonable attorney&apos;s fees, court costs, and other reasonable expenses incurred.</p>

        {/* 19 */}
        <SectionHead num="19" title="General Provisions" />
        <SubHead title="19.1  Entire Agreement" />
        <p className={p}>This Agreement, together with any program-specific addenda, the separately signed Liability Waiver, intake forms, and any other documents signed by both parties, constitutes the entire agreement between the parties and supersedes all prior agreements and understandings.</p>

        <SubHead title="19.2  Modifications" />
        <p className={p}>Company may modify these terms for new clients at any time. For existing clients with active programs, material changes affecting payment terms, liability allocation, dispute terms, or media rights apply prospectively only and require Client&apos;s fresh written acceptance before taking effect.</p>

        <SubHead title="19.3  Severability" />
        <p className={p}>If any provision of this Agreement is held unenforceable or invalid, the remaining provisions shall continue in full force and effect.</p>

        <SubHead title="19.4  No Waiver" />
        <p className={p}>Failure by Company to enforce any provision does not constitute a waiver of the right to enforce it in the future.</p>

        <SubHead title="19.5  Assignment" />
        <p className={p}>Client may not assign or transfer rights or obligations under this Agreement without prior written consent. Company may assign this Agreement at its discretion.</p>

        <SubHead title="19.6  Electronic Signatures" />
        <p className={p}>Client agrees that checking the agreement box at checkout, submitting payment, or otherwise indicating acceptance through electronic means constitutes a legally binding electronic signature equivalent to a handwritten signature, in compliance with the E-SIGN Act and the Texas Uniform Electronic Transactions Act.</p>

        <SubHead title="19.7  Survival" />
        <p className={p}>Sections relating to liability, indemnification, intellectual property, dispute resolution, and payment obligations shall survive termination of this Agreement.</p>

        {/* Acknowledgment */}
        <div className="mt-16">
          <div className="h-px bg-gold mb-8" />
          <h2 className="font-display text-xl text-forest font-semibold uppercase tracking-wide mb-5">
            Acknowledgment
          </h2>
          <Notice>
            BY CHECKING THE AGREEMENT BOX, SUBMITTING PAYMENT, OR ENGAGING SERVICES, CLIENT ACKNOWLEDGES THAT: (1) Client has read this entire Agreement; (2) Client understands all of its terms, including the liability provisions in Section 8; (3) Client has separately signed or will separately sign the Liability Waiver, Release of Claims &amp; Assumption of Risk before services begin; (4) Client had the opportunity to seek independent legal advice if desired; (5) Client voluntarily and knowingly agrees to be bound by these terms; and (6) Client is at least 18 years of age and legally capable of entering into binding contracts.
          </Notice>
        </div>

        <div className="mt-12 text-center text-xs text-charcoal-muted border-t border-offwhite-soft pt-8">
          Serafim Dog Training LLC &middot; serafimdogtraining.com &middot; arthur@serafimdogtraining.com &middot; Austin, TX
        </div>

      </div>
    </section>
  );
}
