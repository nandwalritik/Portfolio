import React from 'react'
import '../../App.css'
import './Experience.css'
import expData from './expData'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {

    return (
        <div className="expContainer" id="Experiences">
            <div className="globalDivider">
            </div>
            <h2 className="globalDividerTitle">Experience</h2>
            <VerticalTimeline>
                {
                    expData.map((item, index) => (
                        (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'gray', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  gray' }}
                                date={item.time}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">{item.Position}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{item.Company}</h4>
                                <p>
                                    {item.description.map((elem, ind) => {
                                        return (
                                            <>
                                                {elem}
                                                <br />
                                            </>
                                        )
                                    })}
                                </p>

                            </VerticalTimelineElement>
                        )
                    ))

                }
            </VerticalTimeline>
        </div>
    )
}
export default Experience