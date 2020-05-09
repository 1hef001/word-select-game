import React, { Component } from 'react';

export class WordTable extends Component {
	/** classify the words according to length and display
	 * @returns {JSX.Element} - returns JSX markup
	 */
	classifyLength = () => {
		let elements = {};

		this.props.usedWords.forEach((el, index) => {
			let length = el.length;
			// we have the length
			// elements[length] = [];
			if (elements[length]) {
				elements[length].push(el);
			} else {
				elements[length] = [];
				elements[length].push(el);
			}
		});

		return (
			<div style={{ display: 'grid' }}>
				{Object.values(elements).map((el, index) => {
					return (
						<div>
							<h2>{el[0].length} letter words </h2>
							{el.map((word) => {
								return <div key={index}>{word}</div>;
							})}
						</div>
					);
				})}
			</div>
		);
	};

	render() {
		return (
			<div>
				<h1>Your words : </h1>
				{this.classifyLength()}
			</div>
		);
	}
}

export default WordTable;
