export interface ProgramSection {
  title: string;
  content: string;
}

export interface ProgramStat {
  value: string;
  label: string;
}

export interface Program {
  slug: string;
  number: string;
  title: string;
  titleHtml: string;
  tagline: string;
  description: string;
  location: string;
  icon: string;
  body: string[];
  sections: ProgramSection[];
  stats: ProgramStat[];
}

export const programs: Program[] = [
  {
    slug: "education",
    number: "01",
    title: "Education & Schools",
    titleHtml: "Education & <em>Schools</em>",
    tagline: "Unlocking futures through learning",
    description:
      "Scholarships, tuition centres, and adult literacy programs that open doors for children and adults across Tamil Nadu and Karnataka.",
    location: "Tamil Nadu \u00b7 Karnataka",
    icon: "edu",
    body: [
      "Education is the single most powerful instrument for breaking the cycle of poverty. Aenon Ministries has invested in learning at every level \u2014 from primary school scholarships that keep children in the classroom, to evening tuition centres that help struggling students keep pace, to adult literacy programs that give farmers and labourers the dignity of being able to sign their own names.",
      "Our approach is grounded in community partnership. We work closely with local schools, teachers, and village leaders to identify the children and families most in need. Every scholarship recipient is paired with a mentor who checks in weekly, and every tuition centre is staffed by trained local educators who understand the particular challenges of their communities.",
      "Since our founding, more than eight thousand students have received support through our education programs. Forty tuition centres operate across two states, and over three thousand adults have completed our literacy courses. These are not just numbers \u2014 they are lives transformed, families strengthened, and communities lifted by the quiet, patient work of learning.",
    ],
    sections: [
      {
        title: "Scholarships",
        content:
          "Our scholarship program covers school fees, uniforms, books, and supplies for children from families who cannot afford the cost of education. Each scholarship is renewed annually based on attendance and progress, and recipients receive ongoing mentorship to help them stay on track. Many of our scholars are first-generation learners \u2014 the first in their families ever to attend secondary school.",
      },
      {
        title: "Tuition Centres",
        content:
          "Across more than forty locations, our after-school tuition centres provide supplementary instruction in core subjects including mathematics, science, and English. These centres serve students who attend government schools but lack access to additional academic support at home. Classes run in the late afternoon and early evening, staffed by local educators trained through our teaching fellowship.",
      },
      {
        title: "Adult Literacy",
        content:
          "Our adult literacy program operates evening classes for men and women who never had the opportunity to attend school. Over the course of a year, participants learn to read, write, and perform basic arithmetic \u2014 skills that enable them to open bank accounts, access government services, and participate more fully in the economic life of their communities. More than three thousand adults have graduated from the program to date.",
      },
    ],
    stats: [
      { value: "8,000+", label: "Students supported" },
      { value: "40+", label: "Tuition centres" },
      { value: "3,000+", label: "Adult literacy graduates" },
      { value: "2", label: "States" },
    ],
  },
  {
    slug: "healthcare",
    number: "02",
    title: "Healthcare & Clinics",
    titleHtml: "Healthcare & <em>Clinics</em>",
    tagline: "Bringing medical care to those who need it most",
    description:
      "Mobile medical camps, maternal and child health services, and community clinics reaching underserved populations across Andhra Pradesh and Tamil Nadu.",
    location: "Andhra Pradesh \u00b7 Tamil Nadu",
    icon: "health",
    body: [
      "In many of the communities we serve, the nearest hospital is forty kilometres or more away, along roads that become impassable during the monsoon. For daily-wage labourers, taking a day off work to travel for medical care means losing a day\u2019s income their family cannot afford to go without. The result is that treatable conditions go untreated, preventable diseases go undiagnosed, and mothers deliver their babies without trained medical assistance.",
      "Aenon Ministries operates mobile medical camps that bring doctors, nurses, and essential medicines directly to rural villages. Each camp provides general health screenings, maternal and child health services, dental care, and referrals for cases that require hospital-level treatment. We also train community health workers who remain in the village between visits, providing basic care and health education.",
      "Over the past two decades, our healthcare programs have served more than twenty-five thousand patients annually. We have conducted over one hundred and twenty medical camps and supported more than two thousand safe deliveries. Behind every statistic is a person who received care they would not otherwise have had access to.",
    ],
    sections: [
      {
        title: "Mobile Medical Camps",
        content:
          "Our mobile medical units travel to remote villages on a regular rotating schedule, bringing qualified doctors, nurses, pharmacists, and lab technicians. Each camp offers general consultations, basic diagnostics, and a dispensary stocked with essential medicines. Patients requiring specialised care are referred to partner hospitals and supported with transportation and follow-up.",
      },
      {
        title: "Maternal & Child Health",
        content:
          "Maternal and child health is a cornerstone of our healthcare work. We provide antenatal check-ups, nutritional support for expectant mothers, safe delivery assistance, and postnatal care. Community health workers conduct home visits to monitor at-risk pregnancies and ensure that newborns receive their immunisations on schedule. Our goal is that no mother in our service areas delivers without trained assistance.",
      },
      {
        title: "Community Health Workers",
        content:
          "We recruit and train local women as community health workers who serve as a bridge between the village and our medical teams. These health workers provide first aid, monitor chronic conditions, promote hygiene and sanitation, and ensure that patients follow through on referrals and treatment plans. They are the backbone of sustainable community health.",
      },
    ],
    stats: [
      { value: "25,000+", label: "Patients annually" },
      { value: "120+", label: "Medical camps conducted" },
      { value: "2,000+", label: "Safe deliveries" },
      { value: "3", label: "Districts served" },
    ],
  },
  {
    slug: "women",
    number: "03",
    title: "Women & Children",
    titleHtml: "Women & <em>Children</em>",
    tagline: "Empowering women, nurturing the next generation",
    description:
      "Vocational training, self-help groups, child nutrition programs, and support services that strengthen families from the inside out.",
    location: "Multi-state",
    icon: "users",
    body: [
      "The wellbeing of any community begins with the wellbeing of its women and children. When a woman gains a skill, earns an income, and finds her voice, the effects ripple outward through her family, her neighbourhood, and her village. When a child is properly nourished and cared for in the earliest years, the foundation is laid for a lifetime of health and learning.",
      "Aenon Ministries\u2019 women and children\u2019s programs address both sides of this equation. Our vocational training courses equip women with practical, income-generating skills \u2014 tailoring, food processing, handicrafts, and basic computer literacy. Self-help groups provide a structure for savings, mutual support, and collective enterprise. For children, we run nutrition centres that ensure the youngest members of the community receive the balanced meals essential for healthy development.",
      "More than twelve hundred women have completed our vocational training programs. Fifteen self-help groups are active across multiple states. Five hundred children receive daily nutritional support through our feeding centres. These programs are not charity \u2014 they are investments in the strength and self-sufficiency of the communities we serve.",
    ],
    sections: [
      {
        title: "Vocational Training",
        content:
          "Our vocational training courses run for three to six months and cover tailoring, embroidery, food processing and preservation, candle and soap making, and basic computer skills. Each course is designed to equip women with skills that have demonstrated market demand in their local area. Graduates receive support in accessing microfinance to start their own enterprises, and many go on to employ other women from their communities.",
      },
      {
        title: "Self-Help Groups",
        content:
          "Our self-help groups bring together ten to fifteen women who meet regularly to save, share resources, and support one another. Members contribute small weekly savings, which build into a communal fund available for emergency loans and small business investments. The groups also serve as a platform for health education, legal awareness, and mutual encouragement. Each group is facilitated by a trained leader from within the community.",
      },
      {
        title: "Child Nutrition Centres",
        content:
          "Malnutrition in early childhood causes irreversible damage to physical and cognitive development. Our nutrition centres provide balanced daily meals to children under the age of six, along with regular health monitoring, growth tracking, and nutritional education for parents. Centres are staffed by local women trained in child nutrition and early childhood care.",
      },
    ],
    stats: [
      { value: "1,200+", label: "Women trained" },
      { value: "500+", label: "Children in nutrition programs" },
      { value: "15+", label: "Self-help groups" },
      { value: "6", label: "Vocational courses offered" },
    ],
  },
  {
    slug: "outreach",
    number: "04",
    title: "Rural Village Outreach",
    titleHtml: "Rural Village <em>Outreach</em>",
    tagline: "Reaching the last village, the last family",
    description:
      "Clean water infrastructure, sustainable agriculture training, and holistic village development reaching over 120 communities.",
    location: "120+ Villages",
    icon: "globe",
    body: [
      "India\u2019s rural villages are home to some of the most resilient people on earth \u2014 and some of the most persistent challenges. Lack of clean water, depleted soil, limited market access, and the steady migration of young people to cities have left many communities struggling to sustain themselves. Aenon Ministries\u2019 village outreach program takes a holistic approach, working alongside village councils to address the most pressing needs of each community.",
      "Clean water is often the starting point. We have installed more than eighty-five wells and water systems across our service areas, transforming villages where women and girls once walked kilometres each day to fetch water. With water secured, we turn to agriculture \u2014 training farmers in sustainable techniques including organic composting, drip irrigation, crop rotation, and seed saving that restore soil health and improve yields without dependence on expensive chemical inputs.",
      "Our outreach work is always led by the community. Village development committees set the priorities, contribute labour, and take ownership of the infrastructure we build together. This is not development done to people \u2014 it is development done with them. Over one hundred and twenty villages have participated in our outreach programs, and six hundred farmers have completed our agricultural training courses.",
    ],
    sections: [
      {
        title: "Clean Water Access",
        content:
          "Access to safe drinking water is a fundamental human right and the foundation of community health. We work with hydrogeology consultants to identify viable water sources and install bore wells, hand pumps, and gravity-fed water systems. Each installation includes the formation of a community water committee \u2014 typically composed of local women \u2014 trained to maintain the system and ensure equitable access for all families in the village.",
      },
      {
        title: "Sustainable Agriculture",
        content:
          "Our agriculture program trains smallholder farmers in techniques that improve yields while restoring soil health. Courses cover organic composting, vermiculture, drip irrigation, crop diversification, and natural pest management. We also facilitate seed banks where farmers can access indigenous seed varieties suited to local conditions, reducing dependence on expensive hybrid seeds and chemical fertilisers.",
      },
      {
        title: "Holistic Village Development",
        content:
          "Beyond water and agriculture, our village outreach includes sanitation improvements, solar lighting for community spaces, road access advocacy, and support for village governance structures. Each village partnership begins with a participatory needs assessment led by the community itself, ensuring that our resources are directed toward the priorities that matter most to the people who live there.",
      },
    ],
    stats: [
      { value: "120+", label: "Villages reached" },
      { value: "85+", label: "Wells & water systems" },
      { value: "600+", label: "Farmers trained" },
      { value: "7", label: "Districts served" },
    ],
  },
  {
    slug: "relief",
    number: "05",
    title: "Disaster & Crisis Relief",
    titleHtml: "Disaster & <em>Crisis Relief</em>",
    tagline: "First to respond, last to leave",
    description:
      "Rapid emergency response, food and supply distribution, and long-term recovery support for communities struck by natural disasters and crises.",
    location: "Emergency Response",
    icon: "alert",
    body: [
      "When disaster strikes, the most vulnerable communities are always hit the hardest. Families living in low-lying areas, in poorly constructed houses, without savings or insurance, are the ones who lose the most \u2014 and who receive help the slowest. Aenon Ministries maintains a standing disaster response capacity that allows us to mobilise within twenty-four hours of a crisis, reaching affected families with food, clean water, shelter, and medical care while larger relief operations are still being organised.",
      "Our disaster relief work extends well beyond the initial emergency. We remain in affected communities for months and sometimes years, supporting the long process of rebuilding homes, restoring livelihoods, and helping families recover from the trauma of displacement. We have responded to floods, cyclones, droughts, and the COVID-19 pandemic, assisting more than fifteen thousand families across multiple states.",
      "Our relief teams are composed of trained local volunteers who know the terrain, speak the language, and have the trust of the communities they serve. This local presence is what allows us to respond quickly and effectively \u2014 not as outsiders arriving with supplies, but as neighbours showing up when they are needed most.",
    ],
    sections: [
      {
        title: "Immediate Response",
        content:
          "Within twenty-four hours of a disaster, our response teams deploy with pre-positioned emergency supplies including food kits, clean water, tarpaulins, blankets, hygiene kits, and basic medicines. We work with local authorities and community leaders to identify the most affected families and ensure that aid reaches those who need it most urgently. Our teams are trained in disaster assessment, logistics, and psychological first aid.",
      },
      {
        title: "Long-Term Recovery",
        content:
          "After the immediate crisis passes, our teams remain to support the rebuilding process. This includes repairing and reconstructing damaged homes, restoring agricultural land, replacing lost livestock and equipment, and helping families navigate insurance claims and government relief programs. We stay until the community has regained its footing \u2014 not just its buildings, but its confidence and cohesion.",
      },
      {
        title: "Preparedness & Training",
        content:
          "Prevention is as important as response. We conduct disaster preparedness workshops in flood-prone and cyclone-prone communities, helping families develop evacuation plans, identify safe shelter locations, and assemble emergency supply kits. We also train community-level first responders who can provide immediate assistance in the critical hours before outside help arrives.",
      },
    ],
    stats: [
      { value: "15,000+", label: "Families assisted" },
      { value: "24hrs", label: "Mobilisation time" },
      { value: "12,000+", label: "COVID food kits distributed" },
      { value: "4", label: "Major responses since 2019" },
    ],
  },
  {
    slug: "leadership",
    number: "06",
    title: "Community & Leadership",
    titleHtml: "Community & <em>Leadership</em>",
    tagline: "Raising leaders who raise communities",
    description:
      "Leadership development workshops, character formation programs, and community-building initiatives that equip local leaders to serve their people.",
    location: "Ongoing \u00b7 Multi-state",
    icon: "home",
    body: [
      "Sustainable community development depends on strong local leadership. Programs and projects come and go, but the leaders who remain in a community long after an organisation has moved on are the ones who determine whether change takes root or fades. Aenon Ministries invests deeply in identifying, training, and supporting community leaders who carry a vision for the flourishing of their people.",
      "Our leadership development program brings together emerging and established leaders from across our partner communities for intensive workshops focused on servant leadership, ethical decision-making, conflict resolution, community organising, and personal character formation. Participants return to their communities with practical skills and a network of peers who share their commitment to service.",
      "Since 2005, more than eight hundred leaders have completed our training programs. These men and women now serve as village council members, school committee chairs, self-help group facilitators, health volunteers, and church leaders across three states. They are the multiplying force behind everything we do \u2014 the proof that investing in people is the most enduring investment of all.",
    ],
    sections: [
      {
        title: "Leadership Workshops",
        content:
          "Our leadership workshops run over three to five days and cover servant leadership principles, community needs assessment, project planning and management, public speaking, and financial stewardship. Workshops are held regionally to maximise accessibility and are facilitated by experienced community development practitioners. Follow-up coaching is provided for six months after each workshop to support participants in applying what they have learned.",
      },
      {
        title: "Character Formation",
        content:
          "Leadership without character is influence without integrity. Our character formation curriculum addresses the inner life of the leader \u2014 personal values, ethical boundaries, emotional resilience, and spiritual grounding. Participants engage in reflective exercises, mentoring relationships, and accountability partnerships designed to strengthen not just their skills but their character as leaders.",
      },
      {
        title: "Community Building",
        content:
          "Our community-building initiatives bring together people from different backgrounds and perspectives to work on shared goals. These include inter-village exchange visits, collaborative community projects, youth leadership forums, and annual gatherings that celebrate the progress communities have made and set the vision for the year ahead. Strong communities are built on relationships, and relationships are built through shared purpose.",
      },
    ],
    stats: [
      { value: "800+", label: "Leaders trained since 2005" },
      { value: "35+", label: "Partner communities" },
      { value: "3", label: "States" },
      { value: "20+", label: "Years of investment" },
    ],
  },
  {
    slug: "covid",
    number: "07",
    title: "COVID-19 Relief",
    titleHtml: "COVID-19 <em>Relief</em>",
    tagline: "Standing with the vulnerable when the world shut down",
    description:
      "Emergency food kit distribution, hygiene supplies, and community support during the COVID-19 pandemic across three states from 2020 to 2022.",
    location: "2020\u20132022",
    icon: "alert",
    body: [
      "When India entered one of the strictest lockdowns in the world on March 24th, 2020, millions of daily-wage workers lost their livelihoods overnight. Construction workers, auto-rickshaw drivers, street vendors, domestic helpers \u2014 people who lived from one day\u2019s earnings to the next suddenly had nothing. No work, no income, no savings, and in many cases, no ration card to fall back on. The crisis was immediate and devastating.",
      "Aenon Ministries pivoted its entire operational capacity to emergency food relief within days. Working through our existing network of community leaders, church partners, and local volunteers, we assembled and distributed food kits containing rice, dal, cooking oil, salt, spices, soap, and masks. Each kit was designed to sustain a family of four for two weeks. Distribution was carefully targeted to reach the most vulnerable \u2014 migrant workers stranded far from home, elderly people living alone, single mothers with no support system.",
      "Over the course of the pandemic response from 2020 to 2022, we distributed more than twelve thousand food kits across Tamil Nadu, Karnataka, and Andhra Pradesh, reaching an estimated forty-eight thousand people. Beyond food, we provided hygiene education, distributed masks and sanitiser, and offered emotional and spiritual support to communities gripped by fear and uncertainty. The pandemic revealed the depth of vulnerability in the communities we serve \u2014 and the depth of generosity among those who gave to make this response possible.",
    ],
    sections: [
      {
        title: "Food Kit Distribution",
        content:
          "Each food kit contained ten kilograms of rice, two kilograms of dal, one litre of cooking oil, salt, chilli powder, turmeric, soap, and cloth masks. Kits were assembled at regional centres and distributed through local church networks and community leaders who knew exactly which families were most in need. Strict COVID safety protocols were followed during all distributions, including masking, sanitisation, and physical distancing.",
      },
      {
        title: "Hygiene & Prevention",
        content:
          "Alongside food distribution, our teams conducted community-level hygiene education using locally translated materials. We distributed thousands of bars of soap, bottles of hand sanitiser, and reusable cloth masks. In communities where misinformation about the virus was widespread, our health workers provided accurate, reassuring information that helped families protect themselves without succumbing to panic.",
      },
      {
        title: "Ongoing Community Support",
        content:
          "The economic impact of the pandemic continued long after lockdowns were lifted. Many families fell into debt, lost their homes, or saw their children drop out of school. Our post-pandemic support included livelihood restoration assistance, back-to-school campaigns for children who had missed more than a year of education, and counselling for families dealing with grief and trauma.",
      },
    ],
    stats: [
      { value: "12,000+", label: "Food kits distributed" },
      { value: "3", label: "States covered" },
      { value: "48,000+", label: "People fed" },
      { value: "2", label: "Years of sustained response" },
    ],
  },
  {
    slug: "pastor",
    number: "08",
    title: "Minister & Pastor Support",
    titleHtml: "Minister & <em>Pastor Support</em>",
    tagline: "Strengthening those who strengthen others",
    description:
      "Training seminars, resource provision, and fellowship networks that equip ministers and pastors serving in under-resourced faith communities.",
    location: "Faith Communities",
    icon: "home",
    body: [
      "Across rural South India, thousands of ministers and pastors serve small faith communities with extraordinary dedication and very little support. Many have no formal theological training. Most receive no regular salary. They serve out of calling and conviction, often working second jobs to support their families while shepherding their congregations through the daily realities of poverty, illness, and social marginalisation.",
      "Aenon Ministries\u2019 pastor support program exists to come alongside these faithful servants. We provide training seminars that strengthen their biblical knowledge, counselling skills, and community leadership capacity. We offer practical resources including study materials, reference libraries, and modest financial support during times of personal crisis. And we create spaces for fellowship and mutual encouragement, because ministry in isolated rural settings can be profoundly lonely work.",
      "More than three hundred ministers and pastors are connected to our support network. We host four seminars per year in rotating locations to maximise accessibility. Fifty communities are served by pastors who have participated in our training. The ripple effect is immeasurable \u2014 when a pastor is equipped and encouraged, every family in their care benefits.",
    ],
    sections: [
      {
        title: "Training Seminars",
        content:
          "Our training seminars are held quarterly and cover practical topics including biblical exposition, pastoral counselling, family ministry, community development, financial management, and leadership ethics. Seminars are designed to be accessible to ministers with varying levels of formal education and are conducted in local languages. Each seminar includes time for questions, discussion, and peer learning.",
      },
      {
        title: "Resource Provision",
        content:
          "Many of the pastors we serve have never owned a study Bible or a commentary. We provide curated resource kits that include study Bibles, teaching materials, children\u2019s ministry resources, and practical ministry guides. We also maintain small lending libraries at regional centres where pastors can borrow reference materials. For pastors facing personal financial crises \u2014 medical emergencies, family bereavements, natural disasters \u2014 we offer modest emergency assistance.",
      },
      {
        title: "Fellowship & Encouragement",
        content:
          "Ministry in remote rural communities can be isolating. Our fellowship gatherings bring pastors together for mutual encouragement, prayer, shared meals, and honest conversation about the joys and challenges of their calling. Regional pastor networks meet monthly, and an annual retreat provides extended time for rest, reflection, and renewal. These gatherings remind pastors that they are not alone \u2014 that they are part of a wider community of servants walking the same road.",
      },
    ],
    stats: [
      { value: "300+", label: "Ministers supported" },
      { value: "4", label: "Seminars per year" },
      { value: "50+", label: "Communities served" },
      { value: "10+", label: "Years of partnership" },
    ],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getAllProgramSlugs(): string[] {
  return programs.map((p) => p.slug);
}
