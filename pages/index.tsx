import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import AddEventModal from '../components/AddEventModal'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import supabase from '../config/supabase'
import Timeline from '../components/Timeline'


const Home: NextPage = (props:any) => {
  const [showModal, setShowModal] = useState(false)
  const handleCloseModal = ()=>{setShowModal(false)}
  return (
    <>
      <Head>
        <title>SG's Tech Calendar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content='A simple calendar with all the tech events in Singapore'/>
        <link rel="icon" href="https://svgshare.com/i/osE.svg"></link>
      </Head>
      <Header setShowModal={setShowModal}></Header>
      <Hero></Hero>
      <AddEventModal visible={showModal} closeModal={handleCloseModal}></AddEventModal>
      <Timeline events={props.data}></Timeline>
      <Footer></Footer>
    </>
  )
}

export default Home

export async function getServerSideProps(context:any) {
  var today:any = new Date()
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  async function fetchEvents() {
    let { data: seasu_events, error } = await supabase
    .from('seasu_events')
    .select('*')
    .gte("date",today)
    .order("date",{ascending:true})
    return seasu_events
  }
  const data = await fetchEvents()
  return {
    props: {data}, // will be passed to the page component as props
  }
}

