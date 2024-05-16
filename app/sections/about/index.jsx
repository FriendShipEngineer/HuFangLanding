"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-row gap-3">
					<img src='yedda.png' alt = "hufang photo" width = "500px" height = "300px"/>
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Hu Fang. I successfully graduated Hunan International Economics University, 
							honored Bachelor`&apos;`s degree in Business English.
						</p>
						<p>
							During my university years, I studied a deep passion for product management and marketing, and I
							consistently engaged in learning new concepts and techniques in this field.
						</p>
						<p>So, officially, I began my professional career in 2020 as Sales Specialist.</p>
						<p className="my-3.5">
							I enjoy having tasks that interest me, which is why I dedicated a significant
							amount of time to working with Product managment.
						</p>
						<p className="my-3.5">
							In May 2021, I had an opportunity to start working as a Product Manager for a
							Moko Technology LTD - one of the biggest Electonics Companies. I was skeptical
							about it at first, but I decided to give it a try, and I don&lsquo;t regret it. Now, I
							thoroughly enjoy working :).
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
