import {Timeline, Button} from 'flowbite-react'
import {CalendarIcon} from '@heroicons/react/24/solid'

function Calendar(props:any): JSX.Element{
    return(
        <section className="body mt-4 mx-10 mb-6 pb-8">
            <Timeline>
                {props.events?.map((event:any)=>(
                    <Timeline.Item  key={event.name}>
                    <Timeline.Point icon={CalendarIcon} />
                    <Timeline.Content>
                    <Timeline.Time color='white'>
                        {event.date}
                    </Timeline.Time>
                    <Timeline.Title>
                        {event.name}
                    </Timeline.Title>
                    <Timeline.Body>
                        {event.desc}
                    </Timeline.Body>
                    <Button color="gray" href={event.link}>
                        Learn More
                    </Button>
                    </Timeline.Content>
                    </Timeline.Item>
                ))}

            </Timeline>
        </section>
    )
}

export default Calendar