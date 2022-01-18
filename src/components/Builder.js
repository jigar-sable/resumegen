import { TabList, Tabs, Tab, TabPanels, TabPanel, Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useResume } from '../Context'
import About from './BuildSteps/About'
import Education from './BuildSteps/Education'
import Projects from './BuildSteps/Projects'
import Skills from './BuildSteps/Skills'
import Work from './BuildSteps/Work'

const Builder = () => {

    return (
        <Box
            bg={'white'}
            w={'full'}
            maxW={'xl'}
            // minH={'100vh'}
            rounded={'md'}
            shadow={'md'}
            overflow={'hidden'}
        >
            <Tabs isFitted variant='enclosed'>
                <TabList>
                    <Tab><Text fontWeight={'medium'}>About</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Education</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Skills</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Work</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Projects</Text></Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <About />
                    </TabPanel>
                    <TabPanel>
                        <Education />
                    </TabPanel>
                    <TabPanel>
                        <Skills />
                    </TabPanel>
                    <TabPanel>
                        <Work />
                    </TabPanel>
                    <TabPanel>
                        <Projects />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default Builder
