import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

export const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]

const BarChart = ({chartData}) => {
  return <div>
    <Bar data={chartData}/>
    </div>
}

const App = () => {

  const [userData, setUserDate] = useState({
    labels: tenHighestPopulation.map((data) => data.country),
    datasets: [
      {
        indexAxis: 'y',
        label: "Ten most populated countries",
        data: tenHighestPopulation.map((data) => data.population),
        backgroundColor: ['#FFA500'],
      },
    ],
  });

  return (
    <div className='container'>
      <div>
        <h1>30 days of React</h1>
        <h2>World Population</h2>
        <BarChart chartData={userData} />
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)


// const primeStyles = {
//   backgroundColor: '#FD5E53',
// }

// const evenStyles = {
//   backgroundColor: '#21BF73',
// }

// const oddStyles = {
//   backgroundColor: '#FDDB3A',
// }

// const Number = ({number, isPrime, isEven, isOdd}) => {
//   if(isPrime(number)){
//     return <li key={number} style={primeStyles}>{number}</li>
//   }
//   else if(isEven(number)){
//     return <li key={number} style={evenStyles}>{number}</li>
//   }
//   else if(isOdd(number)){
//     return <li key={number} style={oddStyles}>{number}</li>
//   }
// }

// const Numbers = ({numbers, isPrime, isEven, isOdd}) => {
//   const numberList = numbers.map((number) => <Number number={number} isPrime={isPrime} isEven={isEven} isOdd={isOdd} /> )
//   return <ul>{numberList}</ul>
// }

// const App = () => {
//   const isEven = (number) => {
//     return number % 2 === 0
//   }

//   const isOdd = (number) => {
//     return number % 2 === 1
//   }

//   const isPrime = (number) => {
//     let prime = true
//     if(number === 0 || number === 1)
//       return false
//     for(let i = 2; i < number; i++)
//     {
//       if(number % i === 0)
//         prime = false; 
//     }
//     return prime
//   }

//   let numbers = []
//   for(let i = 0; i < 32; i++)
//   {
//     numbers.push(i)
//   }

//   return (
//     <div className='container'>
//       <div>
//         <h1>30 days of React</h1>
//         <h2>Number Generator</h2>
//         <Numbers numbers={numbers} isPrime={isPrime} isEven={isEven} isOdd={isOdd}/>
//       </div>
//     </div>
//   )
// }

// const Color = ({hexColor}) => {
//   let hexColors = []
//   for(let i = 0; i < 32; i ++){
//     hexColors.push(hexColor())
//   }
//   console.log(hexColors)
//   const colors = hexColors.map((color) => <li key={color} style={{backgroundColor: color}}>{color}</li>)
//   return colors
// }

// const Colors = ({hexColor}) => {
//   return (
//     <div>
//       <ul><Color hexColor={hexColor} /></ul>
//     </div>
//   )
// }

// const App = () => {
//   const hexColor = () => {
//     const hex = "0123456789abcdef"
//     let color = ""
//     for(let i = 0; i < 6; i++)
//     {
//       let index = Math.floor(Math.random() * hex.length)
//       color += hex[index]
//     }

//     return "#" + color
//   }

//   return (
//     <div className='container'>
//       <div>
//         <h1>30 days of React</h1>
//         <h2>Hexadecimal Colors</h2>
//         <Colors hexColor={hexColor}/>
//       </div>
//     </div>
//   )
// }