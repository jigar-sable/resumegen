import { Box, Button, FormControl, FormLabel, HStack, Input, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useResume } from '../../Context';
import { useToast } from '@chakra-ui/react';

const Skills = () => {

    const toast = useToast();
    const [skill, setSkill] = useState("");
    const { skills, setSkills } = useResume();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!skill || skill === " ") {
            toast({
                title: 'Empty Input',
                status: 'error',
                isClosable: true,
            })
            return;
        }
        const newSkill = {
            id: uuidv4(),
            name: skill,
        }
        setSkills([...skills, newSkill]);
        setSkill("");
    }

    const deleteSkill = (id) => {
        setSkills(skills.filter((elem) => elem.id !== id))
    }

    return (
        <>
            <HStack spacing={4} alignItems={'flex-end'} as='form' onSubmit={(e) => handleSubmit(e)}>
                <FormControl>
                    <FormLabel htmlFor='skill'>Add Skills</FormLabel>
                    <Input onChange={(e) => setSkill(e.target.value)} value={skill} name='skill' id='skill' type='text' variant='filled' placeholder='Skill' />
                </FormControl>
                <Button type='submit' colorScheme={'purple'}>Add</Button>
            </HStack>

            <Box borderWidth={'1px'} rounded={'sm'} my={4} p={2}>
                {skills.length > 0 ? skills.map((skill, index) => (
                    <Tag
                        size={'lg'}
                        key={index}
                        borderRadius='full'
                        variant='solid'
                        colorScheme='purple'
                        m={0.5}
                        key={skill.id}
                    >
                        <TagLabel>{skill.name}</TagLabel>
                        <TagCloseButton onClick={() => deleteSkill(skill.id)} />
                    </Tag>
                )) : (
                    "No Skills Added"
                )}
            </Box>
        </>
    )
}

export default Skills
