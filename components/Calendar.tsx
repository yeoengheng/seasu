import {Timeline, Button} from 'flowbite-react'
import {CalendarIcon} from '@heroicons/react/24/solid'

function Calendar(props:any): JSX.Element{
    return(
        <section className="bg-white dark:bg-gray-900 mt-2 mx-32">
            <Timeline>
                {props.events?.map((event:any)=>(
                    <Timeline.Item key={event.name}>
                    <Timeline.Point icon={CalendarIcon} />
                    <Timeline.Content>
                    <Timeline.Time>
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