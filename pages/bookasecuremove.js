import GeoVans from '../public/assets/geoameyvans.jpg';
import Roadmap from '../public/assets/roadmap.png';
import ApiGuide from '../public/assets/apiGuide.png';
import Image from 'next/image';

export default function BookaSecureMove() {
  return (
    <div>
      <div
        id="about"
        className="max-w-[1240px] h-auto pt-20 p-6 m-auto sm:w-9/12 md:w-7/12 md:pt-40"
      >
        <div>
          <h1 className="uppercase pb-10">Book a Secure Move</h1>
          <div className=" h-auto m-auto">
            <Image
              src={GeoVans}
              alt="/"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
          <h2 className="uppercase py-4 text-[#B8D8D8] ">Background</h2>
          <p className="font-medium text-base text-justify leading-relaxed py-2">
            Since 1994, the Prisoner Escort and Custody Services (PECS) contract
            has outsourced the secure transport of prisoners across England &
            Wales including: adults; children and young people to and from
            Police Stations; Courts; Prisons; Secure Training Centres (STCs);
            and Secure Children’s Schools (SCHs). On average 622,000 moves occur
            over any given year across the country, covering around 10.5 million
            miles of distance.
          </p>
          <p className="font-medium text-base text-justify leading-relaxed py-2">
            I was hired as Senior Product Manager to lead development of a
            digital service (Book a secure move) that would support the
            generation four contract.
          </p>

          <p className="font-medium text-base text-justify leading-relaxed py-2">
            The generation four contract would also introduce an updated fleet
            of escort vehicles with enhanced safety and security features,
            providing real-time data on the location of detainees and prisoners
            who are being moved to Book a secure move.
          </p>
          <p className="font-medium text-base text-justify leading-relaxed py-2">
            These changes would improve the efficiency of the PECS service as
            well as overall safety, security and decency for prisoners. The
            government would also realise significant benefits during the
            10-year term of the contracts such as reducing the number of delays
            at court, stopping mixed transportation of adult and youths and
            minimising the time a prisoner spends in a court cell or prison van.
          </p>
          <p className="font-medium text-base text-justify leading-relaxed py-2">
            I joined the programme team early in the bid phase and was tasked
            with outlining/scoring digital requirements for potential transport
            suppliers.
          </p>

          <h2 className="uppercase py-4 text-[#B8D8D8] ">Approach</h2>
          <p className="font-medium text-base text-justify leading-relaxed py-2">
            The bid phase enabled me to rapidly grow my understanding of PECS
            service, meet a wide range of users/stakeholders working with the
            programme, conduct initial research and quickly validate initial
            concepts for the service.
          </p>
          <p className="font-medium text-base text-justify leading-relaxed py-2">
            Suppliers had concerns around shaping their digital proposals,
            integration was a key concern as suppliers had a requirement to
            accept digital move requests and risk assessments. Previous
            contracts had relied on individual sites sending spreadsheets to the
            transport supplier with all other forms being paper based and
            provided at the point of pickup. Reporting as a result was
            restricted, the new contract provided an opportunity to deliver
            real-time reporting which would improve prisoner safety and identify
            operational efficiencies sooner.
          </p>

          <p className="font-medium text-base text-justify leading-relaxed py-2">
            We published a high level roadmap and draft API specification for
            the service, this would provide timelines for releases alongside
            collections/ resources that would support each release.
          </p>
          <p className="font-medium text-base text-justify leading-relaxed py-2">
            We adopted dual track agile which enabled us to learn and iterate
            quickly. The service was complex covering multiple business areas:
          </p>

          <table className="table-fixed text-left pb-2 pt-10">
            <thead>
              <tr>
                <th className="py-4 uppercase">Component</th>
                <th className="py-4 uppercase">Book a secure move benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Move requests</td>
                <td className="py-2">
                  Users can request moves and supply initial risk assessments
                  via a single service as opposed to sending spreadsheets over
                  email
                </td>
              </tr>
              <tr>
                <td>Population Management</td>
                <td className="py-2">
                  Provide an overview of the current and projected prison
                  population and enable single and bulk transfer requests
                  between prisons supported by prisoner profile search
                </td>
              </tr>
              <tr>
                <td>Complex risk & medical assessments</td>
                <td className="py-2">
                  Each move required detailed assessments, these could be
                  partially pre-filled from previous forms and other systems
                  saving significant time over completing paper forms
                </td>
              </tr>
              <tr>
                <td>Handover</td>
                <td className="py-2">
                  Final checks and confirmation for transfer of care
                </td>
              </tr>

              <tr>
                <td>Events</td>
                <td className="py-2">
                  Suppliers provide notifications of events that occur whilst a
                  move is underways
                </td>
              </tr>
              <tr>
                <td>Location</td>
                <td className="py-2">
                  Suppliers provide GPS locations for vehicles, this both
                  improves safety but also helps sending/receiving locations
                  better plan resources
                </td>
              </tr>
              <tr>
                <td>Billing & compliance data</td>
                <td className="pt-2 pb-10">
                  Provide a single source of truth for move requests against
                  authenticated HMPPS users. This would greatly reduce assurance
                  workload (approx 5,000 manually checked records month) and
                  deliver automated costing of moves
                </td>
              </tr>
            </tbody>
          </table>

          <p className="font-medium text-base text-justify leading-relaxed py-2">
            The programme and digital team worked closely together to identify
            key stakeholders and ensure appropriate governance was in place.
          </p>

          <p className="font-medium text-base text-justify leading-relaxed py-2">
            Squads formed to focus on specific areas of the service alongside
            business change to ensure a shared understanding and develop
            relationships with stakeholders. We started with a limited number of
            sites initially who were willing to participate in research and test
            Alpha & Beta versions of the service.
          </p>

          <div className=" h-auto m-auto">
            <Image
              src={Roadmap}
              alt="/"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>

          <h2 className="uppercase py-4 text-[#B8D8D8] ">Rollout</h2>
          <p className="font-medium text-base text-justify leading-relaxed py-2">
            The service roll out was complex with:
          </p>
          <p className="font-medium text-base text-justify leading-relaxed py-2">
            <ul className="list-disc">
              <li>
                over 25k users across 772 sites (prisons/police custody/youth
                estate/courts)
              </li>
              <li>
                multiple cross government stakeholders at site, regional &
                national level
              </li>
              <li>complex legislation, policies and overlapping processes </li>
              <li>internal operational, assurance and finance teams rollout</li>
              <li>operational concerns required constant flexibility</li>
            </ul>
          </p>

          <p className="font-medium text-base text-justify leading-relaxed py-2">
            Our initial focus was on move requests from police custody, we found
            that as adoption increased in the business so did confidence. Any
            issues identified were quickly addressed, this was a key factor in
            growing confidence. A number of sites primarily used the service in
            the early hours of the morning which resulted in feedback at all
            hours but also helped shape an appropriate post live support model.
          </p>

          <p className="font-medium text-base text-justify leading-relaxed py-2">
            Suppliers were developing their services in parallel with
            integration assurance occurring in stages normally in the Limited
            Beta phase. We provided sites with the ability to generate email
            based move request summaries to ensure continuity of the service
            where integration assurance had not been finalised. Once suppliers
            were assured on the simple use cases we introduced more complex
            assurance.
          </p>

          <div className=" h-auto m-auto">
            <Image
              src={ApiGuide}
              alt="/"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>

          <h2 className="uppercase py-4 text-[#B8D8D8] ">Data</h2>
          <p className="font-medium text-base text-justify leading-relaxed py-2">
            We identified key rollout metrics:
          </p>
          <p className="font-medium text-base text-justify leading-relaxed py-2">
            <ul className="list-disc">
              <li>
                percentage of moves requested on the service vs requested via
                email/phone for each site
              </li>
              <li>
                number of risk assessments started online vs completed online vs
                completed on paper for each site.
              </li>
            </ul>
          </p>

          <p className="font-medium text-base text-justify leading-relaxed py-2">
            Whilst simple these became good success indicators, numbers would
            vary by site and would be a good indicator that additional support
            or research was required.
          </p>

          <p className="font-medium text-base text-justify leading-relaxed py-2">
            A large number of reports were developed over time to support
            compliance reporting providing valuable insights that previously
            were not available or required substantial manual effort to produce.
          </p>

          <h2 className="uppercase py-4 text-[#B8D8D8] ">Outcome</h2>
          <p className="font-medium text-base text-justify leading-relaxed py-2">
            Book a secure move was rolled out to all 772 sites in under 15
            months overcoming numerous challenges, including Covid. At the time
            of rollout the service achieved a 95% user satisfaction rating.
          </p>
          <p className="font-medium text-base text-justify leading-relaxed py-2">
            Suppliers have fully integrated with the service, with real time
            data providing valuable insights and transforming reporting,
            compliance and billing. Most importantly the service has enabled
            improved safety, security and decency for prisoners through improved
            sharing of relevant risk information.
          </p>
          <p className="font-medium text-base text-justify leading-relaxed pb-4">
            The work was awarded `Collaboration of the Year` and `Innovation of
            the Year` awards by MOJ Project Delivery function in 2021.
          </p>

          <blockquote className="p-4 italic bg-neutral-100 text-neutral-600 quote ">
            <p className="mb-2">
              &quot;Thank you for the excellent work, perseverance and
              superhuman effort seen across the teams to deliver the significant
              solutions and services which have been provided on behalf of the
              PECS Generation 4 Programme. The systems, engagement, supporting
              services and continued improvements that have been delivered to
              colleagues across the justice estate have proven to be not only
              well received, but also facilitating significant positive change
              in this environment.&quot;
            </p>
            <cite>
              <p>Robert Urquhart - Senior Business Change Lead, MOJ</p>
            </cite>
          </blockquote>

          <h2 className="uppercase py-4 text-[#B8D8D8]">Further reading</h2>
          <p className="font-medium hover:underline underline-offset-4 decoration-4 decoration-[#D8B8B8] py-2">
            <a href="https://www.andrew-millar.co.uk/hmpps.html">
              Andrew Millar outlined the design approach
            </a>
          </p>
          <p className="font-medium hover:underline underline-offset-4 decoration-4 decoration-[#D8B8B8] py-2">
            <a href="https://www.gov.uk/government/news/prisoner-escort-contracts-awarded">
              Original contract award press release - GOV.UK
            </a>
          </p>
          <p className="font-medium hover:underline underline-offset-4 decoration-4 decoration-[#D8B8B8] py-2">
            <a href="https://github.com/ministryofjustice/hmpps-book-secure-move-api/wiki">
              Book a secure move API documentation
            </a>
          </p>

          <p className="font-medium hover:underline underline-offset-4 decoration-4 decoration-[#D8B8B8] py-2">
            <a href="https://github.com/ministryofjustice/hmpps-book-secure-move-frontend">
              Book a secure move frontend documentation
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
