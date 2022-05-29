import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { useStyles, IconWrapper } from './Card.styled';
import { useDispatch } from 'react-redux';
import { AddVote, DownVote } from 'data/actions/mem.actions.js';

const MyCard = ({ data }) => {
  const dispatch = useDispatch();
  const { uuid, title, mem_image, added_datetime, upvotes, downvotes } = data;
  const { card, media, content, divider } = useStyles();
  return (
    <Card className={card}>
      <CardMedia className={media} image={mem_image} />
      <CardContent className={content}>
        <Typography variant={'h6'} gutterBottom>
          {title}
        </Typography>
        <Typography variant={'subtitle2'}>
          Added Datetime:{' '}
          {new Date(added_datetime).toLocaleString('pl-PL', {
            dateStyle: 'short',
            timeStyle: 'short',
          })}
        </Typography>
      </CardContent>
      <Divider className={divider} />
      <IconWrapper>
        <IconButton
          aria-label='downvote'
          onClick={() => dispatch(DownVote(uuid))}
        >
          <ThumbDownOutlinedIcon style={{ color: '#e32524' }} />
        </IconButton>
        <IconButton aria-label='upvote' onClick={() => dispatch(AddVote(uuid))}>
          <ThumbUpOutlinedIcon style={{ color: '#028A0F' }} />
        </IconButton>
      </IconWrapper>
    </Card>
  );
};

export default MyCard;
