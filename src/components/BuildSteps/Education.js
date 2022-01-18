import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, FormControl, FormLabel, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useResume } from '../../Context';

const Education = () => {

    const { educationList, setEducationList } = useResume();

    const addMore = () => {
        setEducationList([...educationList, educationList]);
    }

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedEducation = educationList.map((edu, i) => (
            index === i ? Object.assign(edu, { [name]: value }) : edu
        ));

        setEducationList(updatedEducation);
    }

    return (
        <>
            <Accordion allowToggle defaultIndex={[0]}>
                {
                    educationList.map((education, index) => (
                        <AccordionItem key={index}>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontWeight={'medium'}>{education.degree ? education.degree : "Degree"}</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>

                                <VStack spacing={4}>
                                    <Input onChange={(e) => handleChange(e, index)} name='degree' type='text' variant='filled' placeholder='Degree' />
                                    <Input onChange={(e) => handleChange(e, index)} name='school' type='text' variant='filled' placeholder='School' />
                                </VStack>

                                <HStack spacing={4} mt={4}>
                                    <FormControl>
                                        <FormLabel htmlFor='startyr'>Start Year</FormLabel>
                                        <Input onChange={(e) => handleChange(e, index)} name='startYr' id='startyr' type="number" variant='filled' min="1900" max="2030" placeholder='Start Year' />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel htmlFor='endyr'>End Year</FormLabel>
                                        <Input onChange={(e) => handleChange(e, index)} name='endYr' id='endyr' type="number" variant='filled' min="1900" max="2030" placeholder='Start Year' />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel htmlFor='grade'>Grade</FormLabel>
                                        <Input onChange={(e) => handleChange(e, index)} name='grade' id='grade' type='text' variant='filled' placeholder='Grade' />
                                    </FormControl>

                                </HStack>

                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>

            {
                educationList.length < 2 && (
                    <Button colorScheme={'purple'} my={5} onClick={addMore}>Add More</Button>
                )
            }

        </>
    )
}

export default Education
