import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles(() => ({
  card: {
    overflow: 'visible',
    maxWidth: 300,
    width: '100%',
    transition: '0.1s',
    backgroundColor: '#ecf3f9',
    boxShadow: '0 16px 100px -12.125px rgba(0,0,0,0.5)',
    '&:hover': {
      boxShadow: '0 24px 100px -12.125px rgba(0,0,0,0.9)',
    },
    position: 'relative',
  },
  star: {
    width: '48px',
    height: '48px',
    position: 'absolute',
    top: 0,
    right: 0,
    color: '#FFCD3C',
    '@media (min-width: 360px)': {
      transform: 'translate(50%, -50%)',
    },
  },
  media: {
    minHeight: '60.25%',
    width: 'auto',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },
  content: {
    textAlign: 'center',
    padding: 3,
  },
  divider: {
    margin: `6px 0`,
  },
}));

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
