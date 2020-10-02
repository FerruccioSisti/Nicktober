import React from 'react';
import Roulette from './components/roulette';
import styled from 'styled-components';
import { IRouletteItem } from './models';
import image1 from './assets/images/1.svg';
import image2 from './assets/images/2.svg';
import image3 from './assets/images/3.svg';
import csgo from './assets/images/csgo.png';
import testpic from './assets/images/test.png';
import nickhalfer from './assets/images/nickhalfer.png';
import nickdoubler from './assets/images/nickdoubler.png';
import nickcopy from './assets/images/nickcopy.png';
import nicksteal from './assets/images/nicksteal.png';
import ndouble from './assets/images/ndouble.png';
import extraspins from './assets/images/extraspins.png';
import nickrollagain from './assets/images/nickrollagain.png';
import nickquest from './assets/images/nickquest.png';
import extraroll from './assets/images/extraroll.png';
import copyfirst from './assets/images/copyfirst.png';
import copyrand from './assets/images/copyrand.png';
import halfnickbucks from './assets/images/halfnickbucks.png';
import nicklosepower from './assets/images/nicklosepower.png';
import nickspeech from './assets/images/nickspeech.png';
import loseall from './assets/images/loseall.png';
import donatecoin from './assets/images/donatecoin.png';
import nickswap from './assets/images/nickswap.png';
import donatespin from './assets/images/donatespin.png';
import dab from './assets/images/dab.png';

const ContentWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: black;
`;
const RouletteHeight = 680;
const itemHeight = 250;
var randnum = Math.floor(1 + Math.random() * (100));
var n = 0;
//start with positive
if(randnum > 0 && randnum <= 2){
	n = 0;
}
else if(randnum > 2 && randnum <= 4){
	n = 1;
}
else if(randnum > 4 && randnum <= 5){
	n = 2;
}
else if(randnum > 5 && randnum <= 16){
	n = 3;
}
else if(randnum > 16 && randnum <= 18){
	n = 4;
}
else if(randnum > 18 && randnum <= 20){
	n = 5;
}
else if(randnum > 20 && randnum <= 25){
	n = 6;
} //start neutral
else if(randnum > 25 && randnum <= 30){
	n = 7;
}
else if(randnum > 30 && randnum <= 40){
	n = 8;
}
else if(randnum > 40 && randnum <= 50){
	n = 9;
}
else if(randnum > 50 && randnum <= 60){
	n = 10;
}
else if(randnum > 60 && randnum <= 65){
	n = 11;
}
else if(randnum > 65 && randnum <= 75){
	n = 12;
} //start negative
else if(randnum > 75 && randnum <= 77){
	n = 13;
}
else if(randnum > 77 && randnum <= 78){
	n = 14;
}
else if(randnum > 78 && randnum <= 84){
	n = 15;
}
else if(randnum > 84 && randnum <= 96){
	n = 16;
}
else if(randnum > 96 && randnum <= 100){
	n = 17;
}

const items: IRouletteItem[] = [{ 'id': 18, 'title': 'ITS A KNIFE', 'subtitle': '', 'image': csgo },
{ 'id': 0, 'title': 'Gain 1 Nickhalfer', 'subtitle': '', 'image': nickhalfer },
{ 'id': 1, 'title': 'Gain 1 Nickcopy', 'subtitle': '', 'image': nickcopy },
{ 'id': 2, 'title': 'Gain 1 Nickdoubler', 'subtitle': '', 'image': nickdoubler }, 
{ 'id': 3, 'title': 'Steal 2 NickBucks from the person below you', 'subtitle': '', 'image': nicksteal },
{ 'id': 4, 'title': 'Double your Nick Bucks', 'subtitle': '', 'image': ndouble },
{ 'id': 5, 'title': 'Copy the NickBucks of the person in first place', 'subtitle': '', 'image': copyfirst },
{ 'id': 6, 'title': 'Gain 2 extra Nick Spins this week', 'subtitle': '', 'image': extraspins },
{ 'id': 7, 'title': 'Copy a random persons NickBucks', 'subtitle': '', 'image': copyrand },
{ 'id': 8, 'title': 'Hit a FAT dab', 'subtitle': '', 'image': dab }, 
{ 'id': 9, 'title': 'Spin again!', 'subtitle': '', 'image': nickrollagain },
{ 'id': 10, 'title': 'Embark on a NickQuest!', 'subtitle': '', 'image': nickquest },
{ 'id': 11, 'title': 'Give a speech on a topic provided by Nick', 'subtitle': '', 'image': nickspeech },
{ 'id': 12, 'title': 'Donate one of your wheel spins to somebody random', 'subtitle': '', 'image': donatespin },
{ 'id': 13, 'title': 'Your NickBucks have been halved', 'subtitle': '', 'image': halfnickbucks },
{ 'id': 14, 'title': 'You lose all NickBucks but 1', 'subtitle': '', 'image': loseall },
{ 'id': 15, 'title': 'Swap NickBanks with last place', 'subtitle': '', 'image': nickswap },
{ 'id': 16, 'title': 'You donate a NickBuck to one person', 'subtitle': '', 'image': donatecoin },
{ 'id': 17, 'title': 'You lose a Nick power up', 'subtitle': '', 'image': nicklosepower }];


const prizes: IRouletteItem[] = [{ 'id': 0, 'title': 'Gain 1 Nickhalfer', 'subtitle': '', 'image': nickhalfer },
{ 'id': 1, 'title': 'Gain 1 Nickcopy', 'subtitle': '', 'image': nickcopy },
{ 'id': 2, 'title': 'Gain 1 Nickdoubler', 'subtitle': '', 'image': nickdoubler }, 
{ 'id': 3, 'title': 'Steal 2 NickBucks from the person below you', 'subtitle': '', 'image': nicksteal },
{ 'id': 4, 'title': 'Double your Nick Bucks', 'subtitle': '', 'image': ndouble },
{ 'id': 5, 'title': 'Copy the NickBucks of the person in first place', 'subtitle': '', 'image': copyfirst },
{ 'id': 6, 'title': 'Gain 2 extra Nick Spins this week', 'subtitle': '', 'image': extraspins },
{ 'id': 7, 'title': 'Copy a random persons NickBucks', 'subtitle': '', 'image': copyrand },
{ 'id': 8, 'title': 'Hit a FAT dab', 'subtitle': '', 'image': dab }, 
{ 'id': 9, 'title': 'Spin again!', 'subtitle': '', 'image': nickrollagain },
{ 'id': 10, 'title': 'Embark on a NickQuest!', 'subtitle': '', 'image': nickquest },
{ 'id': 11, 'title': 'Give a speech on a topic provided by Nick', 'subtitle': '', 'image': nickspeech },
{ 'id': 12, 'title': 'Donate one of your wheel spins to somebody random', 'subtitle': '', 'image': donatespin },
{ 'id': 13, 'title': 'Your NickBucks have been halved', 'subtitle': '', 'image': halfnickbucks },
{ 'id': 14, 'title': 'You lose all your NickBucks but 1', 'subtitle': '', 'image': loseall },
{ 'id': 15, 'title': 'Swap NickBanks with last place', 'subtitle': '', 'image': nickswap },
{ 'id': 16, 'title': 'You donate a NickBuck to one person', 'subtitle': '', 'image': donatecoin },
{ 'id': 17, 'title': 'You lose a Nick power up', 'subtitle': '', 'image': nicklosepower }];


export default class App extends React.Component {

	render() {
		return (
			<ContentWrapper>
				<Roulette data={items}
				          prize={prizes[n]}
				          itemHeight={itemHeight}
				          rouletteHeight={RouletteHeight}
				          picked={false}
				          canPick={false}
				          animationDuration={3000}
				/>
				<Roulette data={items}
				          prize={prizes[n]}
				          itemHeight={itemHeight}
				          rouletteHeight={RouletteHeight}
				          picked={false}
				          canPick={false}
				          animationDuration={5000}
				/>
				<Roulette data={items}
				          prize={prizes[n]}
				          itemHeight={itemHeight}
				          rouletteHeight={RouletteHeight}
				          picked={false}
				          canPick={false}
				          animationDuration={6000}
				/>
			</ContentWrapper>
		);
	}
}
