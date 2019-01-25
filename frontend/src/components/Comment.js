import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Score from './Score';


const Comment = ({
  id, author, timestamp, body, score, postId,
  increaseScoreFunc, decreaseScoreFunc,
  removeCommentFunc, openModalEditCommentFunc
}) => {

  return (
      <Card key={id}>

        <CardText>{author} commented on {moment(timestamp).format("MMM-DD-YYYY hh:mma")}</CardText>
        <CardText>{body}</CardText>

        <Score
          id={id}
          score={score}
          increaseScoreFunc={increaseScoreFunc}
          decreaseScoreFunc={decreaseScoreFunc}
        />

        <CardActions>
          <FlatButton primary={ true } label="Edit" onClick={ () => openModalEditCommentFunc({id, body, postId}) } />
          <FlatButton secondary={ true } label="Remove" onClick={ () => removeCommentFunc(id) } />
        </CardActions>
      </Card>
  );
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  postId: PropTypes.string.isRequired,
  increaseScoreFunc: PropTypes.func.isRequired,
  decreaseScoreFunc: PropTypes.func.isRequired,
  removeCommentFunc: PropTypes.func.isRequired,
  openModalEditCommentFunc: PropTypes.func.isRequired
}

export default Comment;