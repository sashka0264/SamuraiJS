import React, { Component } from "react";
import style from "./Music.module.css";

class Music extends Component {
	constructor() {
		super()
		this.url = "https://storage.lightaudio.ru/39922e6c/246ebb18/Skylike%20%E2%80%94%20Dawn.mp3";
		this.audio = new Audio(this.url);
	}

	play = () => {
		this.setState({ play: true, pause: false })
		this.audio.play();
	}

	pause = () => {
		this.setState({ play: false, pause: true })
		this.audio.pause();
	}

	render() {
		return (
			<div className={style.appMusic}>
				<div>
					<div>Dawn - Skylike </div>
					<button onClick={this.play}>Play</button>
					<button onClick={this.pause}>Pause</button>
				</div>
			</div>
		);
	}
};

export default Music;