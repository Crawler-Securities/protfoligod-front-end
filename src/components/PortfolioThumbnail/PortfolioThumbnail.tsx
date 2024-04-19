import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface PortfolioThumbnailProps {
  name?: string;
  availableCash?: number;
  assignedCash?: number;
  pnl?: number;
}

const PortfolioThumbnail: React.FC<PortfolioThumbnailProps> = ({
  name = "Default Portfolio",
  availableCash = 0,
  assignedCash = 0,
  pnl = 0,
}) => {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Portfolio Name
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={6}>
            <Typography variant="body2">
              Available Cash: ${availableCash.toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">
              Assigned Cash: ${assignedCash.toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
        <Typography sx={{ mt: 2 }} variant="body2">
          PnL: {pnl >= 0 ? `+ $${pnl.toLocaleString()}` : `- $${Math.abs(pnl).toLocaleString()}`} ({assignedCash ? ((pnl / assignedCash) * 100).toFixed(2) : "0.00"}%)
        </Typography>
        <Typography sx={{ mt: 2, fontStyle: 'italic' }} variant="body2">
          PnL Graph Coming Soon
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PortfolioThumbnail;
