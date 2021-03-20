import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { FaArrowDown } from 'react-icons/fa';
import { Container } from './styles';
import { userContext } from '../../context/userContext';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const Repositories: React.FC = () => {
  const { repositories } = useContext(userContext);
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        {repositories.map(repository => (
          <Accordion>
            <AccordionSummary
              expandIcon={<FaArrowDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <p className="repository-title">{repository.name}</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div>
                  <p className="repository-description">
                    {repository.description
                      ? repository.description
                      : 'sem descrição'}
                  </p>
                </div>
              </Typography>
              <a
                href={repository.html_url}
                className="git-button"
                rel="noreferrer"
                target="_blank"
              >
                <button type="button">Ver Repositorio</button>
              </a>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Container>
  );
};
