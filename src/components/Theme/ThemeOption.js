import { Box, useRadio } from '@chakra-ui/react'
import React from 'react'

const ThemeOption = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor={'pointer'}
                borderWidth={'1px'}
                rounded={'full'}
                boxShadow={'sm'}
                bg={props.children}
                _checked={{
                    borderColor: 'teal.600',
                }}
                p={5}
            >
            </Box>
        </Box>
    )
}

export default ThemeOption
