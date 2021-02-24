import React from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/SectionHeader";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

function TestimonialsSection(props) {
  const classes = useStyles();

  const items = [
    {
      avatar:
        "https://dl.airtable.com/.attachmentThumbnails/8b8735abd7adc4a6af6593c0ef70611c/b3300258",
      name: "Charleaux Chapeau",
      testimonial: "Fucking Incredible!",
      company: "In-House",
    },
    {
      avatar:
        "https://dl.airtable.com/.attachmentThumbnails/2d7b35a0f981e65b7dae70459d98e342/8439e08c",
      name: "Challan Cheaux",
      testimonial: "I mean...just...wow.",
      company: "Also In-House",
    },
    {
      avatar:
        "https://dl.airtable.com/.attachmentThumbnails/fd1d1cd3d535bb33cd7c022bdda241fa/a64c8132",
      name: "Docket Fox",
      testimonial: "You're Welcome!",
      company: "In-House Technology Provider",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Grid container={true} justify="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} sm={4} key={index}>
              <Card>
                <Box display="flex" justifyContent="center" pt={3}>
                  <Avatar
                    src={item.avatar}
                    alt={item.name}
                    className={classes.avatar}
                  />
                </Box>
                <CardContent>
                  <Box textAlign="center">
                    <Typography variant="body1" component="p">
                      "{item.testimonial}"
                    </Typography>
                    <Box mt={3}>
                      <Typography variant="body2" component="p">
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.company}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default TestimonialsSection;
