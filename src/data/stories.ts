export interface Story {
  slug: string;
  title: string;
  titleHtml: string;
  subtitle: string;
  category: string;
  location: string;
  icon: string;
  excerpt: string;
  body: string[];
  quotes: { text: string; attribution?: string }[];
  ctaLabel: string;
  ctaProgram: string;
}

export const stories: Story[] = [
  {
    slug: "meena",
    title: "First in Her Family to Complete Secondary School",
    titleHtml: 'First in Her Family to Complete <em>Secondary School</em>',
    subtitle:
      "How a scholarship changed the course of one family's history \u2014 and gave a sixteen-year-old a future she had never dared to imagine.",
    category: "Education",
    location: "Tirunelveli, Tamil Nadu",
    icon: "edu",
    excerpt:
      "Meena, 16, became the first in her family to finish Class 10 with support from our scholarship program.",
    body: [
      "Meena grew up in a small farming village on the outskirts of Tirunelveli, in a household where education had always been a luxury no one could afford. Her father worked as a daily-wage labourer on other people\u2019s land. Her mother stitched clothes by hand, earning just enough to keep food on the table. Meena was the third of four children, and like her siblings before her, she was expected to leave school after Class 8 and begin contributing to the household income.",
      "When a community worker from Aenon Ministries visited her village and began talking about a scholarship program, Meena\u2019s mother almost turned her away. But something made her listen. Within a month, Meena was enrolled in Class 9 with full support \u2014 fees paid, books provided, and a mentor assigned to check in with her every week.",
      "The road was not easy. Meena was behind her classmates in several subjects and had to spend long evenings catching up at our tuition centre. But she was determined. In March of last year, Meena sat her Class 10 board examinations. She passed with distinction \u2014 the first person in her family\u2019s history to complete secondary school.",
      "Meena now wants to become a nurse. She visits her old tuition centre every week \u2014 not as a student, but as a volunteer tutor for the children walking the same road she once walked.",
    ],
    quotes: [
      {
        text: "\u201cI used to watch the other girls leave for school in the morning and feel a kind of ache I couldn\u2019t name. I wanted to learn. I just didn\u2019t think it was something that could happen for someone like me.\u201d",
      },
      {
        text: "\u201cWhen I saw her results, I cried. I never imagined this day would come for my daughter. Or for any of us.\u201d",
        attribution: "Meena\u2019s mother",
      },
    ],
    ctaLabel: "Support Education Programs",
    ctaProgram: "education",
  },
  {
    slug: "floods",
    title: "200 Families Rebuild After the 2023 Floods",
    titleHtml: '200 Families Rebuild After <em>the 2023 Floods</em>',
    subtitle:
      "When the Krishna River broke its banks in September 2023, our team was on the ground within 48 hours \u2014 and stayed for months.",
    category: "Disaster Relief",
    location: "Guntur District, Andhra Pradesh",
    icon: "home",
    excerpt:
      "After the 2023 floods, our team delivered food, clean water, and reconstruction support within 48 hours.",
    body: [
      "The rains had been relentless for two weeks. On the night of September 14th, 2023, the Krishna River broke its banks in Guntur District. By morning, over 200 families had lost their homes, their belongings, and in some cases, their livelihoods. Fields were submerged. The roads into several villages were completely impassable.",
      "Aenon Ministries\u2019 disaster response team received the call at 6am on September 15th. By nightfall, our team had reached two of the five affected villages, wading through knee-deep water to deliver supplies to families who had been stranded on rooftops since the night before.",
      "In the weeks that followed, our team distributed food kits to 200 families. Clean drinking water was our most urgent need \u2014 we installed three portable water filtration units serving over 1,200 people. The longer rebuilding process took six months. Working with local builders, our team helped repair 47 homes. Today, the villages are rebuilt. The children are back in school. The fields are green again.",
    ],
    quotes: [
      {
        text: "\u201cThey came when no one else came. When the government trucks couldn\u2019t get through, these people were already there.\u201d",
        attribution: "Village panchayat leader, Guntur District",
      },
    ],
    ctaLabel: "Support Disaster Relief",
    ctaProgram: "relief",
  },
  {
    slug: "clinic",
    title: "Mobile Clinic Reaches a Village for the First Time",
    titleHtml: 'Mobile Clinic Reaches a Village <em>for the First Time</em>',
    subtitle:
      "For decades, this village had no access to medical care. One day changed that.",
    category: "Healthcare",
    location: "Chamarajanagar District, Karnataka",
    icon: "health",
    excerpt:
      "A village 40 km from the nearest town received its first medical camp, serving 180 patients in one day.",
    body: [
      "The village of Honnali sits 42 kilometres from the nearest government hospital, along a road that becomes impassable during the monsoon. For decades, residents managed without regular medical care \u2014 treating fevers with home remedies, delivering babies at home, and hoping that the health problems of their elderly parents would resolve on their own.",
      "When our mobile clinic arrived on a Tuesday morning in February, there was already a queue of over 80 people waiting at 7am. By the end of the day, our team had seen 180 patients.",
      "Forty women received maternal health screenings \u2014 many for the first time. Three cases of high-risk pregnancy were identified and referred to the district hospital. The Honnali mobile clinic is now a monthly fixture, with a community health committee formed to coordinate between visits.",
    ],
    quotes: [
      {
        text: "\u201cWe found three cases of undiagnosed diabetes. Two women with dangerously high blood pressure who had never had it checked. And forty women who had never had a maternal health screening in their lives.\u201d",
        attribution: "Dr. Anita Rao, Aenon Ministries Mobile Clinic Team",
      },
    ],
    ctaLabel: "Support Healthcare Programs",
    ctaProgram: "healthcare",
  },
  {
    slug: "lakshmi",
    title: "Lakshmi Starts Her Own Tailoring Business",
    titleHtml: 'Lakshmi Starts Her Own <em>Tailoring Business</em>',
    subtitle:
      "A six-month vocational training program gave a single mother not just a skill \u2014 but the confidence to build something of her own.",
    category: "Women & Children",
    location: "Vellore District, Tamil Nadu",
    icon: "users",
    excerpt:
      "A single mother completed vocational training and now runs her own tailoring business, employing two apprentices.",
    body: [
      "When Lakshmi\u2019s husband left the family four years ago, she was left with two young children, no income, and no marketable skills. She spent two years working odd jobs \u2014 washing dishes, carrying bricks at construction sites, harvesting crops for daily wages that barely covered food.",
      "Lakshmi completed the six-month vocational training program with distinction. Our microfinance partner helped her access a small loan of \u20b915,000 to purchase a sewing machine and initial fabric stock. Within six months of graduating, Lakshmi had a steady roster of customers. Within a year, she had taken on two neighbouring women as apprentices.",
      "\u201cI used to think I needed someone to take care of me,\u201d she said on a recent visit. \u201cNow I know that I can take care of myself. And others too.\u201d",
    ],
    quotes: [
      {
        text: "\u201cThe first time I made a blouse that someone actually paid for, I sat down and cried. Not because it was hard. Because it was mine.\u201d",
      },
    ],
    ctaLabel: "Support Women\u2019s Programs",
    ctaProgram: "women",
  },
  {
    slug: "water",
    title: "Clean Water Reaches a Remote Tribal Village",
    titleHtml: 'Clean Water Reaches a <em>Remote Tribal Village</em>',
    subtitle:
      "For three generations, the people of this village walked 4 kilometres each day for water. Then everything changed.",
    category: "Village Outreach",
    location: "Adilabad District, Telangana",
    icon: "globe",
    excerpt:
      "A bore well brought clean water to 80 families who had walked 4 km daily for generations.",
    body: [
      "The village of Keslapur in Adilabad District is home to around 80 families from the Gond tribal community. For as long as anyone can remember, women and girls had walked 4 kilometres each morning to a seasonal stream to collect water. During the dry season, even that stream ran low.",
      "Working with the village council and a hydrogeology consultant, we identified a suitable location for a bore well. The community contributed their own labour for the surrounding infrastructure. In November 2022, clean water flowed in Keslapur for the first time in recorded history. A community water committee of seven women now manages the pump. The girls are back in school full-time.",
    ],
    quotes: [
      {
        text: "\u201cMy grandmother carried water. My mother carried water. I carried water. I thought my daughter would carry water too. I didn\u2019t know there was another way.\u201d",
        attribution: "Sunita, resident of Keslapur",
      },
    ],
    ctaLabel: "Support Village Outreach",
    ctaProgram: "outreach",
  },
  {
    slug: "nightschool",
    title: "Night School Transforms Adult Literacy",
    titleHtml: 'Night School Transforms <em>Adult Literacy</em>',
    subtitle:
      "Forty farmers. One classroom. One year. Thirty-two people who can now read their own names \u2014 and so much more.",
    category: "Education",
    location: "Tumkur District, Karnataka",
    icon: "edu",
    excerpt:
      "An adult literacy program helped 32 farmers learn to read, write, and open bank accounts for the first time.",
    body: [
      "The paddy fields of Tumkur District are farmed by generations of families who have never needed to read. Until now. Government welfare schemes, banking services, and digital payment systems have made literacy not just useful but essential. And yet, for many adult farmers in rural Karnataka, illiteracy has never been addressed.",
      "Aenon Ministries\u2019 adult literacy program runs classes from 7pm to 9pm, after the farming day is done. The classroom is a local community hall. Forty farmers enrolled in the 2023 cohort. Thirty-two completed the program and passed the basic literacy assessment. Several have gone on to open bank accounts independently for the first time.",
    ],
    quotes: [
      {
        text: "\u201cI am 52 years old. I signed my thumb for everything my whole life \u2014 land records, loan documents, everything. Last month I signed my own name for the first time. My hand was shaking.\u201d",
        attribution: "Ramu, farmer, Tumkur District",
      },
    ],
    ctaLabel: "Support Education Programs",
    ctaProgram: "education",
  },
  {
    slug: "covid-relief",
    title: "12,000 Food Kits in the Darkest Days",
    titleHtml: '12,000 Food Kits in <em>the Darkest Days</em>',
    subtitle:
      "When lockdown stripped millions of daily-wage workers of their income overnight, our teams were already moving.",
    category: "COVID Relief",
    location: "Tamil Nadu \u00b7 Karnataka \u00b7 Andhra Pradesh",
    icon: "alert",
    excerpt:
      "During COVID-19, we distributed 12,000 food kits reaching 48,000 people across three states.",
    body: [
      "On March 24th, 2020, India entered one of the strictest lockdowns in the world. Within 24 hours, construction sites were empty, markets closed, auto-rickshaws off the road. For millions of daily-wage workers across South India \u2014 no savings, no ration cards, no family nearby \u2014 it was a catastrophe that arrived without warning.",
      "Within two weeks, we had assembled a network of 47 volunteer distributors across three states. Each food kit contained rice, dal, cooking oil, salt, spices, soap, and a mask \u2014 enough for a family of four for two weeks. By the time the COVID-19 relief program wound down in 2022, we had distributed 12,000 food kits reaching an estimated 48,000 people.",
    ],
    quotes: [
      {
        text: "\u201cWe had \u20b9200 left. That was everything. When the food kit arrived, my children ate properly for the first time in four days.\u201d",
        attribution: "Migrant worker, Chennai",
      },
    ],
    ctaLabel: "Support Our Work",
    ctaProgram: "relief",
  },
];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function getAllStorySlugs(): string[] {
  return stories.map((s) => s.slug);
}
