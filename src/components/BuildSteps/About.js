import { FormControl, FormLabel, HStack, Input, Stack } from "@chakra-ui/react";
import React from "react";
import { useResume } from "../../Context";
import Files from "react-files";

const About = () => {
  const { about, setAbout } = useResume();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAbout({ ...about, [name]: value });
  };

  const onFilesChange = (files) => {
    console.log(files[0].preview.url);
    setAbout({ ...about, picture: files[0].preview.url });
  };

  const onFilesError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };

  return (
    <>
      <Stack spacing={4} mb={2}>
        <HStack spacing={6}>
          <Files
            className="files-dropzone"
            onChange={onFilesChange}
            onError={onFilesError}
            accepts={["image/png"]}
            maxFileSize={10000000}
            minFileSize={0}
            clickable
          >
            Upload Image
          </Files>

          <FormControl>
            <FormLabel htmlFor="name">Full Name</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="name"
              id="name"
              type="text"
              variant="filled"
              placeholder="Full Name"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="role">Role</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="role"
              id="role"
              type="text"
              variant="filled"
              placeholder="Role"
            />
          </FormControl>
        </HStack>

        <HStack spacing={6}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="email"
              id="email"
              type="email"
              variant="filled"
              placeholder="Email"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="phone"
              id="phone"
              type="tel"
              variant="filled"
              placeholder="Phone"
            />
          </FormControl>
        </HStack>

        <HStack spacing={6}>
          <FormControl>
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="address"
              id="address"
              type="text"
              variant="filled"
              placeholder="Address"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="linkedin">LinkedIn</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="linkedin"
              id="linkedin"
              type="url"
              variant="filled"
              placeholder="https://linkedin.com"
            />
          </FormControl>
        </HStack>
      </Stack>
    </>
  );
};

export default About;
