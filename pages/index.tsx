import type { NextPage } from 'next'
import Head from 'next/head'
import AddEventModal from '../components/AddEventModal'
import Calendar from '../components/Calendar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  const fakeData = [
    {
      name:"Vanessa's Birthday",
      date:"18th June 2023",
      desc:"It's your girlfriend's birthday. Don't screw it up",
      link:"https://seasu.space"
    },
    {
      name:"Vanessa's Birthday",
      date:"24th June 2023",
      desc:"It's your girlfriend's birthday. Don't screw it up",
      link:"https://seasu.space"
    },
    {
      name:"Vanessa's Birthday",
      date:"18th June 2023",
      desc:"It's your girlfriend's birthday. Don't screw it up",
      link:"https://www.eventbrite.com/l/sell-tickets/?&utm_source=google&utm_medium=cpc&utm_campaign=US_BAU_GA01_01_BR_1PP_Clicks_Core&gclid=CjwKCAiAyfybBhBKEiwAgtB7flFdwJTeXd8vY4kzQySb50XYzy1kP9xBaWesUJYsT_F_yW-GJmDeVxoCVZYQAvD_BwE&gclsrc=aw.ds"
    }
  ]
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Header></Header>
      <Hero></Hero>
      <AddEventModal></AddEventModal>
      <Calendar events={fakeData}></Calendar>
      <Footer></Footer>
    </>
  )
}

export default Home
