import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Select,
  Button,
  Alert,
  AlertIcon,
  Text
} from '@chakra-ui/react'

import create from '../services/contact'

//TODO Submit not work > There is no Data log in console

const ContactForm = () => {
  const [formStep, setFormStep] = useState(0)

  //*React Hook Form > useForm() init
  const {
    handleSubmit,
    register,
    formState: { errors, isValid }
  } = useForm({
    mode: 'all'
  })

  const onSubmit = async data => {
    const form = {
      name: `${data.firstname}, ${data.lastname}`,
      email: data.email,
      subject: data.subject
    }

    try {
      await create({ data: form })
    } catch (err) {
      console.log(err)
    }

    completeFromStep()
  }

  const completeFromStep = () => {
    setFormStep(prev => prev + 1)
  }

  return (
    <Box align="center" my={4}>
      <Heading as="h3" variant="section-title" textAlign="center">
        Leave me a message
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formStep >= 0 && (
          <FormControl
            style={formStep === 0 ? { display: 'block' } : { display: 'none' }}
          >
            <FormLabel htmlFor="firstname">First name</FormLabel>
            <Input
              borderColor="#333"
              id="firstname"
              placeholder="First name"
              {...register('firstname', {
                required: 'This is required.',
                minLength: {
                  value: 2,
                  message: 'Min length is 2'
                },
                pattern: {
                  value: /^[A-zÀ-ú]+$/i,
                  message: 'No number in your name please'
                }
              })}
              aria-invalid={errors.firstname?.message ? 'true' : null}
            />
            <Text
              as="i"
              color="red"
              fontSize="13px"
              fontWeight="bold"
              data-testid="errorMsg"
            >
              {errors.firstname?.message}
            </Text>

            <FormLabel htmlFor="lastname" mt={5}>
              Last name
            </FormLabel>
            <Input
              borderColor="#333"
              id="lastname"
              placeholder="Last name"
              {...register('lastname', {
                required: 'This is required.',
                minLength: {
                  value: 2,
                  message: 'Min length is 2'
                },
                pattern: {
                  value: /^[A-zÀ-ú]+$/i,
                  message: 'No number in your name please'
                }
              })}
              aria-invalid={errors.lastname?.message ? 'true' : null}
            />
            <Text
              as="i"
              color="red"
              fontSize="13px"
              fontWeight="bold"
              data-testid="errorMsg"
            >
              {errors.lastname?.message}
            </Text>
          </FormControl>
        )}

        {formStep >= 1 && (
          <FormControl
            style={formStep === 1 ? { display: 'block' } : { display: 'none' }}
          >
            <FormLabel htmlFor="subject">
              What do you want to talk about ?
            </FormLabel>
            <Select
              id="subject"
              placeholder="Select subject"
              {...register('subject')}
              data-testid="subject"
            >
              <option value="create react app">Create React App</option>
              <option value="html/css">Make an Html/Css integration</option>
              <option value="ui design">Create a Ui design</option>
              <option value="chara design">Imagine a Character design</option>
              <option value="job alert">You are looking to hire me</option>
              <option value="hello">Just say hello Rar !</option>
            </Select>
            <FormHelperText>
              For an efficient exchange, please select an option.
            </FormHelperText>
          </FormControl>
        )}

        {formStep >= 2 && (
          <FormControl
            style={formStep === 2 ? { display: 'block' } : { display: 'none' }}
          >
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              borderColor="#333"
              id="email"
              type="email"
              {...register('email', {
                required: 'This is required.',
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                  message: 'Entre a valid email please'
                }
              })}
              aria-invalid={errors.email?.message ? 'true' : null}
            />
            <Text
              as="i"
              color="red"
              fontSize="13px"
              fontWeight="bold"
              data-testid="errorMsg"
            >
              {errors.email?.message}
            </Text>
            <FormHelperText>We&rsquo;ll never share your email.</FormHelperText>
          </FormControl>
        )}

        {formStep === 3 && (
          <Alert status="success" borderRadius={10}>
            <AlertIcon />
            Your message has been successfully sent. Response asap!
          </Alert>
        )}

        {formStep > 2 ? undefined : formStep === 2 ? (
          <Button mt={4} colorScheme="red" type="submit" disabled={!isValid}>
            Submit
          </Button>
        ) : (
          <Button
            mt={4}
            colorScheme="yellow"
            type="button"
            onClick={completeFromStep}
            disabled={!isValid}
          >
            Next step
          </Button>
        )}
      </form>
    </Box>
  )
}

export default ContactForm
