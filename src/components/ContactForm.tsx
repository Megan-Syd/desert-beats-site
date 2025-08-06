'use client';

import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const topics = ['Registration', 'Beginner class', 'FCBD® or Fusion', 'Other'];
// reg: Chris
// beginner: Jodie (Mel for now)
// fcbd and fusion: Quinn
// other: Mel

interface FormValues {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export default function ContactForm() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
        defaultValues: {
          name: '',
          email: '',
          topic: '',
          message: '',
        },
      });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const onSubmit = async (data: FormValues) => {
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('sent');
        reset(); // Clear the form
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <Card
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
    >

    {/* <CardHeader title="Get In Touch"/> */}
    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant='h3'>Get In Touch</Typography>

      <Controller
        name="name"
        control={control}
        rules={{ required: 'Name is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Name"
            error={!!errors.name}
            helperText={errors.name?.message}
            fullWidth
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            message: 'Invalid email address',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />
        )}
      />

      <Controller
        name="topic"
        control={control}
        rules={{ required: 'Please select a topic' }}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label="Topic"
            error={!!errors.topic}
            helperText={errors.topic?.message}
            fullWidth
          >
            {topics.map((topic) => (
              <MenuItem key={topic} value={topic}>
                {topic}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      <Controller
        name="message"
        control={control}
        rules={{ required: 'Message is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Message"
            multiline
            rows={5}
            error={!!errors.message}
            helperText={errors.message?.message}
            fullWidth
          />
        )}
      />

      <Button sx={{backgroundColor: 'gray'}} variant="contained" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send'}
      </Button>

      {status === 'sent' && (
          <Typography color="success.main">Message sent successfully!</Typography>
          )}
      {status === 'error' && (
          <Typography color="error.main">Something went wrong. Please try again.</Typography>
          )}
    </CardContent>
    </Card>
  );
}
