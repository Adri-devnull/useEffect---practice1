import styled from 'styled-components';

const StyledAdvice = styled.div`
	border-radius: 10px;
	background-color: #313a48;
	box-shadow: 30px 50px 80px 0px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	height: 290px;
	justify-content: space-evenly;
	position: relative;

	@media screen and (min-width: 1024px) {
		width: 500px;
	}
`;

const StyledAdviceNumber = styled.span`
	color: #53ffaa;
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 3.457px;
	text-transform: uppercase;
	font-weight: 100;
`;

const StyledAdviceText = styled.p`
	color: #cee3e9;
	text-align: center;
	font-size: 24px;
	font-weight: 800;
	letter-spacing: -0.257px;
`;

const StyledAdviceDice = styled.button`
	position: absolute;
	width: 64px;
	height: 64px;
	background-color: #53ffaa;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	top: 305px;
	border: none;

	@media screen and (min-width: 1024px) {
		cursor: pointer;
		&:hover {
			box-shadow: 0 0 20px rgba(83, 255, 170, 1);
		}
	}
`;

const StyledAdviceBar = styled.div`
	padding-bottom: 20px;
`;

export {
	StyledAdvice,
	StyledAdviceNumber,
	StyledAdviceText,
	StyledAdviceDice,
	StyledAdviceBar
};
