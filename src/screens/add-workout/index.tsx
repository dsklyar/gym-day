import { statusBarHeight, usableHeight, windowWidth } from "@/dimensions";
import React from "react";
import styled from "styled-components/native";

export const AddWorkoutScreen: React.FC = () => {
	return (
		<Container/>
	);
};

const Container = styled.View`
	height: ${usableHeight};
	width: ${windowWidth};
	margin-top: ${statusBarHeight};
	background-color: orange
`;