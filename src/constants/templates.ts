export const templates = [
	{
		id: 'blank',
		label: 'Blank Document',
		imageUrl: '/templates/blank-document.svg',
		initialContent: '',
	},
	{
		id: 'business_letter',
		label: 'Business Letter',
		imageUrl: '/templates/business-letter.svg',
		initialContent: `
			<p style="line-height: normal">
	<span style="font-size: 24px"><u>[YOUR COMPANY] </u></span>
</p>
<p style="line-height: normal"></p>
<ul>
	<li><p style="line-height: normal">123 YOUR STREET</p></li>
	<li><p style="line-height: normal">YOUR CITY, ST 123245</p></li>
	<li><p style="line-height: normal">(123) 456-789</p></li>
	<li>
		<p style="line-height: normal">
			<a
				target="_blank"
				rel="noopener noreferrer nofollow"
				href="mailto:MYEMAIL@EXAMPLE.COM"
				>MYEMAIL@EXAMPLE.COM</a
			>
		</p>
	</li>
</ul>
<p style="line-height: normal">
	<mark data-color="#f8f8f8" style="background-color: #f8f8f8; color: inherit">
		September 24, 20XX
	</mark>
</p>
<p style="line-height: normal"></p>
<p style="line-height: normal"></p>
<p style="line-height: 2">Dear Ms. Reader,</p>
<p style="line-height: 2"></p>
<p style="line-height: 2">
	Contrary to popular belief, Lorem Ipsum is not simply random text. It has
	roots in a piece of classical Latin literature from 45 BC, making it over 2000
	years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
	Virginia, looked up one of the more obscure Latin words, consectetur, from a
	Lorem Ipsum passage, and going through the cites of the word in classical
	literature, discovered the undoubtable source. Lorem Ipsum comes from sections
	1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
	and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
	of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
	"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
</p>
<p style="line-height: 2"></p>
<p style="line-height: 2">Sincerely,</p>
<p style="line-height: 2"></p>
<p style="line-height: 2">
	<strong
		><mark
			data-color="#f1eded"
			style="background-color: #f1eded; color: inherit"
		>
			[YOUR NAME]
		</mark></strong
	>
</p>

		`,
	},
	{
		id: 'cover_letter',
		label: 'Cover Letter',
		imageUrl: '/templates/cover-letter.svg',
		initialContent: ``,
	},
	{
		id: 'letter',
		label: 'Letter',
		imageUrl: '/templates/letter.svg',
		initialContent: ``,
	},
	{
		id: 'project_proposal',
		label: 'Project Proposal',
		imageUrl: '/templates/project-proposal.svg',
		initialContent: ``,
	},
	{
		id: 'resume',
		label: 'Resume',
		imageUrl: '/templates/resume.svg',
		initialContent: ``,
	},
	{
		id: 'software_proposal',
		label: 'Software Proposal',
		imageUrl: '/templates/software-proposal.svg',
		initialContent: ``,
	},
]
