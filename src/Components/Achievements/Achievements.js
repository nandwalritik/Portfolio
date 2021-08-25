import React from 'react'
import '../../App.css'
import './Achievements.css'
import '../../App.css'
import achData from './achievementsData'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Achievements = () => {
    return (
        <div className="expContainer" id="Achievements">
            <div className="globalDivider">
            </div>
            <h2 className="globalDividerTitle">Achievements</h2>
            <VerticalTimeline>
                {
                    achData.map((item, index) => (
                        (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '	#606060', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  	#606060' }}
                                date={item.time}
                                iconStyle={{ background: '#7FFFD4', color: '#fff' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title" style={{ color: "#7DF9FF" }}>{item.Name}</h3>
                                <h4 className="vertical-timeline-element-subtitle" style={{ color: "white" }}>{item.problemSol}</h4>
                                <h5 className="vertical-timeline-element-subtitle" style={{ color: "white" }}>{item.Description}</h5>

                                {/* <ul>
                                    {item.description.map((elem, ind) => {
                                        return (
                                            <li>
                                                {elem}
                                            </li>
                                        )
                                    })}
                                </ul> */}

                            </VerticalTimelineElement>
                        )
                    ))

                }
            </VerticalTimeline>
        </div>)
}
export default Achievements