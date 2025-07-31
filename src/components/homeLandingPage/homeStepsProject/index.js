"use client"
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Icon from '@/components/icon';

// -----------------------------------------------------------

const HomeProjectSteps = () => {
    return (
        <div className='w-fill flex justify-center items-center'>
            <div className='w-full max-w-[1200px] flex flex-col justify-center items-center pt-20'>
                <h1 className='text-6xl text-thirdColor font-bold'>
                    Steps
                </h1>
                <div className='py-20'>
                    <Timeline position="alternate">

                        {/* Step - 1  */}
                        <TimelineItem>
                            <TimelineOppositeContent sx={{ paddingTop: "38px" }}                        >
                                <p className='text-thirdColor font-semibold text-xl pr-6'>
                                    Step 1
                                </p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector color="#9ca3af" sx={{ minHeight: '10px' }} />
                                <TimelineDot sx={{ p: "8px" }} variant='outlined'>
                                    <Icon width={50} icon={"fluent:board-20-filled"} className={"text-secondColor"} />
                                </TimelineDot>
                                <TimelineConnector color="#9ca3af" sx={{ minHeight: '100px' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2, pt: 4 }}>
                                <p className='text-fourthColor pl-4 text-xl font-bold'>
                                    Create Board
                                </p>
                                <p className='text-white pl-4 opacity-[0.6]'>
                                    Start a new project board for your team.
                                </p>

                            </TimelineContent>
                        </TimelineItem>

                        {/* Step - 2  */}
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ paddingTop: "28px" }}
                            >
                                <p className='text-thirdColor font-semibold text-xl pl-4'>
                                    Step 2
                                </p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot
                                    variant='outlined'
                                    sx={{
                                        borderColor: '#ef4444',
                                        p: "8px"
                                    }}
                                >
                                    <Icon width={50} icon={"iconoir:task-list"} className={"text-white"} />
                                </TimelineDot>
                                <TimelineConnector color="#9ca3af" sx={{ minHeight: '100px' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2, pt: "20px" }}>
                                <p className='text-white pr-6 text-xl font-bold'>
                                    Add Tasks
                                </p>
                                <p className='text-white pr-6 opacity-[0.6]'>
                                    Quickly add tasks and assign members.
                                </p>
                            </TimelineContent>
                        </TimelineItem>

                        {/* Step - 3  */}
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ paddingTop: "32px" }}
                                align="right"
                            >
                                <p className='text-thirdColor font-semibold text-xl pr-6'>
                                    Step 3
                                </p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot
                                    variant='outlined'
                                    sx={{
                                        borderColor: '#9ca3af',
                                        p: "8px"
                                    }}>
                                    <Icon width={50} icon={"carbon:growth"} className={"text-secondColor"} />
                                </TimelineDot>
                                <TimelineConnector color="#9ca3af" sx={{ minHeight: "100px" }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <p className='text-white pl-4 text-xl font-bold'>
                                    Track Progress
                                </p>
                                <p className='text-white pl-4 opacity-[0.6]'>
                                    Move tasks in Kanban view & monitor workflow.
                                </p>
                            </TimelineContent>
                        </TimelineItem>

                        {/* Step - 4  */}
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ paddingTop: "28px" }}
                                align="right"
                            >
                                <p className='text-thirdColor font-semibold text-xl pl-4'>
                                    Step 4
                                </p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot
                                    variant='outlined'
                                    sx={{
                                        borderColor: '#ef4444',
                                        p: "8px"
                                    }}>
                                    <Icon width={50} icon={"oui:nav-reports"} className={"text-white"} />
                                </TimelineDot>
                                <TimelineConnector color="#9ca3af" sx={{ minHeight: '10px' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2, pt: "20px" }}>
                                <p className='text-white pr-6 text-xl font-bold'>
                                    Get Reports
                                </p>
                                <p className='text-white pr-6 opacity-[0.6]'>
                                    Analyze team performance in real time.
                                </p>
                            </TimelineContent>

                        </TimelineItem>
                    </Timeline>

                </div>
            </div>
        </div>
    );
}

export default HomeProjectSteps;