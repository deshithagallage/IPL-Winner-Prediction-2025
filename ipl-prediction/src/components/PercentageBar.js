import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 3,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 3,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ minWidth: 150 }}>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.75);">{props.team1Name}</Typography>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.5);">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
        <Box sx={{ width: '100%', mx: 1 }}>
          <BorderLinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 150 }}>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.75);">{props.team2Name}</Typography>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.5);">{`${Math.round(
            100-props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
    team1Name: PropTypes.string.isRequired,
    team2Name: PropTypes.string.isRequired,
};

function PercentageBar({ team1Name, team2Name, percentage }) {
  return (
    <div className="percentage-bar">
      <Box sx={{ width: '100%' }}>
        <LinearProgressWithLabel value={percentage} team1Name={team1Name} team2Name={team2Name} />
      </Box>
    </div>
  );
}

export default PercentageBar;
