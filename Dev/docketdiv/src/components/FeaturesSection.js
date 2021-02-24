import React from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/SectionHeader";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    marginTop: 60,
  },
  row: {
    // Reverse every other row
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
    },

    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(3)}px`,
    },
  },
  figure: {
    maxWidth: 300,
    margin: "30px auto",
  },
  image: {
    height: "auto",
    maxWidth: "100%",
  },
}));

function FeaturesSection(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Simple.",
      description:
        "Docket Calendar plugs right into your calendar and links directly to your local courts rules. In just a couple of clicks, you can create and enter all of the events related to your legal matter. Docket Calendar helps ensure that your deadlines are accurate, and on the calendar.",
      image:
        "https://dl.airtable.com/.attachmentThumbnails/c0b646a29189a51e12ee1dacece23ece/2fa45773",
    },
    {
      title: "Reliable.",
      description:
        "Using automated court rules to double-check deadlines, Docket Calendar helps legal professionals manage the process of ensuring that your critical dates are calculated accurately. Quickly access court rules and date rules for each and every critical date and enter all of your dates with lightning speed directly onto your calendar.",
      image:
        "https://dl.airtable.com/.attachmentThumbnails/90b3f0d9e630d194666b57a5fcb707da/a57223f4",
    },
    {
      title: "Efficient.",
      description:
        "Once the events are on your calendar, Docket Calendar keeps them linked together making changes to a large group of events on your calendar quick and easy. You will never have to worry about what is on your calendar because there is no online synchronization. So...lets get drunk!",
      image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg",
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
        <Container
          maxWidth="md"
          disableGutters={true}
          className={classes.itemsContainer}
        >
          {items.map((item, index) => (
            <Grid
              className={classes.row}
              container={true}
              item={true}
              alignItems="center"
              spacing={4}
              key={index}
            >
              <Grid item={true} xs={12} md={6}>
                <Box
                  textAlign={{
                    xs: "center",
                    md: "left",
                  }}
                >
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <figure className={classes.figure}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={classes.image}
                  />
                </figure>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
