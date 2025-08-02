"use client";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useMediaQuery } from '@mui/material';
import Icon from '@/components/icon';

const HomeProjectSteps = () => {

    const isMobile = useMediaQuery('(max-width:400px)');
    const isTab = useMediaQuery('(min-width:1024px)');

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[1200px] flex flex-col justify-center items-center pt-10 sm:pt-20 px-2">
                <h1 className="text-5xl md:text-6xl text-thirdColor font-bold text-center">
                    Steps
                </h1>
                <div className="py-20 w-full">
                    <Timeline position={isMobile ? "right" : "alternate"}>

                        {/* Step 1 */}
                        <TimelineItem>
                            <TimelineOppositeContent sx={{ paddingTop: "38px" }}>
                                <p className="text-thirdColor pr-2 font-semibold text-xl">
                                    Step 1
                                </p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ minHeight: isMobile ? '20px' : '10px', bgcolor: "#9ca3af" }} />
                                <TimelineDot sx={{ p: isMobile ? "4px" : "8px" }} variant="outlined">
                                    <Icon width={isMobile ? 30 : 50} icon={"fluent:board-20-filled"} className="text-secondColor" />
                                </TimelineDot>
                                <TimelineConnector sx={{ minHeight: isMobile ? '150px' : '100px', bgcolor: "#9ca3af" }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: isMobile ? '4px' : '12px', px: 2, pt: isMobile ? 4 : isTab ? "30px" : 3 }}>
                                <p className="text-fourthColor  pl-2 text-lg md:text-xl font-bold">
                                    Create Board
                                </p>
                                <p className="text-white pl-2 opacity-60 text-sm md:text-base">
                                    Start a new project board for your team.
                                </p>
                            </TimelineContent>
                        </TimelineItem>

                        {/* Step 2 */}
                        <TimelineItem>
                            <TimelineOppositeContent sx={{ paddingTop: isMobile ? "16px" : "28px" }}>
                                <p className="text-thirdColor pl-0 pr-2 sm:pr-0 font-semibold text-xl sm:pl-2">
                                    Step 2
                                </p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot
                                    variant="outlined"
                                    sx={{
                                        borderColor: '#ef4444',
                                        p: isMobile ? "4px" : "8px"
                                    }}
                                >
                                    <Icon width={isMobile ? 30 : 50} icon={"iconoir:task-list"} className="text-white" />
                                </TimelineDot>
                                <TimelineConnector sx={{ minHeight: isMobile ? '150px' : '100px', bgcolor: "#9ca3af" }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: isMobile ? '4px' : '12px', px: 2, pt: 2 }}>
                                <p className={`text-white sm:pr-2 text-lg md:text-xl font-bold ${isMobile && "pl-2"}`}>
                                    Add Tasks
                                </p>
                                <p className={`text-white sm:pr-2 opacity-60 text-sm md:text-base ${isMobile && "pl-2"}`}>
                                    Quickly add tasks and assign members.
                                </p>
                            </TimelineContent>
                        </TimelineItem>

                        {/* Step 3 */}
                        <TimelineItem>
                            <TimelineOppositeContent sx={{ paddingTop: isMobile ? "18px" : "32px" }} align="right">
                                <p className="text-thirdColor pr-2 font-semibold text-xl">
                                    Step 3
                                </p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot
                                    variant="outlined"
                                    sx={{
                                        borderColor: '#9ca3af',
                                        p: isMobile ? "4px" : "8px"
                                    }}>
                                    <Icon width={isMobile ? 30 : 50} icon={"carbon:growth"} className="text-secondColor" />
                                </TimelineDot>
                                <TimelineConnector sx={{ minHeight: isMobile ? "150px" : "100px", bgcolor: "#9ca3af" }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: isMobile ? '4px' : '12px', px: 2, pt: isTab ? "24px" : 2 }}>
                                <p className="text-white pl-2 text-lg md:text-xl font-bold">
                                    Track Progress
                                </p>
                                <p className="text-white pl-2 opacity-60 text-sm md:text-base">
                                    Move tasks in Kanban view & monitor workflow.
                                </p>
                            </TimelineContent>
                        </TimelineItem>

                        {/* Step 4 */}
                        <TimelineItem>
                            <TimelineOppositeContent sx={{ paddingTop: isMobile ? "20px" : "28px" }} align="right">
                                <p className="text-thirdColor font-semibold text-xl pr-2 sm:pr-0 pl-0 sm:pl-2">
                                    Step 4
                                </p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot
                                    variant="outlined"
                                    sx={{
                                        borderColor: '#ef4444',
                                        p: isMobile ? "4px" : "8px"
                                    }}>
                                    <Icon width={isMobile ? 30 : 50} icon={"oui:nav-reports"} className="text-white" />
                                </TimelineDot>
                                <TimelineConnector sx={{ minHeight: isMobile ? '10px' : '10px', bgcolor: "#9ca3af" }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: isMobile ? '4px' : '12px', px: 2, pt: 2 }}>
                                <p className={`text-white sm:pr-2 text-lg md:text-xl font-bold ${isMobile && "pl-2"}`}>
                                    Get Reports
                                </p>
                                <p className={`text-white sm:pr-2 opacity-60 text-sm md:text-base ${isMobile && "pl-2"}`}>
                                    Analyze team performance in real time.
                                </p>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default HomeProjectSteps;
