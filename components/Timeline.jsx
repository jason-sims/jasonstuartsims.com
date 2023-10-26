import React from 'react';

const Timeline = () => {
  const timelineItems = [
    {
      company: 'Digi2al | Royal Navy',
      role: 'Lead Product Manager',
      date: 'Jun 23',
      summary:
        'Leading delivery of the Navy Schedule Service & the Product Community of Practice',
    },

    {
      company: 'Talent | ESFA',
      role: 'Lead Product Manager',
      date: 'Jan 23',
      summary:
        'Developed the Education and Skills Funding Agency payments service roadmap & released a pilot that calculates apprenticeship earnings & payments using funding policy rules. This enabled quicker payments ( £2bn+ yr of Apprenticeship levy funds and public funds) for training providers & employers.',
    },
    {
      company: 'Home',
      role: 'Dad',
      date: 'Sep 22',
      summary: 'Spent time with my son & completed home renovations',
    },
    {
      company: 'Futurice | Royal Automotive Club',
      role: 'Senior Product Manager',
      date: 'Jun 22',
      summary:
        'Conducted and delivered a product review of MyRAC for the executive team as part of the Silverlake acquisition of RAC',
    },
    {
      company: 'Talent | Department for Education',
      role: 'Lead Product Manager',
      date: 'Feb 22',
      summary:
        'Led a pre-Discovery, delivering an options analysis for the implementation of a national Common Child Identifier',
    },
    {
      company: 'Talent',
      role: 'Head of Product',
      date: 'Apr 21',
      summary:
        'Supported contract Product Managers, Business Analysts & Delivery Managers across multiple outcomes based contracts. Led multiple private and public (Digital Outcomes and Specialists framework) bids',
    },
    {
      company: 'Talent | Ministry of Justice ',
      role: 'Senior Product Manager',
      date: 'Oct 18',
      summary:
        'Led delivery of the “Book a secure move” service from inception to live. The service digitised move requests, population management, risk & medical assessments replacing 2 legacy systems. Rolled the service out to c.25k users across 772 sites (prisons, police custody, youth estate, courts) resulting in over c.600k moves digitised yearly',
    },
    {
      company: 'Understanding | Reed Elsevier ',
      role: 'Senior Product Manager',
      date: 'Mar 18',
      summary:
        'Led the microservices and recommender systems teams ensuring fresh papers achieved the most qualified peer-review acceptance. Migrated c1.5k journals from a legacy system & ran a targeted publication claims campaign achieving 3.5% claim increase',
    },
    {
      company: 'psHEALTH',
      role: 'Product Manager',
      date: 'Oct 16',
      summary:
        'Established (first hire) and delivered Advanced Referral & Triage (ART) from inception to launch in 12 months. ART provided consistent clinical pathway rules, NHS Spine integration (as FHIR SME) & RPA (Automation Anywhere) to automate patient registration/booking flows. Launched to 2 NHS trusts on GovCloud & 2 private orgs establishing a Single Point of Access delivering savings of approx £250k per 100k referrals',
    },
    {
      company: 'Telstra Health',
      role: 'Product Owner',
      date: 'Jan 14',
      summary:
        'Led development of the National Health Services Directory (NHSD) & the Enterprise Health Provider Directory (EHPD) with included NHSD FHIR integration, Master Data Management, HL7 V2 & SAML support. Rolled out the EPHD to a large private hospital network (52 sites across 6 regions) within 6 months',
    },
  ];

  return (
    <div class="relative min-h-fit flex flex-col justify-center overflow-hidden">
      <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div class="flex flex-col justify-center divide-y [&>*]:py-16">
          <div class="w-full max-w-3xl mx-auto">
            <div class="-my-6">
              {timelineItems.map((item, index) => {
                return (
                  <div
                    key={item.date}
                    class="relative pl-8 sm:pl-32 py-6 group"
                  >
                    <div class="font-medium text-2xl mb-1 sm:mb-0">
                      {item.company}
                    </div>
                    <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#1b2213] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-[#1b2213] bg-[#B8D8D8] rounded-full">
                        {item.date}
                      </time>
                      <div class=" text-[#B8D8D8] uppercase text-base">
                        {item.role}
                      </div>
                    </div>
                    <div class="font-medium text-base">{item.summary}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
