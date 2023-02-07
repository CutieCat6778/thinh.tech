"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ModeButton() {
	const [mode, setMode] = useState(""); 
	const [trigger, setTrigger] = useState(false); 

	function SwitchMode() {
		const newMode = mode === "light" ? "dark" : "light";
		setMode(newMode);
		if(mode != "light") {
			localStorage.setItem("theme", "light")
		} else {
			localStorage.setItem("theme", "dark")
		}
	}

	useEffect(() => {
		if(!trigger) {
			if ( localStorage.getItem("theme") === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
				localStorage.setItem("theme", "dark") 
				setMode("dark")
				setTrigger(true);
			} else {
				localStorage.setItem("theme", "light") 
				setMode("light")
				setTrigger(true);
			}
		} else {
			if(mode == "light") {
				document.documentElement.classList.remove("dark");
			} else {
				document.documentElement.classList.add("dark");
			}
		}
	}, [mode, setMode, trigger]);

	if(mode == "") {
		return null
	} else if(mode === "dark") {
		return (
			<div className="cursor-pointer" onClick={SwitchMode}>
				<Image src="/sun_white.svg" height={32} width={32} alt="Sun icon"/>
			</div>
		)
	} else {
		return (
			<div className="cursor-pointer" onClick={SwitchMode}>
				<Image src="/moon.svg" height={32} width={32} alt="Moon icon"/>
			</div>
		)
	}
}
