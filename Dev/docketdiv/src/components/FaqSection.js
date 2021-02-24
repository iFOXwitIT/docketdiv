import React from 'react';
import Section from 'components/Section';
import Container from '@material-ui/core/Container';
import SectionHeader from 'components/SectionHeader';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  accordion: {
    // Remove shadow
    boxShadow: 'none',
    '&:before': {
      // Remove default divider
      display: 'none',
    },
    // Add a custom border
    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  expanded: {
    margin: `0 !important`,
  },
  summary: {
    minHeight: 78,
  },
  summaryContent: {
    margin: '0 !important',
  },
}));

function FaqSection(props) {
  const classes = useStyles();

  const items = [
    {
      question: 'Why am I here?',
      answer: 'You are responsible for your own life.',
    },
    {
      question: 'What does Chuck Norris have to do with this?!',
      answer:
        "Absolutely nothing...and everything...you'll see...in 5-4-3-2....",
    },
    {
      question: 'Is this product complicated?',
      answer: 'Nope.',
    },
    {
      question: 'Why is the product so expensive?',
      answer:
        "It's not, you're just cheap.  Unless you're a public defender in which case you're due back at the courthouse in 15.",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="md">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />

        {items.map((item, index) => (
          <Accordion
            classes={{
              root: classes.accordion,
              expanded: classes.expanded,
            }}
            key={index}
          >
            <AccordionSummary
              classes={{
                root: classes.summary,
                content: classes.summaryContent,
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-panel-${index}`}
            >
              <Typography variant="h6">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails id={`faq-panel-${index}`}>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Section>
  );
}

export default FaqSection;
