import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface IProps {
	onClick: () => void;
}

export const MenuBarComponent: React.FC<IProps> = ({ onClick }) => {
	return (
		<Container>
			<CircleButton onPress={onClick}/>
		</Container>
	);
};

const Container = styled.View`
	background-color: palevioletred;
	z-index:100;
	position: relative;
	flex: 1;
`;

const CircleButton = styled.TouchableOpacity`
	/* z-index:100; */
	border-radius: 50;
	background-color: red;
	transform: translate(-25px, -30px);
	position: absolute;
	right: 0;
	width: 60;
	height: 60;
`;