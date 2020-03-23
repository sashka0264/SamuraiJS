import React, { Component } from "react";
import stopMusic from '../../img/stopMusic.png'
import playMusic from '../../img/playMusic.png'
import style from "./Music.module.css";

class Music extends Component {
	constructor() {
		super()
		this.audio = new Audio("http://adastraperaspera.ru/mp3/test.mp3");
		this.audio2 = new Audio("http://adastraperaspera.ru/mp3/Angels_And_Airwaves_-_The_Moon_Atomic_(iPlayer.fm).mp3");
	}

	play = (num) => {
		this.setState({ play: true, pause: false })
		if (num === 1) {
			this.audio.play();
		} else {
			this.audio2.play();
		}
	}

	pause = (num) => {
		this.setState({ play: false, pause: true })
		if (num === 1) {
			this.audio.pause();
		} else {
			this.audio2.pause();
		}
	}

	render() {
		return (
			<div className={style.music}>
				<div>
					<div>Dawn - Skylike </div>
					<img className={style.playMusic} onClick={() => this.play(1)} src={playMusic}/>
					<img className={style.stopMusic} onClick={() => this.pause(1)} src={stopMusic}/>
				</div>

				<div>
					<div>The Moon-Atomic - Angels And Airwaves </div>
					<img className={style.playMusic} onClick={() => this.play(2)} src={playMusic}/>
					<img className={style.stopMusic} onClick={() => this.pause(2)} src={stopMusic}/>
				</div>
			</div>
		);
	}
};

export default Music;