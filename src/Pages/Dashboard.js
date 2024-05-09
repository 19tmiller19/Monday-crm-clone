import React from 'react'
import TicketCard from '../Components/TicketCard'


const Dashboard = () => {

  const tickets =[
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'NFT Safety 101 Video',
      owner: 'Barry Bonds',
      avatar: '',
      status:'Done',
      priority: 5,
      progress: 40,
      description: 'make avideo showcasing how to make nfts',
      timestamp: '2024-08-05t03:52:17+0000'

    },
    {
      category: 'Q1 2022',
      color: 'blue',
      title: 'watery saftey Video',
      owner: 'Howie Dooin',
      avatar: '',
      status:'stuck',
      priority: 2,
      progress: 70,
      description: 'make a website about water saftey',
      timestamp: '2024-08-05t03:52:17+0000'

    },
    {
      category: 'Q2 2022',
      color: 'red',
      title: 'Build a Bot',
      owner: 'Justin Case',
      avatar:'',      
      status:'working on it',
      priority: 3,
      progress: 10,
      description: 'make a video about building a bot',
      timestamp: '2024-08-05t03:52:17+0000'

    }
  ]

  const colors =[
    'rgb(255,179,186)',
    'rgb(255,233, 186)',
    'rgb(255,255, 186)',
    'rgb(186,255,201)',
    'rgb(186,255,255)'
  ]

  const uniqueCategories =[
    ...new Set(tickets?.map(({category})=> category))
  ]

  console.log(uniqueCategories)


  return (
    <div className='dashboard'>
      <h1>My Project</h1>
      <div className='ticket-container'>
       {tickets && uniqueCategories?.map((uniqueCategory, categoreyIndex)=>(
          <div key={categoreyIndex}>
            <h3>{uniqueCategory}</h3>
            {tickets.filter(ticket=> ticket.category === uniqueCategory)
            .map((filteredTicket, _index)=>(
              <TicketCard id={_index}
                          color={colors[categoreyIndex] || colors[0]}
                          ticket={filteredTicket}
                />
            ))
            }
          </div>
       ))}
      </div>
    </div>
  )
}

export default Dashboard