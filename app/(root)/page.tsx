import React from 'react' 
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
      const loggedIn = {
    firstName: 'Edilson', 
    lastName: 'Olegario',
    email: 'edilson_olegario@hotmail.com'
  };

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                    type='greeting'
                    title='Welcome to the App '
                    user= {loggedIn?.firstName || 'Guest'}
                    subtext='Access and manage your account and transactions efficiently'
                />
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />                
            </header>
            RECENT TRANSACTIONS
        </div>
        <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 123.50}, {currentBalance: 500.00}]}
        />
    </section>
  )
}

export default Home