import React from "react";
import { Content, Stack, Button } from "@carbon/react";
import quotes from "./text/quotes.json"

function Homepage() {
	return (
   <div className="bg-sky-500 h-full w-full">
	<div className="grid place-content-center">
	  {/* <Content className=" ">	 */}
		
		<div className="absolute bottom-[20rem] left-[25rem] box-border border-solid border-4 border-indigo-500 bg-gray-200 h-[10rem] w-[64rem] p-4 border-4">
			
			<h1 className="flex justify-center pt-1" >PANDA</h1>
			<p className="flex justify-center pt-5">{quotes[1].text}</p>
			
		</div>
			

		  
	  {/* </Content> */}
	   </div>
	   </div>
  );  
};

export default Homepage;