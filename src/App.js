import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';
import Expenselist from './components/Expencelist';
import ExpenseForm from './components/ExpenceForm';
import  BarChart from './components/piechart';




function App() {
	const [income, setIncome] = useState([]);
	const [expense, setExpense] = useState([]);
	const [total, setTotal] = useState([]);
	const [temp,settemp]=useState(0);
	const [temps,settemps]=useState(0);



	useEffect(() => {
		let temp = 0;
		for(let i = 0; i < income.length; i++) {
			temp += parseInt(income[i].price);
		} settemp(temp);
		let temps = 0;
		for(let j = 0; j < expense.length; j++){
			temps += parseInt(expense[j].price);

		} settemps(temps)
		let tet = temp-temps;
	
	

		setTotal(tet);
	}, [income][expense]);




	

	

	return (
		
		<div className="App">
			
			<Header total={total} />
			
			<div><span id='icom'>${temp}</span></div>
			<IncomeForm income={income} setIncome={setIncome} settemp={settemp} />
			<IncomeList income={income} setIncome={setIncome}  />
			<div className='pie'>
        	< BarChart income={temp} expense={temps} />

      			</div>
			<div><span id='icom1'>${temps}</span></div>
			<ExpenseForm expense={expense} setExpense={setExpense} settemps={settemps}/>
			<Expenselist expense={expense} setExpense={setExpense}/>
			
			
			
 

		
			</div>
	);
}

export default App;
