import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import docs from '../data/documentation.md';

function About() {
	const [content, setContent] = useState('');

	useEffect(() => {
		fetch(docs)
			.then((res) => res.text())
			.then((text) => setContent(text));
	}, []);

	console.log(content);

	return (
		<div className="post max-w-6xl mx-auto px-4">
			<ReactMarkdown children={content} className="markdown" />
		</div>
	);
}

export default About;
