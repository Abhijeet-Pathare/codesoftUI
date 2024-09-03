import React, { useState } from 'react';
import { Box, Button, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const questions = [
  { id: 1, question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
  { id: 2, question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  // Add 8 more questions here...
  { id: 10, question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au" }
];

const QuizPage = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    return questions.reduce((score, question) => {
      if (answers[question.id] === question.answer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>Quiz</Typography>
      {questions.map((q) => (
        <FormControl key={q.id} component="fieldset" fullWidth margin="normal">
          <Typography variant="h6">{q.question}</Typography>
          <RadioGroup
            name={`question-${q.id}`}
            value={answers[q.id] || ''}
            onChange={(e) => handleChange(q.id, e.target.value)}
          >
            {q.options.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
      ))}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      {submitted && (
        <Box mt={4}>
          <Typography variant="h5">Your Score: {calculateScore()} / {questions.length}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default QuizPage;
