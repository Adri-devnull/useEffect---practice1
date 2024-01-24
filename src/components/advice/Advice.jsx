import { useEffect, useState } from 'react';
import {
	StyledAdvice,
	StyledAdviceBar,
	StyledAdviceDice,
	StyledAdviceNumber,
	StyledAdviceText
} from './styles';

const Advice = () => {
	const [advice, setAdvice] = useState({});

	useEffect(() => {
		adviceFetch(setAdvice);
	}, []);

	if (!advice.id) return <h1>Loading</h1>;
	return (
		<StyledAdvice>
			<StyledAdviceNumber>ADVICE #{advice.id}</StyledAdviceNumber>
			<StyledAdviceText>{advice.advice}</StyledAdviceText>
			<StyledAdviceBar>
				<img src='/assets/images/pattern-divider-mobile.svg' alt='' />
			</StyledAdviceBar>
			<StyledAdviceDice onClick={() => adviceFetch(setAdvice)}>
				<img src='/assets/images/icon-dice.svg' alt='' />
			</StyledAdviceDice>
		</StyledAdvice>
	);
};

const adviceFetch = async setAdvice => {
	const response = await fetch('https://api.adviceslip.com/advice');
	const data = await response.json();
	setAdvice(data.slip);
};
export default Advice;
