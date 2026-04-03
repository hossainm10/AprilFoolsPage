import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
export default function App(){
	
	const [clicked,setClicked]=  useState(false);
	return (
		<>

		<p style ={{ color : "blue", textAlign:'center',fontSize:'300%'}}> Will you go out with me? </p>
		<div 
		style={{
			display:"flex",
			gap:"32px",
			justifyContent:"center",
			alignItems:"center",
			height:"100vh"
		}}
		>
			<Btn_Yes big={clicked} />
		 	<Btn_No onClick={() => setClicked(clicked+1)} />	
		</div>
		</>
	)
}



export function Btn_Yes( { big } : {big:number}) {
	const navigate=useNavigate()
	return (
		
		<button
	      	onClick={() => navigate('/success')}
		style={{
			background:"blue",
			color:"white",
			borderRadius:"8px",
			padding: `${24+big*12}px ${48+big*24}px`,
			fontSize: `${1.5+big*0.5}rem`,
			transition: "all 0.3s ease"
			
		}}>Yes
		</button>
	);


		
}

export function Btn_No({ onClick }:{onClick: () => void}){

	return (
		
		<button onClick={onClick} 
		style={{
			background:"blue",
			color:"white",
			borderRadius:"8px",
			padding: "24px 48px",
			fontSize:"1.5rem"
		}}
		>
			No
		</button>
	);
}
