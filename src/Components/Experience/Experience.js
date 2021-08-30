import React from 'react'
import '../../App.css'
import './Experience.css'
import expData from './expData'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useMediaQuery } from 'react-responsive'
const Experience = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1186px)'
    })
    return (
        <div className="expContainer" id="Experiences">
            <div className="globalDivider">
            </div>
            <h2 className="globalDividerTitle">Experience</h2>
            <VerticalTimeline
                animate={isDesktopOrLaptop}
            >
                {
                    expData.map((item, index) => (
                        (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '	#606060', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  	#606060' }}
                                date={item.time}

                                iconStyle={{ background: '#7FFFD4', color: '#fff' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title" style={{ color: "#7DF9FF" }}>{item.Position}</h3>
                                <h4 className="vertical-timeline-element-subtitle" style={{ color: "white" }}>{item.Company}</h4>
                                <ul>
                                    {item.description.map((elem, ind) => {
                                        return (
                                            <li>
                                                {elem}
                                            </li>
                                        )
                                    })}
                                </ul>

                            </VerticalTimelineElement>
                        )
                    ))

                }
            </VerticalTimeline>
        </div>
    )
}
export default Experience