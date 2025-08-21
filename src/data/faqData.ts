export type ParagraphContent =
  | { type: "text"; value: string }
  | { type: "link"; value: string; href: string }
  | { type: "list"; items: string[] };

export interface FaqContent {
  type: "paragraph";
  children: ParagraphContent[];
}
export interface FaqData{
	title: string;
	content: FaqContent[];
}

export const faqData : FaqData[] = [
	{
		title: "When are classes held?",
		content: [
			{
				type: "paragraph",
				children: [
					{type: "text", value: "We have two sessions per year: one in the fall from September to early December, and another in winter/spring from mid-January to early April. Each session consists of 10 classes. The specific dates of classes will be posted on the website."},
					{ type: "text", value: "Belly dance classes are held on Mondays and fusion and Fat Chance Belly Dance®Style are on Thursdays. See the classes page for more details."}
				],
			},
		],		
	},
	{
		title: "Where are classes held? How can I find the studio?",
		content: [
			{
				type: "paragraph",
				children: [
					{type: "text", value: "We have all of our classes at the lovely Saskatoon Salsa Dance Co. studios at 96 33rd Street East. Both studios are upstairs. After you register, we will provide you with the door access code.The big studio (Monday classes) is to the right at the top of the stairs and to get to the green studio (Thursday classes), turn left at the top of the stairs and head to the end of the hallway."}
				],
			},
		],
	},
	{
		title: "How do I know which class to choose?",
		content: [
			{
				type: "paragraph",
				children: [
					{type: "text", value: "If you are new to belly dance, then our Monday beginner class is perfect for you. The Monday class with Melanie is more suited to dancers with some belly dance experience who want to learn more about this lovely art form and dance to a range of traditional to modern music. If you enjoy a blend of belly dance with more western styles and influences, then our Thursday fusion class will be a good fit. Finally, for something unique and an opportunity to develop improvisation skills with a strong technical style and group collaboration, then check out FCBD® class."},
				],
			},
		],
	},
	{
		title: "What should I wear to class?",
		content: [
			{
				type: "paragraph",
				children: [
					{type: "text", value: "Wear stretchy, breathable, and comfortable clothing. It is helpful for your instructor if your clothing isn’t too loose. If you have a coin scarf or fringe scarf to wear on your hips, please do; otherwise your instructor can loan you one."},
					{type: "text", value: "Belly dancers often dance with bare feet, although many of us wear dance shoes to class. Common and appropriate options include leather or canvas ballet slippers, 'foot undies', or jazz shoes."},
				],
			},
			
		],
	},
	{
		title: "How do I sign up for classes?",
		content: [
			{
				type: "paragraph",
				children: [
					{ type: "text", value: "Visit our "},
					{ type: "link", value: "Registration", href: "/classes/registration"},
					{ type: "text", value: " page to read about the registration process, then complete the Google form."},
				],
			},
			

		],
	},
	{
		title: "What is the cost for classes?",
		content: [
			{
				type: "paragraph",
				children: [
					{ type: "list",
						items: [
							"Beginner belly dance with Jodie is $150",
							"Belly dance with Melanie (intermediate to advanced) is $185",
							"Fusion with Quinn is $185",
							"FCBD® with Quinn and Melanie is $120",
							"Belly dance + fusion is $300",
							"FCBD® bundle price (if taking any other class or classes) is $100",
						],
					}
				]
			}
			
		]	
	},
	{
		title: "What is the refund policy for classes?",
		content: [
			{
				type: "paragraph",
				children: [
					{ type: "text", value: "Partial refunds may be requested up to 3 days after the first class."}
				],
			},
		],
	},
	{
		title: "Is there a drop-in fee option for classes?",
		content: [
			{
				type: "paragraph",
				children: [
					{ type: "text", value: "There is no drop-in fee option. We rely on registrations in order to know whether the class will be viable."}
				],
			},
		],
	},
	{
		title: "I’m looking for unique entertainment for an event. What can I expect from Desert Beats?",
		content: [
			{
				type: "paragraph",
				children: [
					{ type: "text", value: "We love performing for others and are happy to tailor to your event. We can offer a range of performances, potentially including props such as veils/scarves, finger cymbals, wings, canes, LED, and swords. "},
					{ type: "link", value: "Contact us", href: "/contact"},
					{ type: "text", value: " for more information and for pricing."}
				],
			},
		],
	},
	{
		title: "Where do you recommend I learn more about belly dance?",
		content: [
			{
				type: "paragraph",
				children: [
					{ type: "text", value: "A good way to start is by exploring these dance troupes and performers:"},
					{ type: "text", value: "Local:"},
					{ type: "list", items: [
						"Durga Dance with Victoria - Fire Dancing, Poi, Flow Arts",
						"Tara SPINJA Stratton - Saskatoon, Flow Arts",
						"Dance Egypt Dance Company, Saskatoon",
						"Bedouin Beats, Edmonton, AB",
						"Azura Bellydance, Regina, SK",
					]},
					{ type: "text", value: "National and International:"},
					{ type: "list", items: [
						"Ashley Rhianne, Vancouver, British Columbia",
						"Sadie Marquardt, Denver, Colorado",
						"Datura, Rachel Brice, Portland, Ohio",
						"Blue Lotus Tribe, Chicago",
						"Spiral Skies Belly dance, Billings, Montana"
					]},

				],
			},
		]
	},
];
